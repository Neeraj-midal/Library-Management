"use client";

import { useEffect, useState } from "react";
import { getStudents } from "@/services/student.service";
import { Student } from "@/types/student.types";
import AddStudent from "@/components/forms/AddStudent";

export default function StudentPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Student Management
        </h1>
        <p className="text-sm text-gray-500">
          Manage all students in your library system
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT FORM */}
        <div className="col-span-12 lg:col-span-4">
          <AddStudent />
        </div>

        {/* RIGHT TABLE */}
        <div className="col-span-12 lg:col-span-8">

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">

            {/* Table Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">
                Students List
              </h2>

              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
                {students.length} students
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">

                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Year</th>
                    <th>Roll No</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {students.length === 0 ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center py-6 text-gray-400"
                      >
                        No students found
                      </td>
                    </tr>
                  ) : (
                    students.map((s) => (
                      <tr
                        key={s.id}
                        className="border-b last:border-0 hover:bg-gray-50 transition"
                      >

                        {/* IMAGE */}
                        <td className="py-2">
                          {s.image ? (
                            <img
                              src={`http://localhost:4000${s.image}`}
                              alt={s.name}
                              className="w-10 h-10 rounded-full object-cover border"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                              N/A
                            </div>
                          )}
                        </td>

                        {/* NAME */}
                        <td className="font-medium text-gray-800">
                          {s.name}
                        </td>

                        {/* EMAIL */}
                        <td className="text-gray-600">
                          {s.email}
                        </td>

                        {/* PHONE */}
                        <td className="text-gray-600">
                          {s.phone}
                        </td>

                        {/* COURSE */}
                        <td>
                          <span className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-600">
                            {s.course}
                          </span>
                        </td>

                        {/* YEAR */}
                        <td className="text-gray-700">
                          {s.year}
                        </td>

                        {/* ROLL NO */}
                        <td className="text-gray-500">
                          {s.rollNumber}
                        </td>

                        {/* STATUS */}
                        <td>
                          <span
                            className={`px-2 py-1 text-xs rounded-md ${
                              s.status === "ACTIVE"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}