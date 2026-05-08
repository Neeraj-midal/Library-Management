




import multer from "multer";
import path from "path";
import fs from "fs";

const folders = ["uploads/books", "uploads/students", "uploads/users"];

folders.forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "uploads/users";

    if (req.baseUrl.includes("books")) {
      uploadPath = "uploads/books";
    } else if (req.baseUrl.includes("students")) {
      uploadPath = "uploads/students";
    } else if (req.baseUrl.includes("users")) {
      uploadPath = "uploads/users";
    }

    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    const unique =
      Date.now() +
      "_" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, unique);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("MIME TYPE:", file.mimetype);
  console.log("FILENAME:", file.originalname);

  const allowedMimes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
  ]);

  if (allowedMimes.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only jpg, jpeg, png, webp images allowed"));
  }
};
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default upload;