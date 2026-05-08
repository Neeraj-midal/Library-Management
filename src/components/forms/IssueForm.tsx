import { useState } from "react";
import axios from "axios";

export default function IssueBook() {
  const [form, setForm] = useState({
    userId: "",
    bookId: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/issues", form);
      alert("Book Issued Successfully!");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error issuing book");
    }
  };

return (
  <div className="max-w-md mx-auto">
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Issue Book
        </h2>
        <p className="text-xs text-gray-500">
          Assign a book to a user with due date
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-3">
        <input
          name="userId"
          placeholder="User ID"
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          name="bookId"
          placeholder="Book ID"
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-4 w-full bg-black text-white text-sm py-2.5 rounded-lg hover:bg-gray-900 active:scale-[0.99] transition"
      >
        Issue Book →
      </button>
    </form>
  </div>
);
}