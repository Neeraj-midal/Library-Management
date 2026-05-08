import express from "express";

import { addStudent, getStudents,updateStudent } from "../controllers/student.controller.js";
import upload from "../middlewares/upload.middleware.js";


const router =express.Router();


router.post("/add",upload.single("image"),addStudent);
router.get("/",getStudents);

router.put("/update/:id",upload.single("image"),updateStudent);

export default router;