"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const AuthRoutes_1 = __importDefault(require("./Routes/AuthRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const Auth_1 = require("./Middlewares/Auth");
const prisma_1 = require("./generated/prisma");
const AminCompetitionsRoutes_1 = __importDefault(require("./Routes/AminCompetitionsRoutes"));
const AdminJudgesRoutes_1 = __importDefault(require("./Routes/AdminJudgesRoutes"));
const UsersRoutes_1 = __importDefault(require("./Routes/UsersRoutes"));
const SchoolCompetitionRoutes_1 = __importDefault(require("./Routes/SchoolCompetitionRoutes"));
const JudgeRoutes_1 = __importDefault(require("./Routes/JudgeRoutes"));
const ReportsRoute_1 = __importDefault(require("./Routes/ReportsRoute"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
exports.db = new prisma_1.PrismaClient();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/health", (req, res) => {
    res.send("Health is OK");
});
//
app.use("/api/v1/auth", AuthRoutes_1.default);
app.use("/api/v1/user", UsersRoutes_1.default);
app.use("/api/schools/competitions", SchoolCompetitionRoutes_1.default);
app.use("/api/admin/competitions", Auth_1.VerifyToken, 
// IsAdmin,
AminCompetitionsRoutes_1.default);
app.use("/api/admin/judges", Auth_1.VerifyToken, /* IsAdmin, */ AdminJudgesRoutes_1.default);
app.use("/api/v1/judge", Auth_1.VerifyToken, JudgeRoutes_1.default);
app.use("/api/v1/reports", ReportsRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
