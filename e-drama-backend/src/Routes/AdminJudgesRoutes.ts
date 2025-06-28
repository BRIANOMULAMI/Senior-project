import express from "express";
import CreateJUdges from "../controllers/Admin/CreateJudges";

const router = express.Router();

router.post("/create", CreateJUdges.AdminCreateJudge);
router.get("/all", CreateJUdges.AdminGetAllJudges);
router.put("/update", CreateJUdges.AdminUpdateJudge);
router.delete("/delete/:id", CreateJUdges.AdminDeleteJudge);

export default router;
