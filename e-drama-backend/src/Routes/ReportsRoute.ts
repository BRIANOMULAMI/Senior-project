import express from "express";
import { VerifyToken } from "../Middlewares/Auth";
import ReportsController from "../controllers/Admin/ReportsController";

const router = express.Router();

router.get("/count-stats", VerifyToken, ReportsController.AdminGetAllReports);
router.get(
  "/judges-assigned-competitions",
  VerifyToken,
  ReportsController.AdminGetJudgesAssignedCompetitions
);

export default router;
