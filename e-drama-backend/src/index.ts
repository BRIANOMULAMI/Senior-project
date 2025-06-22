import express from "express";
import cors from "cors";
import "dotenv/config";
import AuthRoutes from "./Routes/AuthRoutes";
import cookieParser from "cookie-parser";
import { IsAdmin } from "./Middlewares/Role";
import { VerifyToken } from "./Middlewares/Auth";
import { PrismaClient } from "./generated/prisma";
import AminCompetitionsRoutes from "./Routes/AminCompetitionsRoutes";
import AdminJudgesRoutes from "./Routes/AdminJudgesRoutes";
import UsersRoutes from "./Routes/UsersRoutes";
import SchoolCompetitionRoutes from "./Routes/SchoolCompetitionRoutes";

const PORT = process.env.PORT || 3000;
const app = express();
export const db = new PrismaClient();

app.use(
  cors({
    origin: process.env.FRONTEND_URL!,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.send("Health is OK");
});
//
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/user", UsersRoutes);
app.use("/api/schools/competitions", SchoolCompetitionRoutes);
app.use(
  "/api/admin/competitions",
  VerifyToken,
  IsAdmin,
  AminCompetitionsRoutes
);
app.use("/api/admin/judges", VerifyToken, IsAdmin, AdminJudgesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
