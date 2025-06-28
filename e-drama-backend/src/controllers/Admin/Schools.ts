import { Request, Response } from "express";
import { db } from "../..";

const AdminApproveSchoolCompetition = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const { status } = req.body as {
    status: "APPROVED" | "PENDING" | "DENIED";
  };

  if (!id) {
    res.status(400).json({ message: "Please provide all fields" });
    return;
  }
  try {
    const participant = await db.participants.findFirst({
      where: {
        competitionId: id,
      },
      select: {
        id: true,
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
        competition: {
          select: {
            name: true,
            schedule: true,
            venue: true,
          },
        },
      },
    });

    if (!participant) {
      res.status(404).json({ message: "Participation request  not found" });
      return;
    }

    await db.participants.update({
      where: {
        id: participant.id,
      },
      data: {
        status: status,
      },
    });

    res.status(200).json({ message: "Participation request updated" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const AdminDeleteParticipant = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  if (!id) {
    res.status(400).json({ message: "Participation Id was not provided" });
    return;
  }

  try {
    const participation = await db.participants.findFirst({
      where: {
        competitionId: id,
      },
    });

    if (!participation) {
      res.status(404).json({ message: "Participation not found" });
      return;
    }

    await db.participants.delete({
      where: {
        id: participation.id,
      },
    });
    res.status(200).json({ message: "Participation Deleted" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default {
  AdminApproveSchoolCompetition,
  AdminDeleteParticipant,
};
