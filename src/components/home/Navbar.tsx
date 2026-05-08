"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  BookOpen,
  Users,
  FileText,
  IndianRupee,
  LayoutDashboard,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isLoggedIn = false;
  const role = "ADMIN"; // ADMIN | STUDENT

  const adminLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Books", icon: BookOpen, href: "/books" },
    { name: "Students", icon: Users, href: "/students" },
    { name: "Issues", icon: FileText, href: "/issues" },
    { name: "Fees", icon: IndianRupee, href: "/fees" },
  ];

  const studentLinks = [
    { name: "My Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "My Books", icon: BookOpen, href: "/my-books" },
    { name: "My Fees", icon: IndianRupee, href: "/my-fees" },
  ];

  const links = role === "ADMIN" ? adminLinks : studentLinks;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", query);
    // later: router.push(`/search?q=${query}`)
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
            LibraryMS
          </Link>

          {/* 🔍 Search (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

              <input
                type="text"
                placeholder="Search books, students..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">

            {links.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}

          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">

            {/* Notifications */}
            <button className="p-2 rounded-xl hover:bg-slate-100 transition">
              🔔
            </button>

            {/* Auth */}
            {!isLoggedIn ? (
              <div className="flex items-center gap-2">

                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-sm text-slate-600 hover:text-blue-600 transition"
                >
                  Login
                </Link>

                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Register
                </Link>

              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                A
              </div>
            )}

          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">

          {/* Search */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm"
              />
            </div>
          </form>

          {/* Links */}
          <div className="space-y-3">

            {links.map((item, i) => {
              const Icon = item.icon;

              return (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}

          </div>

          {/* Auth mobile */}
          {!isLoggedIn ? (
            <div className="flex flex-col gap-2">

              <Link
                href="/auth/login"
                className="w-full py-2 border border-slate-200 rounded-xl text-center"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="w-full py-2 bg-blue-600 text-white rounded-xl text-center"
              >
                Register
              </Link>

            </div>
          ) : (
            <Link
              href="/profile"
              className="w-full py-2 bg-blue-600 text-white rounded-xl text-center"
            >
              Profile
            </Link>
          )}

        </div>
      )}

    </header>
  );
}