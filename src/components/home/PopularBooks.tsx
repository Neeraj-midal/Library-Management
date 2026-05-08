
"use client";

import { useEffect, useState } from "react";

export default function PopularBooks() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/books")
      .then((res) => res.json())
      .then((data) => {
        const list = data.books || data.data || [];
        setBooks(Array.isArray(list) ? list : []);
      })
      .catch(() => setBooks([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Popular Books
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Most issued and trending books in your library system
            </p>
          </div>

          <div className="text-sm text-slate-500">
            {books.length} books available
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div
                key={i}
                className="h-80 rounded-2xl bg-slate-100 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && books.length === 0 && (
          <div className="mt-12 text-center text-slate-500">
            No books found in the library 📚
          </div>
        )}

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {books.map((book: any) => (
            <div
              key={book._id}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={
                    book.image?.startsWith("http")
                      ? book.image
                      : `http://localhost:4000${book.image}`
                  }
                  alt={book.title}
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* subtle badge */}
                <div className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full text-slate-700 shadow">
                  Book
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition line-clamp-1">
                  {book.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  by {book.author}
                </p>

                {/* meta info (optional future-ready UI) */}
                {/* <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>ID: {book._id?.slice(-6)}</span>
                  <span className="text-blue-500 font-medium">
                    View →
                  </span>
                </div> */}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}