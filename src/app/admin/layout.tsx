'use client';
import Sidebar from "@/components/layout/Slidebar";
import Navbar from "@/components/layout/Navbar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
    <Sidebar/>
      <div className="flex-1">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
