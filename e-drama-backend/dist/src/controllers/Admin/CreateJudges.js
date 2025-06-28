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
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const __1 = require("../..");
const Sender_1 = require("../../Mail/Sender");
const JudgesWelcome_1 = require("../../Mail/Templates/JudgesWelcome");
const mail_1 = require("../../Mail/mail");
const AdminCreateJudge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, nationalId, password } = req.body;
    if (!name || !email || !password || !nationalId) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const existingUser = yield __1.db.users.findFirst({
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
        const existingNationalId = yield __1.db.judges.findFirst({
            where: { nationalId },
        });
        if (existingNationalId) {
            res
                .status(400)
                .json({ message: "A judge with this national ID already exists" });
            return;
        }
        const pwdHash = yield (0, bcryptjs_1.hash)(password, 10);
        const newUser = yield __1.db.users.create({
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
        yield __1.db.judges.create({
            data: {
                nationalId: nationalId,
                userId: newUser.id,
            },
        });
        const payLoad = {
            sender: mail_1.Sender,
            html: (0, JudgesWelcome_1.welcomeJudgeEmailHTML)(name, email, password),
            recepient: [{ email }],
            subject: "Welcome to the Judges Panel",
        };
        yield (0, Sender_1.SendMail)(payLoad);
        res.status(201).json({ message: "Judge created successfully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetAllJudges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allJudges = yield __1.db.users.findMany({
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
    }
    catch (error) {
        console.error({ error });
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const AdminDeleteJudge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const existingJudge = yield __1.db.users.findUnique({
            where: {
                id,
            },
        });
        if (!existingJudge) {
            res.status(404).json({ message: "Judge not found" });
            return;
        }
        yield __1.db.users.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ message: "Judge deleted successfully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminUpdateJudge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password, name, nationalId } = req.body;
    if (!email && !password && !name && !nationalId) {
        res.status(400).json({ message: "At least one field is required" });
        return;
    }
    try {
        const existingJudge = yield __1.db.users.findFirst({
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
        if (nationalId && nationalId !== ((_a = existingJudge.judge) === null || _a === void 0 ? void 0 : _a.nationalId)) {
            const nationalIdConflict = yield __1.db.judges.findFirst({
                where: { nationalId },
            });
            if (nationalIdConflict) {
                res.status(400).json({ message: "National ID already exists" });
                return;
            }
        }
        if (email && email !== existingJudge.email) {
            const emailConflict = yield __1.db.users.findFirst({
                where: { email },
            });
            if (emailConflict) {
                res.status(400).json({ message: "Email already exists" });
                return;
            }
        }
        const data = {};
        if (email)
            data.email = email;
        if (name)
            data.name = name;
        if (nationalId)
            data.nationalId = nationalId;
        if (password) {
            const hashed = yield (0, bcryptjs_1.hash)(password, 10);
            data.password = hashed;
        }
        yield __1.db.users.update({
            where: { id: existingJudge.id },
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
            },
        });
        if (data.nationalId) {
            yield __1.db.judges.update({
                where: { userId: existingJudge.id },
                data: {
                    nationalId: data.nationalId,
                },
            });
        }
        res.status(200).json({ message: "Judge details updated successfully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.default = {
    AdminCreateJudge,
    AdminGetAllJudges,
    AdminDeleteJudge,
    AdminUpdateJudge,
};
