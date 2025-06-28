"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../src/generated/prisma");
const bcryptjs_1 = require("bcryptjs");
const Sender_1 = require("../../src/Mail/Sender");
const mail_1 = require("../../src/Mail/mail");
const prisma = new prisma_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 Seeding Admin...");
        const email = "admin@gmail.com";
        const rawPassword = "admin1234";
        const hashedPassword = yield (0, bcryptjs_1.hash)(rawPassword, 10);
        const admin = yield prisma.users.upsert({
            where: { email },
            update: {
                name: "Admin",
                password: hashedPassword,
                role: "ADMIN",
            },
            create: {
                name: "Admin",
                email,
                password: hashedPassword,
                role: "ADMIN",
            },
        });
        yield (0, Sender_1.SendMail)({
            html: `
      <h2>Admin Account Created</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${rawPassword}</p>
    `,
            recepient: [
                { email: "leleigideon97@gmail.com" },
                { email: "brianangondi@gmail.com" },
            ],
            sender: mail_1.Sender,
            subject: "🛡️ Admin User Credentials",
        });
        console.log("✅ Admin seeded:", admin);
    });
}
main()
    .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
})
    .finally(() => prisma.$disconnect());
