"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


const menu = [
  { name: "Dashboard", path: "/student/dashboard" },
  { name: "My Books", path: "/student/my-books" },
  { name: "Fees", path: "/student/fees" },
  { name: "Profile", path: "/student/profile" },
];

export default function StudentSidebar() {

    const pathname = usePathname();
    const router= useRouter();
    const {logout}=useAuth();


  const handleLogout=()=>{
    logout();
    router.push("/auth/login");
  }


  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-indigo-900 text-white flex flex-col shadow-2xl z-50">
      <div className="h-20 flex items-center justify-center border-b border-white/10">
      <h1 className="text-2xl font-bold tracking-wide">Student Panel</h1>
</div>
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-3 rounded=xl ${pathname === item.path ? "bg-indigo-600" : "hover:bg-slate-800 text-slate-300"}`}
          >{item.name}</Link>
        ))}
      </nav>


<div className="p-4 bordert border-white/10">
  <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl font semibold transition-all" onClick={handleLogout}>Logout</button>
</div>

    </aside>
  );
}
