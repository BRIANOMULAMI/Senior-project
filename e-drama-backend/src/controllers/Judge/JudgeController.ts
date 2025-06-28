import { Request, Response } from "express";
import { db } from "../..";
import { hash } from "bcryptjs";

const JudgeViewAssignedCompetitions = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ message: "UnAuthorized" });
    return;
  }

  try {
    const existingUser = await db.users.findFirst({
      where: {
        id: userId,
        AND: {
          role: {
            equals: "JUDGE",
          },
        },
      },
      select: {
        judge: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!existingUser) {
      res.status(400).json({ message: "UnAuthorized" });
      return;
    }

    const judgesCompetitions = await db.competition.findMany({
      where: {
        judges: {
          some: {
            id: existingUser.judge?.id,
          },
        },
      },
    });

    res.status(200).json(judgesCompetitions);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const JudgeGetSchoolRegisteredForCompetition = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params as {
    id: string;
  };

  if (!id) {
    res.status(400).json({ message: "Please provide all fields" });
    return;
  }

  try {
    const competition = await db.competition.findFirst({
      where: {
        id,
      },
    });

    if (!competition) {
      res.status(404).json({ message: "competition not found" });
      return;
    }

    const registedSchools = await db.participants.findMany({
      where: {
        competitionId: id,
      },
      select: {
        id: true,
        competition: {
          select: {
            name: true,
          },
        },
        school: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(registedSchools);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const JudgeAwardMarks = async (req: Request, res: Response) => {
  const { comment, score } = req.body as {
    score: string;
    comment: string;
  };

  const { id } = req.params as { id: string };
  const userId = req.userId;

  if (!score || !comment || !id) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }
  if (!userId) {
    res.status(400).json({ message: "Missing userId" });
    return;
  }

  try {
    const existingParticipant = await db.participants.findFirst({
      where: {
        id,
      },
    });

    if (!existingParticipant) {
      res
        .status(404)
        .json({ message: "Participant is not registered for the competition" });
      return;
    }

    const User = await db.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        role: true,
        judge: {
          select: {
            id: true,
          },
        },
        school: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!User) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (User.role !== "JUDGE") {
      res.status(400).json({
        message: "UnAuthorized, You are not allowed to peferm the oprtaion",
      });
      return;
    }

    // Step 1: Get the participant info
    const participant = await db.participants.findFirst({
      where: {
        schoolId: User.school?.id,
      },
      select: {
        schoolId: true,
        competitionId: true,
      },
    });

    if (!participant) {
      res.status(404).json({
        message: "Participant not found",
      });
      return;
    }

    // Step 2: Check if this judge already awarded marks to this school in this competition
    const alreadyMarked = await db.marks.findFirst({
      where: {
        judgeId: User.judge?.id,
        participant: {
          schoolId: participant.schoolId,
          competitionId: participant.competitionId,
        },
      },
    });

    if (alreadyMarked) {
      res.status(400).json({
        message:
          "You have already awarded marks to this school for this competition.",
      });
      return;
    }

    await db.marks.create({
      data: {
        comments: comment,
        score: parseInt(score),
        participantId: id,
        judgeId: User.judge?.id || "",
      },
    });

    res.status(201).json({ message: "Marks awarded successfully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const GetJudgesScoredPeformance = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ message: "Missing userId" });
    return;
  }

  try {
    const judge = await db.users.findFirst({
      where: {
        id: userId,
        role: "JUDGE",
      },
      select: {
        role: true,
        judge: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!judge) {
      res.status(404).json({ message: "Judge not found" });
      return;
    }

    const scoredPerformances = await db.marks.findMany({
      where: {
        judgeId: judge.judge?.id,
      },
      select: {
        comments: true,
        createdAt: true,
        score: true,
        id: true,
        participant: {
          select: {
            competition: {
              select: {
                name: true,
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
    });
    res.status(200).json(scoredPerformances);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

interface EditJudgeDetailsBody {
  email: string;
  password: string;
  name: string;
  nationalId: string;
}

const EditJudgeDetails = async (req: Request, res: Response) => {
  const { email, password, name, nationalId } =
    req.body as Partial<EditJudgeDetailsBody>;

  if (!email && !password && !name && !nationalId) {
    res.status(400).json({ message: "At least one field is required" });
    return;
  }

  try {
    const existingJudge = await db.users.findFirst({
      where: { email },
      include: { judge: true },
    });

    if (!existingJudge) {
      res.status(404).json({ message: "Judge not found" });
      return;
    }

    if (existingJudge.role !== "JUDGE") {
      res.status(400).json({ message: "Unauthorized" });
      return;
    }

    if (nationalId && nationalId !== existingJudge.judge?.nationalId) {
      const nationalIdConflict = await db.judges.findFirst({
        where: { nationalId },
      });
      if (nationalIdConflict) {
        res.status(400).json({ message: "National ID already exists" });
        return;
      }
    }

    if (email && email !== existingJudge.email) {
      const emailConflict = await db.users.findFirst({
        where: { email },
      });
      if (emailConflict) {
        res.status(400).json({ message: "Email already exists" });
        return;
      }
    }

    const data: Partial<EditJudgeDetailsBody> = {};

    if (email) data.email = email;
    if (name) data.name = name;
    if (nationalId) data.nationalId = nationalId;
    if (password) {
      const hashed = await hash(password, 10);
      data.password = hashed;
    }

    await db.users.update({
      where: { id: existingJudge.id },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });

    if (data.nationalId) {
      await db.judges.update({
        where: { userId: existingJudge.id },
        data: {
          nationalId: data.nationalId,
        },
      });
    }

    res.status(200).json({ message: "Judge details updated successfully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default {
  JudgeViewAssignedCompetitions,
  JudgeGetSchoolRegisteredForCompetition,
  JudgeAwardMarks,
  GetJudgesScoredPeformance,
  EditJudgeDetails,
};
