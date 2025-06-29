import express from "express";
import { VerifyToken } from "../Middlewares/Auth";
import SchoolsController from "../controllers/Schools/SchoolsController";
import Schools from "../controllers/Admin/Schools";
import SchoolReports from "../controllers/Schools/SchoolReports";

const router = express.Router();

router.post("/create", VerifyToken, SchoolsController.SchoolRegisterCompetiton);
router.get("/all", VerifyToken, SchoolsController.SchoolsViewTheirCompetitions);
router.get(
  "/all-requests",
  VerifyToken,
  SchoolsController.AdminGetAllCompetitonRequests
);
router.put(
  "/approve-school/:id",
  VerifyToken,
  Schools.AdminApproveSchoolCompetition
);
router.delete(
  "/delete-participant/:id",
  VerifyToken,
  Schools.AdminDeleteParticipant
);

router.get(
  "/competition-results",
  VerifyToken,
  SchoolsController.SchoolGetCompetitonResults
);

router.get(
  "/school-reports",
  VerifyToken,
  SchoolReports.SchoolReportStatistics
);
router.get(
  "/school-competition-rankings/:id",
  VerifyToken,
  SchoolReports.SchoolGetCompetitionRankings
);

export default router;
