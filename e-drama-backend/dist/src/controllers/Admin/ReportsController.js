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
const AdminGetAllReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [competitionCount, judgesCount, pendingRequests, approvedRequests, deniedRequest,] = yield Promise.all([
            __1.db.competition.count(),
            __1.db.judges.count(),
            __1.db.participants.count({
                where: {
                    status: "PENDING",
                },
            }),
            __1.db.participants.count({
                where: {
                    status: "APPROVED",
                },
            }),
            __1.db.participants.count({
                where: {
                    status: "DENIED",
                },
            }),
        ]);
        res.status(200).json({
            competitionCount,
            judgesCount,
            pendingRequests,
            approvedRequests,
            deniedRequest,
        });
        return;
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
const AdminGetJudgesAssignedCompetitions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allJudgesData = yield __1.db.judges.findMany({
            select: {
                id: true,
                user: {
                    select: {
                        email: true,
                        name: true,
                    },
                },
                competitions: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        const judgesData = allJudgesData.map((judge) => ({
            id: judge.id,
            email: judge.user.email,
            name: judge.user.name,
            competitions: judge.competitions.map((competition) => ({
                id: competition.id,
                name: competition.name,
            })),
        }));
        res.status(200).json(judgesData);
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
exports.default = {
    AdminGetAllReports,
    AdminGetJudgesAssignedCompetitions,
};
