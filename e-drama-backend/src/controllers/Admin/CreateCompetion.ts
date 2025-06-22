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
  const { description, name, venue, judgeId, schedule } =
    req.body as CreateCompetitonsPayload;

  if (!name || !venue || !schedule || !description || !judgeId) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

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
        res.status(400).json({
          message: `Judge ${judge} has reached the maximum number of competitions`,
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
        schedule: new Date(schedule),
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
        new Date(schedule).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        venue
      ),
    };
    SendMail(mailPayload);

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
      },
      orderBy: [{ schedule: "asc" }],
    });
    res.status(200).json({ data: allCompetitons });
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
  competitionId: string;
  schedule: string;
}
const AdminUpdateCompetition = async (req: Request, res: Response) => {
  const { description, name, venue, competitionId, schedule } =
    req.body as Partial<AdminUpdateCompetitionBody>;

  if (!name && !venue && !schedule && !description && !competitionId) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const competition = await db.competition.findFirst({
      where: {
        id: competitionId,
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

    const updatedCompetition = await db.competition.update({
      where: {
        id: competitionId,
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

export default {
  AdminCreateCompetiton,
  AdminGetAllCompetitions,
  AdminRemoveJudgeFromCompetiton,
  AdminAddJudgeToCompetition,
  AdminUpdateCompetition,
  AdminDeleteCompetition,
};
