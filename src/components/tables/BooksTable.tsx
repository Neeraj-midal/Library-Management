"use client";

import { useEffect, useState } from "react";
import { getBooks } from "@/services/book.service";

export default function BooksTable() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <table className="w-full bg-white">
      <tbody>
        {books.map((b) => (
          <tr key={b.id}>
            <td>{b.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
