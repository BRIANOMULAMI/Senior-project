import { Request, Response } from "express";
import { db } from "../..";

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

export default {
  SchoolReportStatistics,
};
