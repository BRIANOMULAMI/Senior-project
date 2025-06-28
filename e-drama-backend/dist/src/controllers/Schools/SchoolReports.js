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
const SchoolReportStatistics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = req.userId;
    try {
        const user = yield __1.db.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                school: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!user) {
            res.status(400).json({
                message: "User not found",
            });
            return;
        }
        const schoolId = (_a = user.school) === null || _a === void 0 ? void 0 : _a.id;
        const [TotalApplications, ApprovedApplications, PendingApplications, TotalPerformances, Scores,] = yield Promise.all([
            __1.db.participants.count({
                where: {
                    schoolId: schoolId,
                },
            }),
            __1.db.participants.count({
                where: {
                    schoolId,
                    status: "APPROVED",
                },
            }),
            __1.db.participants.count({
                where: {
                    schoolId,
                    status: "PENDING",
                },
            }),
            __1.db.marks.count({
                where: {
                    participant: {
                        schoolId,
                    },
                },
            }),
            __1.db.marks.findMany({
                where: {
                    participant: {
                        schoolId,
                    },
                },
                select: {
                    score: true,
                },
            }),
        ]);
        const AverageScore = Scores.length > 0
            ? Scores.reduce((sum, score) => sum + score.score, 0) / Scores.length
            : 0;
        res.status(200).json({
            TotalApplications,
            ApprovedApplications,
            PendingApplications,
            TotalPerformances,
            AverageScore,
        });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
});
exports.default = {
    SchoolReportStatistics,
};
