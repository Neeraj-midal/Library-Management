import { prisma } from "../config/db.js";

export const getBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, isbn, category, quantity } = req.body;

    if (!title || !author || !isbn || !category) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const existingBook = await prisma.book.findUnique({
      where: { isbn },
    });

    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: "Book already exists",
      });
    }

    const image = req.file ? `/uploads/book/${req.file.filename}` : null;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        isbn,
        category,
        quantity: Number(quantity),
        available: Number(quantity),
        image,
      },
    });

    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {};
