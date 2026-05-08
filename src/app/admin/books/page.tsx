"use client";

import AddBook from "@/components/forms/AddBook";
import { useEffect, useState } from "react";
import { Book } from "@/types/book.types";
import { getBooks } from "@/services/book.service";
import axios from "axios";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, [search]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/books/search?keyword=${search}`,
      );
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("BOOK FETCH ERROR:", err);
        setBooks([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6 text-sm text-gray-500">Loading books...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Library Books</h1>
        <p className="text-sm text-gray-500">
          Manage all books in your library system
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT: FORM */}
        <div className="col-span-12 lg:col-span-4">
          <AddBook />
        </div>

        {/* RIGHT: TABLE */}
        <div className="col-span-12 lg:col-span-8">
          <input
            type="test"
            placeholder="Search Books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
            {/* Table Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Books Inventory</h2>

              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
                {books.length} books
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Category</th>
                    <th>Qty</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {books.map((b) => (
                    <tr
                      key={b.id}
                      className="border-b last:border-0 hover:bg-gray-50 transition"
                    >
                      <td className="py-2 font-medium text-gray-800">
                        {b.title}
                      </td>

                      <td className="text-gray-600">{b.author}</td>

                      <td className="text-gray-500">{b.isbn}</td>

                      <td>
                        <span className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-600">
                          {b.category}
                        </span>
                      </td>

                      <td className="text-gray-700">{b.quantity}</td>

                      <td>
                        <span
                          className={`px-2 py-1 text-xs rounded-md ${
                            b.available > 0
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {b.available > 0 ? "Available" : "Out"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
