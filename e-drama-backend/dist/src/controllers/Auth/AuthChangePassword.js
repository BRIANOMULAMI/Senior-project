"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const __1 = require("../..");
const crypto_1 = __importDefault(require("crypto"));
const Sender_1 = require("../../Mail/Sender");
const mail_1 = require("../../Mail/mail");
const AuthChangePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newPassword, code } = req.body;
    const { email } = req.params;
    if (!email || !newPassword || !code) {
        res.status(400).json({ message: "Required fields are missing" });
        return;
    }
    try {
        const existingUser = yield __1.db.users.findFirst({
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
        const existingVerificationCode = yield __1.db.verifications.findFirst({
            where: {
                userId: existingUser.id,
            },
            select: {
                code: true,
            },
        });
        if (!existingVerificationCode) {
            res.status(400).json({
                message: "No Verification code for user found please request for a new code",
            });
            return;
        }
        const isCodeMatch = existingVerificationCode.code === code;
        if (!isCodeMatch) {
            res.status(400).json({ message: "Invalid verification code" });
            return;
        }
        const pwdHash = yield (0, bcryptjs_1.hash)(newPassword, 10);
        const payload = {
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
            sender: mail_1.Sender,
        };
        yield Promise.all([
            yield __1.db.users.update({
                where: {
                    id: existingUser.id,
                },
                data: {
                    password: pwdHash,
                },
            }),
            yield __1.db.verifications.delete({
                where: {
                    userId: existingUser.id,
                },
            }),
            (0, Sender_1.SendMail)(payload),
        ]);
        res.status(200).json({ message: "Password changed Succecifully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AuthVerifyEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    if (!email || typeof email !== "string") {
        res.status(400).json({ message: "Invalid or missing email" });
        return;
    }
    try {
        const user = yield __1.db.users.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(404).json({
                message: "User with this email does not exist. Please try again with a different email.",
            });
            return;
        }
        const VerificationCode = crypto_1.default
            .randomBytes(4)
            .toString("hex")
            .toUpperCase();
        const mailPayload = {
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
            sender: mail_1.Sender,
            subject: "Your Email Verification Code",
        };
        yield Promise.all([
            __1.db.verifications.upsert({
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
            (0, Sender_1.SendMail)(mailPayload),
        ]);
        res.status(200).json({ message: "Verification code sent successfully" });
        return;
    }
    catch (error) {
        console.error("Verify Email Error:", error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
const AuthVerifyCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const { code } = req.body;
    if (!code || code.length !== 8 || !email) {
        res.status(400).json({ message: "Invalid or missing fields" });
        return;
    }
    try {
        const user = yield __1.db.users.findFirst({
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
        const existingVerificationCode = yield __1.db.verifications.findFirst({
            where: {
                userId: user.id,
            },
            select: {
                code: true,
            },
        });
        if (!existingVerificationCode) {
            res.status(400).json({
                message: "No Verification code for user found please request for a new code",
            });
            return;
        }
        const isCodeMatch = existingVerificationCode.code === code;
        if (!isCodeMatch) {
            res.status(400).json({ message: "Invalid verification code" });
            return;
        }
        yield __1.db.verifications.delete({
            where: {
                userId: user.id,
            },
        });
        res.status(200).json({ message: "Verification successful" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
exports.default = {
    AuthChangePassword,
    AuthVerifyEmail,
    AuthVerifyCode,
};
