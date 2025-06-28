import { Request, Response } from "express";
import { UserType } from "../../Types/types";
import { compare, hash } from "bcryptjs";
import jwt from "jsonwebtoken";
import { SendMail } from "../../Mail/Sender";
import { MailPayload, Sender } from "../../Mail/mail";
import { welcomeEmailHTML } from "../../Mail/Templates/Welcome";
import { db } from "../../index";
const AuthUserRegister = async (req: Request, res: Response) => {
  const { email, password, name, county } = req.body as UserType;

  if (!email || !password || !name || !county) {
    res.status(400).json({ message: "Please Provide All Fields" });
    return;
  }

  try {
    const existingUser = await db.users.findFirst({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({
        message:
          "Authentication failed. Please check your credentials or try registering with a different email address.",
      });
      return;
    }
    const pwdHash = await hash(password, 10);

    const newUser = await db.users.create({
      data: {
        email,
        name: name,
        password: pwdHash,
      },
      select: {
        id: true,
        name: true,
      },
    });

    await db.school.create({
      data: {
        county,
        userId: newUser.id,
      },
    });

    const mailPayload: MailPayload = {
      sender: Sender,
      recepient: [{ email }],
      subject: "Welcome",
      html: welcomeEmailHTML(newUser.name),
    };

    SendMail(mailPayload);
    res
      .status(201)
      .json({ message: "Registration successful. Please proceed to login." });
    return;
  } catch (error) {
    console.log({ error });

    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AuthUserLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body as Partial<UserType>;

  if (!email || !password) {
    res
      .status(400)
      .json({ message: "Invalid request: Missing required information" });
    return;
  }
  try {
    const user = await db.users.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      res.status(400).json({
        message:
          "Authentication failed. Please check your credentials or try registering with a different email address.",
      });
      return;
    }
    const pwdMatch = await compare(password, user.password);

    if (!pwdMatch) {
      res.status(400).json({
        message: "Authentication failed. Please check your credentials",
      });
      return;
    }

    const token = jwt.sign(
      { userId: user.id, userRole: user.role },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("Bearer", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.status(200).json({ message: "Login successful" });
    return;
  } catch (error) {
    console.log({ error });

    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};
const AuthUserLogout = (req: Request, res: Response) => {
  res.clearCookie("Bearer", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Logout successful" });
  return;
};

const AuthVerifyToken = (req: Request, res: Response) => {
  const userId = req.userId;
  res.status(200).json({ userId });
};

export default {
  AuthUserRegister,
  AuthUserLogin,
  AuthUserLogout,
  AuthVerifyToken,
};
