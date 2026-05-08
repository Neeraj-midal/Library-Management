import { title } from "node:process";
import { prisma } from "../config/db.js";
import { count } from "node:console";

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

export const getBooksById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await prisma.books.findUnique({
      where: { id },
    });

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, author, isbn, category, quantity, available } = req.body;

    const existingBook = await prisma.book.findUnique({
      where: { id },
    });

    if (!existingBook) {
      return res.status(404).json({
        success: false,
        message: "book not found",
      });
    }
    const image = req.file
      ? `/uploads/book/${req.file.filename}`
      : existingBook.image;

    const book = await prisma.book.update({
      where: { id },
      data: {
        title,
        author,
        isbn,
        category,
        quantity: Number(quantity),
        available: Number(available),
        image,
      },
    });

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    await prisma.book.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: "Book deleted seccessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchBooks = async (req, res) => {
  try {
    const { keyword } = req.query;

    const books = await prisma.book.findMany({
      where: {
        OR: [
          {
            title: {
              contains: keyword,
              mode: "insensitive",
            },
          },
          {
            author: {
              contains: keyword,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: keyword,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    res.status(200).json({
      success: true,
      count: books.length,
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
