"use client";

import ProtectedRoute from "@/components/layout/protectedRoute";
import { useAuth } from "@/context/AuthContext";



export default function Dashboard() {
  const { user, logout } = useAuth();

  const stats = [
    { title: "Total Students", value: 128 },
    { title: "Books Available", value: 542 },
    { title: "Books Issued", value: 87 },
    { title: "Pending Fees", value: "RS 12,400" },
  ];

  const recantActivities = [
    "rahul Issued Atomic Habits",
    "priya paid monthly fees",
    "new student addmission complete",
    "Book return reach dad poor dad",
  ];

  return (
    <ProtectedRoute role="ADMIN">
      <div className="min-h-screen bg-slate-100 ">
        {/*Header*/}
        <div className="flex justify-between items-center mb-8">
          <div >
            <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
            <p className="text-slate-500">Welcome Back,{user?.name}</p>
          </div>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        {/*Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">
          {stats.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow p-5">
              <p className="text-slate-500">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </div>
          ))}
        </div>

        {/*Selections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/*Recent Activity */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-3 text-slate-600">
              {recantActivities.map((item, i) => (
                <li key={i}>.{item}</li>
              ))}
            </ul>
          </div>
          {/*Quick Action */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-indigo-600  text-white py-3 rounded-xl">Add Book</button>

              <button className="bg-green-600  text-white py-3 rounded-xl">Add Student </button>

              <button className="bg-yellow-500  text-white py-3 rounded-xl">Issue Book</button>

              <button className="bg-purple-600 text-white py-3 rounded-xl">Send Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
