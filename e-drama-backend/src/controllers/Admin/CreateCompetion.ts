import { Request, Response } from "express";
import { CreateCompetitonsPayload } from "../../Types/types";
import { db } from "../..";
import { SendMail } from "../../Mail/Sender";
import { MailPayload, Sender } from "../../Mail/mail";
import { allocatedCompetitionEmailHTML } from "../../Mail/Templates/JudgesAllocatedCompetiton";

interface judgeDetails {
  name: string;
}
const MAX_JUDGES = 3;
const AdminCreateCompetiton = async (req: Request, res: Response) => {
  const { description, name, time, judgeId, location, maxSchools, status } =
    req.body as CreateCompetitonsPayload;
  if (
    !name ||
    !time ||
    !location ||
    !description ||
    !judgeId ||
    !status ||
    !maxSchools
  ) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  console.log(name, time, location, description, judgeId, status, maxSchools);

  let JUDGE_DETAILS: judgeDetails[] = [];
  if (judgeId.length > MAX_JUDGES) {
    res.status(400).json({
      message: `You can't add more than ${MAX_JUDGES} Judges for a single competiton`,
    });
    return;
  }
  try {
    let JUDGES_EMAILS = [];

    for (const judge of judgeId) {
      const MAX_COMPETITIONS = 3;
      const existingJudge = await db.judges.findFirst({
        where: {
          id: judge,
        },
        include: {
          competitions: true,
          user: {
            select: {
              email: true,
              name: true,
            },
          },
        },
      });

      if (!existingJudge) {
        res.status(404).json({ message: `Judge ${judge} not found` });
        return;
      }
      if (
        existingJudge &&
        existingJudge.competitions.length >= MAX_COMPETITIONS
      ) {
        const fullJudge = await db.judges.findFirst({
          where: {
            id: judge,
          },
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        });
        res.status(400).json({
          message: `Judge ${fullJudge?.user.name} has reached the maximum number of competitions`,
        });
        return;
      }

      JUDGES_EMAILS.push(existingJudge.user.email);
      JUDGE_DETAILS.push({
        name: existingJudge.user.name,
      });
    }

    const newCompetition = await db.competition.create({
      data: {
        description,
        name,
        venue: location,
        schedule: new Date(time),
        maxParticipants: parseInt(maxSchools),
        status: status,
        judges: {
          connect: judgeId.map((id) => ({ id })),
        },
      },
      include: {
        judges: true,
      },
    });
    let judge;
    for (let i = 0; i < JUDGE_DETAILS.length; i++) {
      judge = JUDGE_DETAILS[i];
    }
    const mailPayload: MailPayload = {
      sender: Sender,
      recepient: JUDGES_EMAILS.map((email) => ({ email })),
      subject: "New Competition",
      html: allocatedCompetitionEmailHTML(
        judge?.name ?? "",
        name,
        new Date(time).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        location
      ),
    };
    await SendMail(mailPayload);

    res.status(200).json({
      message: "Competition created successfully",
      data: newCompetition,
    });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetAllCompetitions = async (req: Request, res: Response) => {
  try {
    const allCompetitons = await db.competition.findMany({
      select: {
        name: true,
        id: true,
        description: true,
        schedule: true,
        judges: true,
        maxParticipants: true,
        status: true,
        venue: true,
      },
      orderBy: [{ schedule: "asc" }],
    });
    res.status(200).json(allCompetitons);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetAllCompetitionsForJudges = async (
  req: Request,
  res: Response
) => {
  try {
    const judges = await db.judges.findMany({
      select: {
        id: true,
        nationalId: true,
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        _count: {
          select: {
            competitions: true,
          },
        },
      },
    });

    const availableJudges = judges.filter((j) => j._count.competitions < 3);

    res.status(200).json(availableJudges);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminRemoveJudgeFromCompetiton = async (req: Request, res: Response) => {
  const { competitionId, judgeId } = req.body as {
    competitionId: string;
    judgeId: string;
  };

  if (!competitionId || !judgeId) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const competition = await db.competition.findFirst({
      where: {
        id: competitionId,
      },
      include: {
        judges: true,
      },
    });

    if (!competition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }

    const judgeExist = competition.judges.some((j) => j.id === judgeId);

    if (!judgeExist) {
      res.status(404).json({ message: "Judge not found in competition" });
      return;
    }

    await db.competition.update({
      where: {
        id: competitionId,
      },
      data: {
        judges: {
          disconnect: {
            id: judgeId,
          },
        },
      },
    });

    res.status(200).json({ message: "Judge removed from competition" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminAddJudgeToCompetition = async (req: Request, res: Response) => {
  const { competitionId, judgeId } = req.body as {
    competitionId: string;
    judgeId: string;
  };

  if (!competitionId || !judgeId) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }
  try {
    const existingCompetition = await db.competition.findFirst({
      where: {
        id: competitionId,
      },
      include: {
        judges: true,
      },
    });

    if (!existingCompetition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }

    const judgeExists = existingCompetition.judges.some(
      (j) => j.id === judgeId
    );

    if (judgeExists) {
      res.status(400).json({ message: "Judge already exists in competition" });
      return;
    }

    if (existingCompetition.judges.length >= MAX_JUDGES) {
      res
        .status(400)
        .json({ message: "This competition already has 3 judges" });
      return;
    }

    const updatedCompetition = await db.competition.update({
      where: {
        id: competitionId,
      },
      data: {
        judges: {
          connect: {
            id: judgeId,
          },
        },
      },
      include: {
        judges: true,
      },
    });
    res.status(200).json({
      message: "Judge added successfully",
      data: updatedCompetition,
    });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

interface AdminUpdateCompetitionBody {
  description: string;
  name: string;
  venue: string;
  schedule: string;
  maxParticipants: string;
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
}
const AdminUpdateCompetition = async (req: Request, res: Response) => {
  const { description, name, venue, status, schedule, maxParticipants } =
    req.body as Partial<AdminUpdateCompetitionBody>;

  const { id } = req.params as { id: string };

  if (
    !id ||
    (!name &&
      !venue &&
      !schedule &&
      !description &&
      !status &&
      !maxParticipants)
  ) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const competition = await db.competition.findFirst({
      where: {
        id,
      },
    });

    if (!competition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }
    const UpdateData: any = {};

    if (description) UpdateData.description = description;
    if (name) UpdateData.name = name;
    if (venue) UpdateData.venue = venue;
    if (schedule) {
      const date = new Date(schedule);
      UpdateData.schedule = date;
    }
    if (maxParticipants) UpdateData.maxParticipants = parseInt(maxParticipants);
    if (status) UpdateData.status = status;

    const updatedCompetition = await db.competition.update({
      where: {
        id: competition.id,
      },
      data: UpdateData,
      include: {
        judges: true,
        _count: true,
      },
    });
    res.status(200).json({
      message: "Competition updated successfully",
      data: updatedCompetition,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminDeleteCompetition = async (req: Request, res: Response) => {
  const { id } = req.params as {
    id: string;
  };

  console.log({ id });

  if (!id) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const existingCompetition = await db.competition.findFirst({
      where: {
        id,
      },
    });

    if (!existingCompetition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }

    await db.competition.delete({
      where: {
        id: existingCompetition.id,
      },
    });
    res.status(200).json({ message: "Competition deleted successfully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetCompetitionJudges = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  if (!id) {
    res.status(400).json({ message: "A required field is missing" });
    return;
  }

  try {
    const competition = await db.competition.findUnique({
      where: {
        id,
      },
      select: {
        judges: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
            _count: {
              select: {
                competitions: true,
              },
            },
          },
        },
      },
    });

    if (!competition) {
      res.status(404).json({ message: "Competition not found" });
      return;
    }

    res.status(200).json(competition.judges);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default {
  AdminCreateCompetiton,
  AdminGetAllCompetitions,
  AdminRemoveJudgeFromCompetiton,
  AdminAddJudgeToCompetition,
  AdminUpdateCompetition,
  AdminDeleteCompetition,
  AdminGetAllCompetitionsForJudges,
  AdminGetCompetitionJudges,
};
