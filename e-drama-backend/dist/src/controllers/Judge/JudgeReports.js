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
const GetJudgesStatisticReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const userId = req.userId;
    try {
        const judge = yield __1.db.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                judge: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!judge) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const [TotalCompetitionsAssigned, Marks] = yield Promise.all([
            __1.db.marks.count({
                where: {
                    judgeId: (_a = judge.judge) === null || _a === void 0 ? void 0 : _a.id,
                },
            }),
            __1.db.marks.findMany({
                where: {
                    judgeId: (_b = judge.judge) === null || _b === void 0 ? void 0 : _b.id,
                },
                select: {
                    score: true,
                },
            }),
        ]);
        const TotalMarksAwarded = Marks.length > 0 ? Marks.reduce((acc, mark) => acc + mark.score, 0) : 0;
        const AverageScore = Marks.length > 0
            ? Marks.reduce((acc, mark) => acc + mark.score, 0) / Marks.length
            : 0;
        res.status(200).json({
            TotalCompetitionsAssigned,
            TotalMarksAwarded,
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
    GetJudgesStatisticReports,
};
