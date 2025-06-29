import { Request, Response } from "express";
import { db } from "../..";
import { SendMail } from "../../Mail/Sender";
import { schoolWelcomeEmailHTML } from "../../Mail/Templates/SchoolsConfirmRegistration";
import { MailPayload, Sender } from "../../Mail/mail";

const SchoolRegisterCompetiton = async (req: Request, res: Response) => {
  const MAX_COMPETITION_PARTICIPANTS = 25;
  const { competitionId } = req.body as {
    competitionId: string;
  };

  if (!competitionId) {
    res.status(400).json({ message: "Please provide all fields" });
    return;
  }
  try {
    const [competition, school, user] = await Promise.all([
      db.competition.findUnique({
        where: { id: competitionId },
        include: { participants: true },
      }),
      db.school.findUnique({
        where: { userId: req.userId },
      }),
      db.users.findUnique({
        where: { id: req.userId },
      }),
    ]);

    if (!competition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }

    if (!school) {
      res.status(401).json({ message: "Unauthorized: school not found" });
      return;
    }

    if (competition.participants.some((p) => p.schoolId === school.id)) {
      res.status(400).json({ message: "School already registered" });
      return;
    }

    if (competition.participants.length >= MAX_COMPETITION_PARTICIPANTS) {
      res.status(400).json({ message: "Competition is full" });
      return;
    }

    await db.$transaction([
      db.participants.create({
        data: {
          schoolId: school.id,
          competitionId: competition.id,
        },
      }),
      db.competition.update({
        where: { id: competition.id },
        data: {
          totalParticipants: {
            increment: 1,
          },
        },
      }),
    ]);
    const mailPayload: MailPayload = {
      recepient: [{ email: user?.email || "" }],
      subject: "Competition Registration Confirmation",
      sender: Sender,
      html: schoolWelcomeEmailHTML(
        user?.name || "",
        competition.name,
        new Date(competition.schedule).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        competition.venue
      ),
    };

    SendMail(mailPayload);

    res.status(200).json({ message: "School registered successfully" });
    return;
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};
const SchoolsViewTheirCompetitions = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    // Get the school based on the logged-in user's ID
    const school = await db.school.findUnique({
      where: { userId },
    });

    if (!school) {
      res.status(404).json({ message: "School not found" });
      return;
    }

    // Fetch competitions where this school is a participant
    const competitions = await db.competition.findMany({
      where: {
        participants: {
          some: {
            schoolId: school.id,
          },
        },
      },
      select: {
        name: true,
        schedule: true,
        totalParticipants: true,
        participants: {
          where: {
            schoolId: school.id,
          },
          select: {
            createdAt: true,
            status: true,
          },
        },
      },
    });

    res.status(200).json(competitions);
    return;
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetAllCompetitonRequests = async (req: Request, res: Response) => {
  try {
    const AllCompetitionRequests = await db.participants.findMany({
      select: {
        competition: {
          select: {
            id: true,
            name: true,
            participants: {
              select: {
                status: true,
              },
            },
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
    });

    res.status(200).json(AllCompetitionRequests);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const SchoolGetCompetitonResults = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ message: "UnAuthorized" });
    return;
  }

  try {
    const school = await db.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        school: {
          select: {
            id: true,
            participant: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    if (!school) {
      res.status(404).json({ message: "User with credentials not found" });
      return;
    }

    const PerfomanceResults = await db.marks.findMany({
      where: {
        participantId: school.school?.participant[0].id,
      },
      select: {
        id: true,
        score: true,
        comments: true,
        participant: {
          select: {
            school: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            competition: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    if (!PerfomanceResults) {
      res.status(400).json({ message: "No results found" });
      return;
    }

    res.status(200).json(PerfomanceResults);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default {
  SchoolRegisterCompetiton,
  SchoolsViewTheirCompetitions,
  AdminGetAllCompetitonRequests,
  SchoolGetCompetitonResults,
};
