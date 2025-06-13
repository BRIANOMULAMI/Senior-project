import { Request, Response } from "express";
import { db } from "../..";

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
    const [competition, school] = await Promise.all([
      db.competition.findUnique({
        where: { id: competitionId },
        include: { participants: true },
      }),
      db.school.findUnique({
        where: { userId: req.userId },
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

    res.status(200).json({ message: "School registered successfully" });
    return;
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};
const SchoolsViewTheirCompetitions = async (req: Request, res: Response) => {
  const user = req.userId;

  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const competitions = await db.competition.findMany({
      where: {
        participants: {
          some: {
            school: {
              userId: user,
            },
          },
        },
      },
      select: {
        name: true,
        schedule: true,
        totalParticipants: true,
      },
    });

    res.status(200).json({ data: competitions });
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
};
