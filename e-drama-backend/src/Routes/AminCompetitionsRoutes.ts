import express, { Request, Response } from "express";
import CreateCompetion from "../controllers/Admin/CreateCompetion";

const router = express.Router();

router.post("/create", CreateCompetion.AdminCreateCompetiton);
router.get("/all", CreateCompetion.AdminGetAllCompetitions);
router.get("/all-for-judges", CreateCompetion.AdminGetAllCompetitionsForJudges);
router.get(
  "/all-judges-competitions/:id",
  CreateCompetion.AdminGetCompetitionJudges
);
router.put("/remove-judge", CreateCompetion.AdminRemoveJudgeFromCompetiton);
router.put("/add-judge", CreateCompetion.AdminAddJudgeToCompetition);
router.put("/update/:id", CreateCompetion.AdminUpdateCompetition);
router.delete("/delete/:id", CreateCompetion.AdminDeleteCompetition);

export default router;
