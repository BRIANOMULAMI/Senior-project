import { PrismaClient } from "../../src/generated/prisma";
import { hash } from "bcryptjs";
import { SendMail } from "../../src/Mail/Sender";
import { Sender } from "../../src/Mail/mail";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Seeding Admin...");

  const email = "admin@gmail.com";
  const rawPassword = "admin1234";
  const hashedPassword = await hash(rawPassword, 10);

  const admin = await prisma.users.upsert({
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

  await SendMail({
    html: `
      <h2>Admin Account Created</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${rawPassword}</p>
    `,
    recepient: [
      { email: "leleigideon97@gmail.com" },
      { email: "brianangondi@gmail.com" },
    ],
    sender: Sender,
    subject: "🛡️ Admin User Credentials",
  });

  console.log("✅ Admin seeded:", admin);
}

main()
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
