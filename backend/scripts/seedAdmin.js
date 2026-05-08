import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    const existingAdmin = await prisma.user.findFirst({
      where: {
        role: "ADMIN",
      },
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      console.log("Email", existingAdmin.email);
      return;
    }

    const hashedPassword = await bcrypt.hash("admin1234", 10);

    const admin = await prisma.user.create({
      data: {
        name: "super Admin",
        email: "admin@gmail.com",
        phone: "9671239654",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("Admin created successfully");
    console.log("---------------------------");
    console.log("login Credentials");
    console.log("Email:admin@gmail.com");
    console.log("Password:admin1234");
    console.log("---------------------");
    console.log(admin);
  } catch (error) {
    console.error("Error", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
