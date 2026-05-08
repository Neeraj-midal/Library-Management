import { prisma } from "../config/db.js";

export const addStudent = async (req, res) => {
  try {
    const { userid, name, email, phone, address, course, year, rollNumber } =
      req.body;

    // 🔴 Debug (remove later if you want)
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!userid) {
      return res.status(400).json({
        success: false,
        message: "userid is required",
      });
    }

    const image = req.file ? `/uploads/students/${req.file.filename}` : null;

    const student = await prisma.student.create({
      data: {
        name,
        email,
        phone,
        address,
        course,
        year,
        rollNumber,
        image,

        // 🔥 FIX: required relation handling
        user: {
          connect: {
            id: userid,
          },
        },
      },
    });

    return res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("ADD STUDENT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: { user: true },
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await prisma.student.update({
      where: { id },
      data: req.body,
    });

    res.json({
      success: true,
      student: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
