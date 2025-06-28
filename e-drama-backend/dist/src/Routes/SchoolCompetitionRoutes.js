"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = require("../Middlewares/Auth");
const SchoolsController_1 = __importDefault(require("../controllers/Schools/SchoolsController"));
const Schools_1 = __importDefault(require("../controllers/Admin/Schools"));
const SchoolReports_1 = __importDefault(require("../controllers/Schools/SchoolReports"));
const router = express_1.default.Router();
router.post("/create", Auth_1.VerifyToken, SchoolsController_1.default.SchoolRegisterCompetiton);
router.get("/all", Auth_1.VerifyToken, SchoolsController_1.default.SchoolsViewTheirCompetitions);
router.get("/all-requests", Auth_1.VerifyToken, SchoolsController_1.default.AdminGetAllCompetitonRequests);
router.put("/approve-school/:id", Auth_1.VerifyToken, Schools_1.default.AdminApproveSchoolCompetition);
router.delete("/delete-participant/:id", Auth_1.VerifyToken, Schools_1.default.AdminDeleteParticipant);
router.get("/competition-results", Auth_1.VerifyToken, SchoolsController_1.default.SchoolGetCompetitonResults);
router.get("/school-reports", Auth_1.VerifyToken, SchoolReports_1.default.SchoolReportStatistics);
exports.default = router;
