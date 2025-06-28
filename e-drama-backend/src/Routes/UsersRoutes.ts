import { Router } from "express";
import { VerifyToken } from "../Middlewares/Auth";
import UserController from "../controllers/Auth/UserController";
import AuthChangePassword from "../controllers/Auth/AuthChangePassword";

const router = Router();

router.get("/loggedin-user", VerifyToken, UserController.GetLoggedInUser);
router.post("/verify-email/:email", AuthChangePassword.AuthVerifyEmail);
router.post("/verify-code/:email", AuthChangePassword.AuthVerifyCode);
router.post("/change-password/:email", AuthChangePassword.AuthChangePassword);

export default router;
