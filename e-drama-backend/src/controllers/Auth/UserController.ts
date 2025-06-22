import { Request, Response } from "express";
import { JudgeType, UserType } from "../../Types/types";
import { db } from "../..";

const GetLoggedInUser = async (req: Request, res: Response) => {
  const userId = req.userId;

  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const user = await db.users.findUnique({
      where: {
        id: userId,
      },
      omit: {
        password: true,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default {
  GetLoggedInUser,
};
