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
const bcryptjs_1 = require("bcryptjs");
const JudgeViewAssignedCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = req.userId;
    if (!userId) {
        res.status(400).json({ message: "UnAuthorized" });
        return;
    }
    try {
        const existingUser = yield __1.db.users.findFirst({
            where: {
                id: userId,
                AND: {
                    role: {
                        equals: "JUDGE",
                    },
                },
            },
            select: {
                judge: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!existingUser) {
            res.status(400).json({ message: "UnAuthorized" });
            return;
        }
        const judgesCompetitions = yield __1.db.competition.findMany({
            where: {
                judges: {
                    some: {
                        id: (_a = existingUser.judge) === null || _a === void 0 ? void 0 : _a.id,
                    },
                },
            },
        });
        res.status(200).json(judgesCompetitions);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const JudgeGetSchoolRegisteredForCompetition = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "Please provide all fields" });
        return;
    }
    try {
        const competition = yield __1.db.competition.findFirst({
            where: {
                id,
            },
        });
        if (!competition) {
            res.status(404).json({ message: "competition not found" });
            return;
        }
        const registedSchools = yield __1.db.participants.findMany({
            where: {
                competitionId: id,
            },
            select: {
                id: true,
                competition: {
                    select: {
                        name: true,
                    },
                },
                school: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json(registedSchools);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
const JudgeAwardMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { comment, score } = req.body;
    const { id } = req.params;
    const userId = req.userId;
    if (!score || !comment || !id) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    if (!userId) {
        res.status(400).json({ message: "Missing userId" });
        return;
    }
    try {
        const existingParticipant = yield __1.db.participants.findFirst({
            where: {
                id,
            },
        });
        if (!existingParticipant) {
            res
                .status(404)
                .json({ message: "Participant is not registered for the competition" });
            return;
        }
        const User = yield __1.db.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                role: true,
                judge: {
                    select: {
                        id: true,
                    },
                },
                school: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!User) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        if (User.role !== "JUDGE") {
            res.status(400).json({
                message: "UnAuthorized, You are not allowed to peferm the oprtaion",
            });
            return;
        }
        // Step 1: Get the participant info
        const participant = yield __1.db.participants.findFirst({
            where: {
                schoolId: (_a = User.school) === null || _a === void 0 ? void 0 : _a.id,
            },
            select: {
                schoolId: true,
                competitionId: true,
            },
        });
        if (!participant) {
            res.status(404).json({
                message: "Participant not found",
            });
            return;
        }
        // Step 2: Check if this judge already awarded marks to this school in this competition
        const alreadyMarked = yield __1.db.marks.findFirst({
            where: {
                judgeId: (_b = User.judge) === null || _b === void 0 ? void 0 : _b.id,
                participant: {
                    schoolId: participant.schoolId,
                    competitionId: participant.competitionId,
                },
            },
        });
        if (alreadyMarked) {
            res.status(400).json({
                message: "You have already awarded marks to this school for this competition.",
            });
            return;
        }
        yield __1.db.marks.create({
            data: {
                comments: comment,
                score: parseInt(score),
                participantId: id,
                judgeId: ((_c = User.judge) === null || _c === void 0 ? void 0 : _c.id) || "",
            },
        });
        res.status(201).json({ message: "Marks awarded successfully" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
const GetJudgesScoredPeformance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = req.userId;
    if (!userId) {
        res.status(400).json({ message: "Missing userId" });
        return;
    }
    try {
        const judge = yield __1.db.users.findFirst({
            where: {
                id: userId,
                role: "JUDGE",
            },
            select: {
                role: true,
                judge: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!judge) {
            res.status(404).json({ message: "Judge not found" });
            return;
        }
        const scoredPerformances = yield __1.db.marks.findMany({
            where: {
                judgeId: (_a = judge.judge) === null || _a === void 0 ? void 0 : _a.id,
            },
            select: {
                comments: true,
                createdAt: true,
                score: true,
                id: true,
                participant: {
                    select: {
                        competition: {
                            select: {
                                name: true,
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
                },
            },
        });
        res.status(200).json(scoredPerformances);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
const EditJudgeDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    JudgeViewAssignedCompetitions,
    JudgeGetSchoolRegisteredForCompetition,
    JudgeAwardMarks,
    GetJudgesScoredPeformance,
    EditJudgeDetails,
};
