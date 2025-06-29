import { Request, Response } from "express";
import { db } from "../..";
import PDFDocument from "pdfkit";

const SchoolReportStatistics = async (req: Request, res: Response) => {
  const userId = req.userId;
  try {
    const user = await db.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        school: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user) {
      res.status(400).json({
        message: "User not found",
      });
      return;
    }

    const schoolId = user.school?.id;
    const [
      TotalApplications,
      ApprovedApplications,
      PendingApplications,
      TotalPerformances,
      Scores,
    ] = await Promise.all([
      db.participants.count({
        where: {
          schoolId: schoolId,
        },
      }),
      db.participants.count({
        where: {
          schoolId,
          status: "APPROVED",
        },
      }),
      db.participants.count({
        where: {
          schoolId,
          status: "PENDING",
        },
      }),
      db.marks.count({
        where: {
          participant: {
            schoolId,
          },
        },
      }),
      db.marks.findMany({
        where: {
          participant: {
            schoolId,
          },
        },
        select: {
          score: true,
        },
      }),
    ]);

    const AverageScore =
      Scores.length > 0
        ? Scores.reduce((sum, score) => sum + score.score, 0) / Scores.length
        : 0;

    res.status(200).json({
      TotalApplications,
      ApprovedApplications,
      PendingApplications,
      TotalPerformances,
      AverageScore,
    });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const SchoolGetCompetitionRankings = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  if (!id) {
    res.status(400).json({ message: "A required field is missing" });
    return;
  }

  try {
    const competition = await db.marks.findMany({
      where: {
        participant: {
          competitionId: id,
        },
      },
      select: {
        id: true,
        score: true,
        participant: {
          select: {
            competition: {
              select: {
                name: true,
                maxParticipants: true,
              },
            },
            school: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        score: "desc",
      },
    });

    if (!competition) {
      res.status(400).json({ message: "Competition not found" });
      return;
    }
    res.status(200).json(competition);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export const SchoolDownloadCompetiotionReports = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params as { id: string };
  const userId = req.userId;

  if (!id) {
    res.status(400).json({ message: "A required field is missing" });
    return;
  }

  try {
    // Fetch the requesting school based on the logged-in user's ID
    const school = await db.school.findFirst({
      where: { userId },
    });

    if (!school) {
      res.status(404).json({ message: "School not found." });
      return;
    }

    // Fetch all marks awarded to the school's participant in the specified competition
    const competitionMarks = await db.marks.findMany({
      where: {
        participant: {
          competitionId: id,
          schoolId: school.id,
        },
      },
      select: {
        score: true,
        comments: true,
        judge: {
          select: {
            user: { select: { name: true } },
          },
        },
        participant: {
          select: {
            competition: {
              select: {
                name: true,
                maxParticipants: true,
                venue: true,
                schedule: true,
              },
            },
            school: {
              select: {
                user: { select: { name: true } },
              },
            },
          },
        },
      },
      orderBy: { score: "desc" },
    });

    if (!competitionMarks.length) {
      res
        .status(404)
        .json({ message: "No judging data found for this competition." });
      return;
    }

    const competitionDetails = competitionMarks[0].participant.competition;
    const schoolName = competitionMarks[0].participant.school.user.name;

    // Prepare response headers for PDF file
    const doc = new PDFDocument({ margin: 50 });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Competition_Report_${competitionDetails.name.replace(/\s+/g, "_")}.pdf`
    );

    doc.pipe(res);

    // Document Title
    doc
      .fontSize(24)
      .fillColor("#1f2937")
      .text("Competition Judging Report", { align: "center" });
    doc.moveDown();

    // Competition and School Summary
    doc
      .fontSize(14)
      .fillColor("black")
      .text(`School Name: ${schoolName}`)
      .moveDown(0.5)
      .text(`Competition: ${competitionDetails.name}`)
      .moveDown(0.5)
      .text(`Venue: ${competitionDetails.venue}`)
      .moveDown(0.5)
      .text(
        `Date: ${new Date(competitionDetails.schedule).toLocaleDateString()}`
      )
      .moveDown(1);

    // Section Heading
    doc
      .fontSize(16)
      .fillColor("#2563eb")
      .text("Judging Details:", { underline: true })
      .moveDown(0.5);

    // Table-like content
    doc
      .fontSize(12)
      .fillColor("black")
      .text("S/N", 50, doc.y, { continued: true })
      .text("Judge", 100, doc.y, { continued: true })
      .text("Score", 250, doc.y, { continued: true })
      .text("Comments", 320, doc.y);
    doc.moveDown(0.3);
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(0.5);

    competitionMarks.forEach((entry, index) => {
      doc
        .text(`${index + 1}`, 50, doc.y, { continued: true })
        .text(`${entry.judge.user.name}`, 100, doc.y, { continued: true })
        .text(`${entry.score}`, 250, doc.y, { continued: true })
        .text(`${entry.comments}`, 320, doc.y)
        .moveDown(0.5);
    });

    // Footer Summary
    const totalScore = competitionMarks.reduce((acc, m) => acc + m.score, 0);
    const avgScore = (totalScore / competitionMarks.length).toFixed(2);
    doc.moveDown(2);
    doc
      .fontSize(14)
      .fillColor("#059669")
      .text(`Total Judges: ${competitionMarks.length}`)
      .moveDown(0.3)
      .text(`Average Score: ${avgScore}`);

    doc.end();
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default {
  SchoolReportStatistics,
  SchoolGetCompetitionRankings,
  SchoolDownloadCompetiotionReports,
};
