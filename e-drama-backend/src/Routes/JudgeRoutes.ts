import { Router } from "express";
import JudgeController from "../controllers/Judge/JudgeController";
import { VerifyToken } from "../Middlewares/Auth";
import JudgeReports from "../controllers/Judge/JudgeReports";

const router = Router();

router.get(
  "/judge-competitions",
  JudgeController.JudgeViewAssignedCompetitions
);
router.get(
  "/get-school-competitions/:id",
  VerifyToken,
  JudgeController.JudgeGetSchoolRegisteredForCompetition
);
router.post("/award-marks/:id", VerifyToken, JudgeController.JudgeAwardMarks);
router.get(
  "/awarded-marks",
  VerifyToken,
  JudgeController.GetJudgesScoredPeformance
);

router.put("/update-judge", VerifyToken, JudgeController.EditJudgeDetails);
router.get(
  "/judges-reports",
  VerifyToken,
  JudgeReports.GetJudgesStatisticReports
);

export default router;
