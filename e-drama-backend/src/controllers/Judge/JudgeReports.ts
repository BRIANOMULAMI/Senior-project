import { Request, Response } from "express";
import { db } from "../..";

const GetJudgesStatisticReports = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const judge = await db.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        judge: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!judge) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const [TotalCompetitionsAssigned, Marks] = await Promise.all([
      db.marks.count({
        where: {
          judgeId: judge.judge?.id,
        },
      }),
      db.marks.findMany({
        where: {
          judgeId: judge.judge?.id,
        },
        select: {
          score: true,
        },
      }),
    ]);

    const TotalMarksAwarded =
      Marks.length > 0 ? Marks.reduce((acc, mark) => acc + mark.score, 0) : 0;
    const AverageScore =
      Marks.length > 0
        ? Marks.reduce((acc, mark) => acc + mark.score, 0) / Marks.length
        : 0;
    res.status(200).json({
      TotalCompetitionsAssigned,
      TotalMarksAwarded,
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
  GetJudgesStatisticReports,
};
