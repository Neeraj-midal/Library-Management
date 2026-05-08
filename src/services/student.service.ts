import { Student } from "@/types/student.types";
import { api } from "./api";

export const getStudents = () => api<Student[]>("/api/students");

// export const createStudent = (data: Partial<Student>) =>
//   api<Student>("/api/students/add", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });


export const createStudent = (data: FormData) =>
  api("/api/students/add", {
    method: "POST",
    body: data,
  });