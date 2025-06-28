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
    const existingUser = await db.users.findFirst({
      where: { email },
    });
    if (existingUser) {
      if (existingUser && existingUser.role === "JUDGE") {
        res
          .status(400)
          .json({ message: "A judge with this email already exists" });
        return;
      }
      res
        .status(400)
        .json({ message: "A user with this email already exists" });
      return;
    }

    const existingNationalId = await db.judges.findFirst({
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
            _count: {
              select: {
                competitions: true,
              },
            },
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    });

    res.status(200).json(allJudges);
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

interface EditJudgeDetailsBody {
  email: string;
  password: string;
  name: string;
  nationalId: string;
}

const AdminUpdateJudge = async (req: Request, res: Response) => {
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
  AdminCreateJudge,
  AdminGetAllJudges,
  AdminDeleteJudge,
  AdminUpdateJudge,
};
