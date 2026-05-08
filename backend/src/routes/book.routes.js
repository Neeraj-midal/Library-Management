
import express from "express";
import { getBooks, addBook,updateBook } from "../controllers/book.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// GET books
router.get("/", getBooks);

// CREATE book (with image)
router.post("/add", upload.single("image"), addBook);

router.put("/update/:id",upload.single("image"),updateBook);

export default router;