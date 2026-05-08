"use client";

export default function StudentDashboard() {
  const stats = [
    { title: "Books issued", value: 2 },
    { title: "Pending Fees", value: "RS500" },
    { title: "Due Books", value: 1 },
    { title: "Membership", value: "Active" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl shadow p-5">
            <p className="text-slate-500">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow p-5" >
        <h2 className="text-2xl font-semibold mb-4">Recent  Activity</h2>

        <ul className="space-y-3 text-slate-600">
          <li>You Issued "Atomic Habit"</li>
          <li>Book Due in 3 Days</li>
          <li>Pending Fee Reminder RS 500</li>
        </ul>
      </div>
    </div>
  );
}
