"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = __importDefault(require("../controllers/Auth/AuthController"));
const Auth_1 = require("../Middlewares/Auth");
const AuthChangePassword_1 = __importDefault(require("../controllers/Auth/AuthChangePassword"));
const router = express_1.default.Router();
router.post("/register", AuthController_1.default.AuthUserRegister);
router.post("/login", AuthController_1.default.AuthUserLogin);
router.post("/logout", Auth_1.VerifyToken, AuthController_1.default.AuthUserLogout);
router.get("/verify-token", Auth_1.VerifyToken, AuthController_1.default.AuthVerifyToken);
router.put("/change-password", AuthChangePassword_1.default.AuthChangePassword);
exports.default = router;
