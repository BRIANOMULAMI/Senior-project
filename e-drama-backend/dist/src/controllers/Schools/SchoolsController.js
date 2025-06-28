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
const SchoolsConfirmRegistration_1 = require("../../Mail/Templates/SchoolsConfirmRegistration");
const mail_1 = require("../../Mail/mail");
const SchoolRegisterCompetiton = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const MAX_COMPETITION_PARTICIPANTS = 25;
    const { competitionId } = req.body;
    if (!competitionId) {
        res.status(400).json({ message: "Please provide all fields" });
        return;
    }
    try {
        const [competition, school, user] = yield Promise.all([
            __1.db.competition.findUnique({
                where: { id: competitionId },
                include: { participants: true },
            }),
            __1.db.school.findUnique({
                where: { userId: req.userId },
            }),
            __1.db.users.findUnique({
                where: { id: req.userId },
            }),
        ]);
        if (!competition) {
            res.status(404).json({ message: "Competition not found" });
            return;
        }
        if (!school) {
            res.status(401).json({ message: "Unauthorized: school not found" });
            return;
        }
        if (competition.participants.some((p) => p.schoolId === school.id)) {
            res.status(400).json({ message: "School already registered" });
            return;
        }
        if (competition.participants.length >= MAX_COMPETITION_PARTICIPANTS) {
            res.status(400).json({ message: "Competition is full" });
            return;
        }
        yield __1.db.$transaction([
            __1.db.participants.create({
                data: {
                    schoolId: school.id,
                    competitionId: competition.id,
                },
            }),
            __1.db.competition.update({
                where: { id: competition.id },
                data: {
                    totalParticipants: {
                        increment: 1,
                    },
                },
            }),
        ]);
        const mailPayload = {
            recepient: [{ email: (user === null || user === void 0 ? void 0 : user.email) || "" }],
            subject: "Competition Registration Confirmation",
            sender: mail_1.Sender,
            html: (0, SchoolsConfirmRegistration_1.schoolWelcomeEmailHTML)((user === null || user === void 0 ? void 0 : user.name) || "", competition.name, new Date(competition.schedule).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            }), competition.venue),
        };
        (0, Sender_1.SendMail)(mailPayload);
        res.status(200).json({ message: "School registered successfully" });
        return;
    }
    catch (error) {
        console.error({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const SchoolsViewTheirCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    try {
        // Get the school based on the logged-in user's ID
        const school = yield __1.db.school.findUnique({
            where: { userId },
        });
        if (!school) {
            res.status(404).json({ message: "School not found" });
            return;
        }
        // Fetch competitions where this school is a participant
        const competitions = yield __1.db.competition.findMany({
            where: {
                participants: {
                    some: {
                        schoolId: school.id,
                    },
                },
            },
            select: {
                name: true,
                schedule: true,
                totalParticipants: true,
                participants: {
                    where: {
                        schoolId: school.id,
                    },
                    select: {
                        createdAt: true,
                        status: true,
                    },
                },
            },
        });
        res.status(200).json(competitions);
        return;
    }
    catch (error) {
        console.error({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetAllCompetitonRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllCompetitionRequests = yield __1.db.participants.findMany({
            select: {
                competition: {
                    select: {
                        id: true,
                        name: true,
                        participants: {
                            select: {
                                status: true,
                            },
                        },
                    },
                },
                school: {
                    select: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json(AllCompetitionRequests);
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const SchoolGetCompetitonResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = req.userId;
    if (!userId) {
        res.status(400).json({ message: "UnAuthorized" });
        return;
    }
    try {
        const school = yield __1.db.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                school: {
                    select: {
                        id: true,
                        participant: {
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        });
        if (!school) {
            res.status(404).json({ message: "User with credentials not found" });
            return;
        }
        const PerfomanceResults = yield __1.db.marks.findMany({
            where: {
                participantId: (_a = school.school) === null || _a === void 0 ? void 0 : _a.participant[0].id,
            },
            select: {
                id: true,
                score: true,
                comments: true,
                participant: {
                    select: {
                        school: {
                            select: {
                                user: {
                                    select: {
                                        name: true,
                                    },
                                },
                            },
                        },
                        competition: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (!PerfomanceResults) {
            res.status(400).json({ message: "No results found" });
            return;
        }
        res.status(200).json(PerfomanceResults);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
exports.default = {
    SchoolRegisterCompetiton,
    SchoolsViewTheirCompetitions,
    AdminGetAllCompetitonRequests,
    SchoolGetCompetitonResults,
};
