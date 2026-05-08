import StudentSidebar from "@/components/layout/StudentSidebar";
import Navbar from "@/components/layout/Navbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <StudentSidebar />

      <div className="flex-1 ml-64 min-h-screen">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
