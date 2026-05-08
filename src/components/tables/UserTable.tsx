"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/services/user.service";

export default function UserTable() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUser();

        console.log("USER API RESPONSE:", data); // 🔥 DEBUG

        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">
          Users List
        </h2>

        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">
          {users.length} users
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2">User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Avatar</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b last:border-0 hover:bg-gray-50 transition"
                >

                  <td className="py-2 font-medium text-gray-800">
                    {u.name}
                  </td>

                  <td className="text-gray-600">{u.email}</td>

                  <td className="text-gray-600">{u.phone}</td>

                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        u.role === "ADMIN"
                          ? "bg-purple-100 text-purple-700"
                          : u.role === "LIBRARIAN"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>

                  <td>
                    {u.avtar ? (
                      <img
                        src={u.avtar}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">
                        No image
                      </span>
                    )}
                  </td>

                  <td className="text-xs text-gray-500">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}