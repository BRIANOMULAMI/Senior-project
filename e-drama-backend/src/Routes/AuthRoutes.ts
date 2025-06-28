import express from "express";
import AuthController from "../controllers/Auth/AuthController";
import { VerifyToken } from "../Middlewares/Auth";
import AuthChangePassword from "../controllers/Auth/AuthChangePassword";

const router = express.Router();

router.post("/register", AuthController.AuthUserRegister);
router.post("/login", AuthController.AuthUserLogin);
router.post("/logout", VerifyToken, AuthController.AuthUserLogout);
router.get("/verify-token", VerifyToken, AuthController.AuthVerifyToken);
router.put("/change-password", AuthChangePassword.AuthChangePassword);

export default router;
