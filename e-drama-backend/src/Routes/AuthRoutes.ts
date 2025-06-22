import express from "express";
import AuthController from "../controllers/Auth/AuthController";
import { VerifyToken } from "../Middlewares/Auth";

const router = express.Router();

router.post("/register", AuthController.AuthUserRegister);
router.post("/login", AuthController.AuthUserLogin);
router.post("/logout", VerifyToken, AuthController.AuthUserLogout);
router.get("/verify-token", VerifyToken, AuthController.AuthVerifyToken);

export default router;
