"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JudgeController_1 = __importDefault(require("../controllers/Judge/JudgeController"));
const Auth_1 = require("../Middlewares/Auth");
const JudgeReports_1 = __importDefault(require("../controllers/Judge/JudgeReports"));
const router = (0, express_1.Router)();
router.get("/judge-competitions", JudgeController_1.default.JudgeViewAssignedCompetitions);
router.get("/get-school-competitions/:id", Auth_1.VerifyToken, JudgeController_1.default.JudgeGetSchoolRegisteredForCompetition);
router.post("/award-marks/:id", Auth_1.VerifyToken, JudgeController_1.default.JudgeAwardMarks);
router.get("/awarded-marks", Auth_1.VerifyToken, JudgeController_1.default.GetJudgesScoredPeformance);
router.put("/update-judge", Auth_1.VerifyToken, JudgeController_1.default.EditJudgeDetails);
router.get("/judges-reports", Auth_1.VerifyToken, JudgeReports_1.default.GetJudgesStatisticReports);
exports.default = router;
