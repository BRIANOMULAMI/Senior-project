import { Request, Response } from "express";
import { db } from "../..";

const AdminGetAllReports = async (req: Request, res: Response) => {
  try {
    const [
      competitionCount,
      judgesCount,
      pendingRequests,
      approvedRequests,
      deniedRequest,
    ] = await Promise.all([
      db.competition.count(),
      db.judges.count(),
      db.participants.count({
        where: {
          status: "PENDING",
        },
      }),
      db.participants.count({
        where: {
          status: "APPROVED",
        },
      }),
      db.participants.count({
        where: {
          status: "DENIED",
        },
      }),
    ]);

    res.status(200).json({
      competitionCount,
      judgesCount,
      pendingRequests,
      approvedRequests,
      deniedRequest,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetJudgesAssignedCompetitions = async (
  req: Request,
  res: Response
) => {
  try {
    const allJudgesData = await db.judges.findMany({
      select: {
        id: true,
        user: {
          select: {
            email: true,
            name: true,
          },
        },
        competitions: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const judgesData = allJudgesData.map((judge) => ({
      id: judge.id,
      email: judge.user.email,
      name: judge.user.name,
      competitions: judge.competitions.map((competition) => ({
        id: competition.id,
        name: competition.name,
      })),
    }));

    res.status(200).json(judgesData);
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default {
  AdminGetAllReports,
  AdminGetJudgesAssignedCompetitions,
};
