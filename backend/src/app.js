import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import bookRoutes from "./routes/book.routes.js";
import issueRoutes from "./routes/issue.routes.js"
import feeRoutes from "./routes/fee.routes.js";
import studentRoutes from "./routes/student.routes.js";



dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("server is running ")
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admins", adminRoutes);

app.use("/uploads",express.static("uploads"));

export default app;