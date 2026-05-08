"use client";

import { useState } from "react";
import { createStudent } from "@/services/student.service";

export default function AddStudent() {
  const [image, setImage] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    year: "",
    rollNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // ✅ FIX 1: ADD USERID (REQUIRED BY BACKEND)
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!user?.id) {
        alert("User not found. Please login again.");
        return;
      }

      formData.append("userid", user.id);

      // append text fields
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // append image if exists
      if (image) {
        formData.append("image", image);
      }

      await createStudent(formData);

      // reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        course: "",
        year: "",
        rollNumber: "",
      });

      setImage(null);

      alert("Student added successfully");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10";

  return (
    <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

      <div className="grid grid-cols-2 gap-3">
        <input
          name="name"
          value={form.name}
          placeholder="Full Name"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="phone"
          value={form.phone}
          placeholder="Phone"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="address"
          value={form.address}
          placeholder="Address"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="course"
          value={form.course}
          placeholder="Course"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="year"
          value={form.year}
          placeholder="Year (e.g. 1st, 2nd)"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="rollNumber"
          value={form.rollNumber}
          placeholder="Roll Number"
          onChange={handleChange}
          className="col-span-2"
        />
      </div>

      <div className="mt-4 border border-dashed rounded-lg p-3 flex justify-between items-center">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const allowed = ["image/jpeg", "image/png", "image/webp"];

            if (!allowed.includes(file.type)) {
              alert("Only JPG, PNG, WEBP allowed");
              return;
            }

            setImage(file);
          }}
          className="text-sm"
        />

        <span className="text-xs text-gray-500">
          Upload student image
        </span>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
      >
        Add Student
      </button>
    </div>
  );
}