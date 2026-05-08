import { prisma } from "../config/db.js";

export const issueBook = async (req, res) => {
  const { userId, bookId, dueDate } = req.body;

  const book = await prisma.book.findUnique({ where: { id: bookId } });

  if (!book) {
    return res.status(404).json({ message: "book not found" });
  }

  if (book.available <= 0) {
    return res.status(400).json({ message: "no books available" });
  }

  const issue = await prisma.issue.create({
    data: {
      userId,
      bookId,
      dueDate: new Date(dueDate),
    },
  });

  await prisma.book.update({
    where: { id: bookId },
    data: { available: book.available - 1 },
  });
  res.json(issue);
};

export const returnBooks = async (req, res) => {
  const { issueId } = req.body;

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
    include: {
      book: true,
    },
  });
  if (!issue) {
    return res.status(404).json({ message: "Issue not found" });
  }

  let fine = 0;
  const today = new Date();

  if (today.getTime() - issue.dueDate.getTime()) {
    const dayLate = Math.ceil((today - issue.dueDate) / (1000 * 60 * 60 * 24));
    fine = dayLate * 10; //10rs per day
  }

  await prisma.issue.update({
    where: {
      id: issueId,
    },
    data: {
      status: "RETURNED",
      returnDate: today,
      fine,
    },
  });

  await prisma.book.update({
    where: {
      id: issue.bookId,
    },
    data: {
      available: issue.book.available + 1,
    },
  });

  res.json({ message: "Book returned", fine });
};
