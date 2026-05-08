import { api } from "./api";
import { Book } from "@/types/book.types";
import { API_BASE } from "@/utils/constant";

export const getBooks = async (): Promise<Book[]> => {
  const res = await api<{ success: boolean; data: Book[] }>(
    "/api/books"
  );

  return res?.data ?? [];
};

export const createBook = async (data: FormData) => {
  const res = await fetch(`${API_BASE}/api/books/add`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return res.json();
};
// import { Book } from "@/types/book.types";
// import { api } from "./api";

// export const getBooks = () => api<Book[]>("/api/books");

// export const createBook = async (data: Partial<Book>) => {
//   try {
//     return await api<Book>("/api/books", {
//       method: "POST",
//       body: JSON.stringify({
//         ...data,
//         quantity: Number(data.quantity),
//       }),
//     });
//   } catch (error: any) {
//     if (error.message.includes("isbn")) {
//       alert("ISBN already exists. Please use a different one.");
//     }

//     throw error;
//   }
// };