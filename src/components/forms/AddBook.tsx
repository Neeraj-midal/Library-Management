

"use client";

import { useState } from "react";
import { createBook } from "@/services/book.service";

export default function AddBook() {
  const [image, setImage] = useState<File | null>(null);

  const [form, setForm] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // ✅ prevent reload

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // ✅ Ensure image exists
      if (!image) {
        alert("Please select an image");
        return;
      }

      formData.append("image", image);

      await createBook(formData);

      // reset
      setForm({
        title: "",
        author: "",
        isbn: "",
        category: "",
        quantity: "",
      });

      setImage(null);

      alert("Book added successfully");
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Add New Book
        </h2>
        <p className="text-xs text-gray-500">
          Enter book details to add it into library system
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3">
        <input
          name="title"
          value={form.title}
          placeholder="Book title"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="author"
          value={form.author}
          placeholder="Author name"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="isbn"
          value={form.isbn}
          placeholder="ISBN number"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          name="category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="number"
          name="quantity"
          value={form.quantity}
          placeholder="Quantity"
          onChange={handleChange}
          className={`col-span-2 ${inputClass}`}
        />
      </div>

      {/* File Upload */}
      <div className="mt-3 border border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-between">
        <input
          type="file"
          accept="image/*"  // ✅ IMPORTANT FIX
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="text-xs text-gray-700"
        />
        <span className="text-[11px] text-gray-500">
          Upload book cover image
        </span>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-4 w-full bg-black text-white text-sm py-2.5 rounded-lg hover:bg-gray-900 active:scale-[0.99] transition"
      >
        Add Book →
      </button>
    </form>
  );
}