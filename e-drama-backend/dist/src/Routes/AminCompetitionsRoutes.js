"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateCompetion_1 = __importDefault(require("../controllers/Admin/CreateCompetion"));
const router = express_1.default.Router();
router.post("/create", CreateCompetion_1.default.AdminCreateCompetiton);
router.get("/all", CreateCompetion_1.default.AdminGetAllCompetitions);
router.get("/all-for-judges", CreateCompetion_1.default.AdminGetAllCompetitionsForJudges);
router.get("/all-judges-competitions/:id", CreateCompetion_1.default.AdminGetCompetitionJudges);
router.put("/remove-judge", CreateCompetion_1.default.AdminRemoveJudgeFromCompetiton);
router.put("/add-judge", CreateCompetion_1.default.AdminAddJudgeToCompetition);
router.put("/update/:id", CreateCompetion_1.default.AdminUpdateCompetition);
router.delete("/delete/:id", CreateCompetion_1.default.AdminDeleteCompetition);
exports.default = router;
