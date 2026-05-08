import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const searchAll = async (req, res) => {
  const { q } = req.query;

  if (!q) return res.json([]);

  const books = await prisma.book.findMany({
    where: {
      title: { contains: q, mode: "insensitive" },
    },
  });

  const students = await prisma.student.findMany({
    where: {
      name: { contains: q, mode: "insensitive" },
    },
  });

  res.json([...books, ...students]);
};