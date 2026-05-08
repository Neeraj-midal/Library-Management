// "use client";

// import { useState } from "react";
// import { registerUser } from "@/services/auth.service";

// import Link from "next/link";

// export default function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleRegister = async () => {
//     await registerUser(form);
//     alert("registered");
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow w-80 space-y-2">
//         <input
//           className="input"
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         <input
//           className="input"
//           type="email"
//           placeholder="Email"
//           onChange={(e) => {
//             setForm({ ...form, email: e.target.value });
//           }}
//         />

//         <input
//           className="input"
//           type="phone"
//           placeholder="Phone_no."
//           onChange={(e) => {
//             setForm({ ...form, phone: e.target.value });
//           }}
//         />

//         <input
//           className="input"
//           type="password"
//           placeholder="password"
//           onChange={(e) => {
//             setForm({ ...form, password: e.target.value });
//           }}
//         />

//         <button className="btn-primary w-full" onClick={handleRegister}>
//           Register
//         </button> <br />

//            <Link href="/auth/login">
         
//           <button className="btn-primary w-full mask-t-from-1" >already have a account</button>
//         </Link>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { registerUser } from "@/services/auth.service";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      alert("Registered successfully 🎉");
    } catch (err) {
      setError("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Join us and get started
        </p>

        {/* Error */}
        {error && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        {/* Name */}
        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Email */}
        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="email"
          placeholder="Email address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Phone */}
        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="tel"
          placeholder="Phone number"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* Password */}
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Login Link */}
        <Link href="/auth/login">
          <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 rounded-lg transition">
            Already have an account? Login
          </button>
        </Link>
      </div>
    </div>
  );
}