import express, { Request, Response } from "express";
import CreateCompetion from "../controllers/Admin/CreateCompetion";

const router = express.Router();

router.post("/create", CreateCompetion.AdminCreateCompetiton);
router.get("/all", CreateCompetion.AdminGetAllCompetitions);
router.put("/remove-judge", CreateCompetion.AdminRemoveJudgeFromCompetiton);
router.put("/add-judge", CreateCompetion.AdminAddJudgeToCompetition);
router.put("/update", CreateCompetion.AdminUpdateCompetition);
router.delete("/delete/:id", CreateCompetion.AdminDeleteCompetition);

export default router;
