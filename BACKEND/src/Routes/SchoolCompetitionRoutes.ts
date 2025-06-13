import express from "express";
import { VerifyToken } from "../Middlewares/Auth";
import SchoolsController from "../controllers/Schools/SchoolsController";

const router = express.Router();

router.post("/create", VerifyToken, SchoolsController.SchoolRegisterCompetiton);
router.get("/all", VerifyToken, SchoolsController.SchoolsViewTheirCompetitions);

export default router;
