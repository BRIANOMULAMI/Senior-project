"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateJudges_1 = __importDefault(require("../controllers/Admin/CreateJudges"));
const router = express_1.default.Router();
router.post("/create", CreateJudges_1.default.AdminCreateJudge);
router.get("/all", CreateJudges_1.default.AdminGetAllJudges);
router.put("/update", CreateJudges_1.default.AdminUpdateJudge);
router.delete("/delete/:id", CreateJudges_1.default.AdminDeleteJudge);
exports.default = router;
