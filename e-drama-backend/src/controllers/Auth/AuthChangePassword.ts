import { Request, Response } from "express";
import { hash } from "bcryptjs";
import { db } from "../..";
import crypto from "crypto";
import { SendMail } from "../../Mail/Sender";
import { MailPayload, Sender } from "../../Mail/mail";

const AuthChangePassword = async (req: Request, res: Response) => {
  const { newPassword, code } = req.body as {
    newPassword: string;
    code: string;
  };

  const { email } = req.params as { email: string };

  if (!email || !newPassword || !code) {
    res.status(400).json({ message: "Required fields are missing" });
    return;
  }

  try {
    const existingUser = await db.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (!existingUser) {
      res.status(404).json({ message: "Invalid email" });
      return;
    }

    const existingVerificationCode = await db.verifications.findFirst({
      where: {
        userId: existingUser.id,
      },
      select: {
        code: true,
      },
    });

    if (!existingVerificationCode) {
      res.status(400).json({
        message:
          "No Verification code for user found please request for a new code",
      });
      return;
    }

    const isCodeMatch = existingVerificationCode.code === code;

    if (!isCodeMatch) {
      res.status(400).json({ message: "Invalid verification code" });
      return;
    }

    const pwdHash = await hash(newPassword, 10);

    const payload: MailPayload = {
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #1f2937;">Your Password Was Successfully Changed</h2>
      <p style="font-size: 16px; color: #374151;">
        This is a confirmation that your account password was recently updated.
      </p>
      <p style="font-size: 14px; color: #6b7280;">
        If you made this change, no further action is needed.
      </p>
      <p style="font-size: 14px; color: #ef4444;">
        If you did <strong>not</strong> authorize this change, please reset your password immediately or contact support.
      </p>
    </div>
  `,
      recepient: [{ email: existingUser.email }],
      subject: "Password Changed Successfully",
      sender: Sender,
    };

    await Promise.all([
      await db.users.update({
        where: {
          id: existingUser.id,
        },
        data: {
          password: pwdHash,
        },
      }),
      await db.verifications.delete({
        where: {
          userId: existingUser.id,
        },
      }),

      SendMail(payload),
    ]);

    res.status(200).json({ message: "Password changed Succecifully" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

const AuthVerifyEmail = async (req: Request, res: Response) => {
  const { email } = req.params as { email: string };

  if (!email || typeof email !== "string") {
    res.status(400).json({ message: "Invalid or missing email" });
    return;
  }

  try {
    const user = await db.users.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({
        message:
          "User with this email does not exist. Please try again with a different email.",
      });
      return;
    }

    const VerificationCode = crypto
      .randomBytes(4)
      .toString("hex")
      .toUpperCase();

    const mailPayload: MailPayload = {
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1f2937;">Email Verification Required</h2>
          <p style="font-size: 16px; color: #374151;">
            Please use the verification code below to confirm your email address:
          </p>
          <div style="margin: 20px 0; padding: 12px 24px; background-color: #e0f2fe; color: #0369a1; font-size: 24px; font-weight: bold; text-align: center; border-radius: 6px;">
            ${VerificationCode}
          </div>
          <p style="font-size: 14px; color: #6b7280;">
            If you didn’t request this, you can safely ignore this email.
          </p>
        </div>
      `,
      recepient: [{ email }],
      sender: Sender,
      subject: "Your Email Verification Code",
    };

    await Promise.all([
      db.verifications.upsert({
        where: {
          userId: user.id,
        },
        update: {
          code: VerificationCode,
        },
        create: {
          code: VerificationCode,
          userId: user.id,
        },
      }),
      SendMail(mailPayload),
    ]);

    res.status(200).json({ message: "Verification code sent successfully" });
    return;
  } catch (error) {
    console.error("Verify Email Error:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const AuthVerifyCode = async (req: Request, res: Response) => {
  const { email } = req.params as { email: string };
  const { code } = req.body as { code: string };

  if (!code || code.length !== 8 || !email) {
    res.status(400).json({ message: "Invalid or missing fields" });
    return;
  }

  try {
    const user = await db.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (!user) {
      res.status(404).json({ message: "User Not Found" });
      return;
    }

    const existingVerificationCode = await db.verifications.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        code: true,
      },
    });

    if (!existingVerificationCode) {
      res.status(400).json({
        message:
          "No Verification code for user found please request for a new code",
      });
      return;
    }

    const isCodeMatch = existingVerificationCode.code === code;

    if (!isCodeMatch) {
      res.status(400).json({ message: "Invalid verification code" });
      return;
    }

    await db.verifications.delete({
      where: {
        userId: user.id,
      },
    });

    res.status(200).json({ message: "Verification successful" });
    return;
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
};

export default {
  AuthChangePassword,
  AuthVerifyEmail,
  AuthVerifyCode,
};
