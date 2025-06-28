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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Sender_1 = require("../../Mail/Sender");
const mail_1 = require("../../Mail/mail");
const Welcome_1 = require("../../Mail/Templates/Welcome");
const index_1 = require("../../index");
const AuthUserRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, county } = req.body;
    if (!email || !password || !name || !county) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const existingUser = yield index_1.db.users.findFirst({
            where: { email },
        });
        if (existingUser) {
            res.status(400).json({
                message: "Authentication failed. Please check your credentials or try registering with a different email address.",
            });
            return;
        }
        const pwdHash = yield (0, bcryptjs_1.hash)(password, 10);
        const newUser = yield index_1.db.users.create({
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
        yield index_1.db.school.create({
            data: {
                county,
                userId: newUser.id,
            },
        });
        const mailPayload = {
            sender: mail_1.Sender,
            recepient: [{ email }],
            subject: "Welcome",
            html: (0, Welcome_1.welcomeEmailHTML)(newUser.name),
        };
        (0, Sender_1.SendMail)(mailPayload);
        res
            .status(201)
            .json({ message: "Registration successful. Please proceed to login." });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AuthUserLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res
            .status(400)
            .json({ message: "Invalid request: Missing required information" });
        return;
    }
    try {
        const user = yield index_1.db.users.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
                role: true,
            },
        });
        if (!user) {
            res.status(400).json({
                message: "Authentication failed. Please check your credentials or try registering with a different email address.",
            });
            return;
        }
        const pwdMatch = yield (0, bcryptjs_1.compare)(password, user.password);
        if (!pwdMatch) {
            res.status(400).json({
                message: "Authentication failed. Please check your credentials",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, userRole: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.cookie("Bearer", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24,
        });
        res.status(200).json({ message: "Login successful" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AuthUserLogout = (req, res) => {
    res.clearCookie("Bearer", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "Logout successful" });
    return;
};
const AuthVerifyToken = (req, res) => {
    const userId = req.userId;
    res.status(200).json({ userId });
};
exports.default = {
    AuthUserRegister,
    AuthUserLogin,
    AuthUserLogout,
    AuthVerifyToken,
};
