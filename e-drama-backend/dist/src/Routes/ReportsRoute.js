"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = require("../Middlewares/Auth");
const ReportsController_1 = __importDefault(require("../controllers/Admin/ReportsController"));
const router = express_1.default.Router();
router.get("/count-stats", Auth_1.VerifyToken, ReportsController_1.default.AdminGetAllReports);
router.get("/judges-assigned-competitions", Auth_1.VerifyToken, ReportsController_1.default.AdminGetJudgesAssignedCompetitions);
exports.default = router;
