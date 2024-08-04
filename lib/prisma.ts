import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = (globalThis as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = prisma;
}

export default prisma;
