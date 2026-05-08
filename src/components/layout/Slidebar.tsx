"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Books", path: "/admin/books" },
  { name: "Users", path: "/admin/users" },
  { name: "Students", path: "/admin/students" },
  { name: "Issues", path: "/admin/issues" },
  { name: "Return", path: "/admin/return" },
  { name: "Fees", path: "/admin/fees" },
  { name: "Settings", path: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname(); // ✅ THIS was missing

  return (
    <aside className="w-72 h-screen sticky top-0 bg-slate-950 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">Library Admin</h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-4 rounded-xl transition ${
              pathname === item.path
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
