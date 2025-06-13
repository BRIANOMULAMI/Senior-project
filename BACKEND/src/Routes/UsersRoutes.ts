import { Router } from "express";
import { VerifyToken } from "../Middlewares/Auth";
import UserController from "../controllers/Auth/UserController";

const router = Router();

router.get("/loggedin-user", VerifyToken, UserController.GetLoggedInUser);

export default router;
