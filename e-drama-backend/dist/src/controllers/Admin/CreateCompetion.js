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
const __1 = require("../..");
const Sender_1 = require("../../Mail/Sender");
const mail_1 = require("../../Mail/mail");
const JudgesAllocatedCompetiton_1 = require("../../Mail/Templates/JudgesAllocatedCompetiton");
const MAX_JUDGES = 3;
const AdminCreateCompetiton = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { description, name, time, judgeId, location, maxSchools, status } = req.body;
    if (!name ||
        !time ||
        !location ||
        !description ||
        !judgeId ||
        !status ||
        !maxSchools) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    console.log(name, time, location, description, judgeId, status, maxSchools);
    let JUDGE_DETAILS = [];
    if (judgeId.length > MAX_JUDGES) {
        res.status(400).json({
            message: `You can't add more than ${MAX_JUDGES} Judges for a single competiton`,
        });
        return;
    }
    try {
        let JUDGES_EMAILS = [];
        for (const judge of judgeId) {
            const MAX_COMPETITIONS = 3;
            const existingJudge = yield __1.db.judges.findFirst({
                where: {
                    id: judge,
                },
                include: {
                    competitions: true,
                    user: {
                        select: {
                            email: true,
                            name: true,
                        },
                    },
                },
            });
            if (!existingJudge) {
                res.status(404).json({ message: `Judge ${judge} not found` });
                return;
            }
            if (existingJudge &&
                existingJudge.competitions.length >= MAX_COMPETITIONS) {
                const fullJudge = yield __1.db.judges.findFirst({
                    where: {
                        id: judge,
                    },
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                });
                res.status(400).json({
                    message: `Judge ${fullJudge === null || fullJudge === void 0 ? void 0 : fullJudge.user.name} has reached the maximum number of competitions`,
                });
                return;
            }
            JUDGES_EMAILS.push(existingJudge.user.email);
            JUDGE_DETAILS.push({
                name: existingJudge.user.name,
            });
        }
        const newCompetition = yield __1.db.competition.create({
            data: {
                description,
                name,
                venue: location,
                schedule: new Date(time),
                maxParticipants: parseInt(maxSchools),
                status: status,
                judges: {
                    connect: judgeId.map((id) => ({ id })),
                },
            },
            include: {
                judges: true,
            },
        });
        let judge;
        for (let i = 0; i < JUDGE_DETAILS.length; i++) {
            judge = JUDGE_DETAILS[i];
        }
        const mailPayload = {
            sender: mail_1.Sender,
            recepient: JUDGES_EMAILS.map((email) => ({ email })),
            subject: "New Competition",
            html: (0, JudgesAllocatedCompetiton_1.allocatedCompetitionEmailHTML)((_a = judge === null || judge === void 0 ? void 0 : judge.name) !== null && _a !== void 0 ? _a : "", name, new Date(time).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            }), location),
        };
        yield (0, Sender_1.SendMail)(mailPayload);
        res.status(200).json({
            message: "Competition created successfully",
            data: newCompetition,
        });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetAllCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCompetitons = yield __1.db.competition.findMany({
            select: {
                name: true,
                id: true,
                description: true,
                schedule: true,
                judges: true,
                maxParticipants: true,
                status: true,
                venue: true,
            },
            orderBy: [{ schedule: "asc" }],
        });
        res.status(200).json(allCompetitons);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetAllCompetitionsForJudges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const judges = yield __1.db.judges.findMany({
            select: {
                id: true,
                nationalId: true,
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
                _count: {
                    select: {
                        competitions: true,
                    },
                },
            },
        });
        const availableJudges = judges.filter((j) => j._count.competitions < 3);
        res.status(200).json(availableJudges);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminRemoveJudgeFromCompetiton = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { competitionId, judgeId } = req.body;
    if (!competitionId || !judgeId) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const competition = yield __1.db.competition.findFirst({
            where: {
                id: competitionId,
            },
            include: {
                judges: true,
            },
        });
        if (!competition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        const judgeExist = competition.judges.some((j) => j.id === judgeId);
        if (!judgeExist) {
            res.status(404).json({ message: "Judge not found in competition" });
            return;
        }
        yield __1.db.competition.update({
            where: {
                id: competitionId,
            },
            data: {
                judges: {
                    disconnect: {
                        id: judgeId,
                    },
                },
            },
        });
        res.status(200).json({ message: "Judge removed from competition" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminAddJudgeToCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { competitionId, judgeId } = req.body;
    if (!competitionId || !judgeId) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const existingCompetition = yield __1.db.competition.findFirst({
            where: {
                id: competitionId,
            },
            include: {
                judges: true,
            },
        });
        if (!existingCompetition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        const judgeExists = existingCompetition.judges.some((j) => j.id === judgeId);
        if (judgeExists) {
            res.status(400).json({ message: "Judge already exists in competition" });
            return;
        }
        if (existingCompetition.judges.length >= MAX_JUDGES) {
            res
                .status(400)
                .json({ message: "This competition already has 3 judges" });
            return;
        }
        const updatedCompetition = yield __1.db.competition.update({
            where: {
                id: competitionId,
            },
            data: {
                judges: {
                    connect: {
                        id: judgeId,
                    },
                },
            },
            include: {
                judges: true,
            },
        });
        res.status(200).json({
            message: "Judge added successfully",
            data: updatedCompetition,
        });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminUpdateCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, name, venue, status, schedule, maxParticipants } = req.body;
    const { id } = req.params;
    if (!id ||
        (!name &&
            !venue &&
            !schedule &&
            !description &&
            !status &&
            !maxParticipants)) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const competition = yield __1.db.competition.findFirst({
            where: {
                id,
            },
        });
        if (!competition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        const UpdateData = {};
        if (description)
            UpdateData.description = description;
        if (name)
            UpdateData.name = name;
        if (venue)
            UpdateData.venue = venue;
        if (schedule) {
            const date = new Date(schedule);
            UpdateData.schedule = date;
        }
        if (maxParticipants)
            UpdateData.maxParticipants = parseInt(maxParticipants);
        if (status)
            UpdateData.status = status;
        const updatedCompetition = yield __1.db.competition.update({
            where: {
                id: competition.id,
            },
            data: UpdateData,
            include: {
                judges: true,
                _count: true,
            },
        });
        res.status(200).json({
            message: "Competition updated successfully",
            data: updatedCompetition,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminDeleteCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log({ id });
    if (!id) {
        res.status(400).json({ message: "Please Provide All Fields" });
        return;
    }
    try {
        const existingCompetition = yield __1.db.competition.findFirst({
            where: {
                id,
            },
        });
        if (!existingCompetition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        yield __1.db.competition.delete({
            where: {
                id: existingCompetition.id,
            },
        });
        res.status(200).json({ message: "Competition deleted successfully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetCompetitionJudges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "A required field is missing" });
        return;
    }
    try {
        const competition = yield __1.db.competition.findUnique({
            where: {
                id,
            },
            select: {
                judges: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                        _count: {
                            select: {
                                competitions: true,
                            },
                        },
                    },
                },
            },
        });
        if (!competition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        res.status(200).json(competition.judges);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.default = {
    AdminCreateCompetiton,
    AdminGetAllCompetitions,
    AdminRemoveJudgeFromCompetiton,
    AdminAddJudgeToCompetition,
    AdminUpdateCompetition,
    AdminDeleteCompetition,
    AdminGetAllCompetitionsForJudges,
    AdminGetCompetitionJudges,
};
