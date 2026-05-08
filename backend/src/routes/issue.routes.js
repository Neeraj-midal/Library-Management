import express from "express";
import { issueBook, returnBooks } from "../controllers/issue.controller.js";


const router = express.Router();

router.post("/",issueBook);
router.post("/return",returnBooks);

export default router;
