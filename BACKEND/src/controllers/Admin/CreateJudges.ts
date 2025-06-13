import { Request, Response } from "express";
import { hash } from "bcryptjs";
import { db } from "../..";
import { SendMail } from "../../Mail/Sender";
import { welcomeJudgeEmailHTML } from "../../Mail/Templates/JudgesWelcome";
import { MailPayload, Sender } from "../../Mail/mail";

const AdminCreateJudge = async (req: Request, res: Response) => {
  const { name, email, nationalId, password } = req.body as {
    name: string;
    email: string;
    nationalId: string;
    password: string;
  };
  if (!name || !email || !password || !nationalId) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const existingUser = await db.users.findUnique({
      where: { email },
    });

    if (existingUser && existingUser.role === "JUDGE") {
      res
        .status(400)
        .json({ message: "A judge with this email already exists" });
      return;
    }

    const existingNationalId = await db.judges.findUnique({
      where: { nationalId },
    });

    if (existingNationalId) {
      res
        .status(400)
        .json({ message: "A judge with this national ID already exists" });
      return;
    }

    const pwdHash = await hash(password, 10);

    const newUser = await db.users.create({
      data: {
        email,
        name,
        password: pwdHash,
        role: "JUDGE",
      },
      select: {
        id: true,
      },
    });
    await db.judges.create({
      data: {
        nationalId: nationalId,
        userId: newUser.id,
      },
    });
    const payLoad: MailPayload = {
      sender: Sender,
      html: welcomeJudgeEmailHTML(name, email, password),
      recepient: [{ email }],
      subject: "Welcome to the Judges Panel",
    };
    await SendMail(payLoad);
    res.status(201).json({ message: "Judge created successfully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminGetAllJudges = async (req: Request, res: Response) => {
  const { cursor } = req.query as { cursor?: string };
  const PAGE_SIZE = 5;

  try {
    const allJudges = await db.users.findMany({
      where: {
        role: {
          equals: "JUDGE",
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        judge: {
          select: {
            nationalId: true,
            id: true,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
      take: PAGE_SIZE + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const newNextCursor =
      allJudges.length > PAGE_SIZE ? allJudges[PAGE_SIZE].id : undefined;

    const judges = allJudges.slice(0, PAGE_SIZE);

    res.status(200).json({
      judges,
      nextCursor: newNextCursor,
    });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const AdminDeleteJudge = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  if (!id) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }
  try {
    const existingJudge = await db.users.findUnique({
      where: {
        id,
      },
    });
    if (!existingJudge) {
      res.status(404).json({ message: "Judge not found" });
      return;
    }
    await db.users.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Judge deleted successfully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AdminUpdateJudge = async (req: Request, res: Response) => {
  const { name, email, nationalId, password } = req.body as {
    name?: string;
    email?: string;
    nationalId?: string;
    password?: string;
  };
  const { id } = req.params as { id: string };

  if (!name && !email && !password && !nationalId) {
    res.status(400).json({ message: "Please provide at least one field" });
    return;
  }

  try {
    const existingJudge = await db.users.findFirst({
      where: {
        id,
        role: "JUDGE",
      },
      select: {
        id: true,
        judge: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!existingJudge || !existingJudge.judge) {
      res.status(400).json({ message: "Judge not found" });
      return;
    }

    const UserUpdateData: any = {};
    const JudgeUpdateData: any = {};

    if (name) UserUpdateData.name = name;
    if (email) UserUpdateData.email = email;
    if (password) {
      const pwdHash = await hash(password, 10);
      UserUpdateData.password = pwdHash;
    }
    if (nationalId) JudgeUpdateData.nationalId = nationalId;

    await db.users.update({
      data: UserUpdateData,
      where: { id: existingJudge.id },
    });

    await db.judges.update({
      where: { id: existingJudge.judge.id },
      data: JudgeUpdateData,
    });

    res.status(200).json({ message: "Judge updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  AdminCreateJudge,
  AdminGetAllJudges,
  AdminDeleteJudge,
  AdminUpdateJudge,
};
