import { prisma } from "../config/db.js";

export const getStats = async (req, res) => {
  const users = await prisma.user.count();
  const books = await prisma.book.count();
  const issued = await prisma.issue.count({
    where: {
      status: "ISSUED",
    },
  });

  const overdue = await prisma.issue.count({
    where: {
      dueDate: { It: new Date() },
      status: "ISSUED",
    },
  });

  const fines = await prisma.issue.aggregate({
    _sum: { fine: true },
  });

  res.json({
    users,
    books,
    issued,
    overdue,
    fines: fine._sum.fine || 0,
  });
};
