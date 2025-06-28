"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = require("../Middlewares/Auth");
const UserController_1 = __importDefault(require("../controllers/Auth/UserController"));
const AuthChangePassword_1 = __importDefault(require("../controllers/Auth/AuthChangePassword"));
const router = (0, express_1.Router)();
router.get("/loggedin-user", Auth_1.VerifyToken, UserController_1.default.GetLoggedInUser);
router.post("/verify-email/:email", AuthChangePassword_1.default.AuthVerifyEmail);
router.post("/verify-code/:email", AuthChangePassword_1.default.AuthVerifyCode);
router.post("/change-password/:email", AuthChangePassword_1.default.AuthChangePassword);
exports.default = router;
