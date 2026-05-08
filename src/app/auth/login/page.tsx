// "use client";

// import { useState } from "react";
// import { loginUser } from "@/services/auth.service";
// import { useAuth } from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Login() {

//   const router =useRouter();
//   const {setUser}=useAuth();


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// const handleLogin = async () => {
//   try {
//     const res = await loginUser({ email, password });

//     setUser(res.user);
//     localStorage.setItem("token", res.token);

//     if (res.user.role === "ADMIN") {
//       router.push("/admin/dashboard");
//     } else {
//       router.push("/student/dashboard");
//     }
//   } catch (error) {
//     alert("Login Failed");
//   }
// };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow w-80">
//         <input
//           className="input mb-2"
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           className="input mb-2"
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="btn-primary w-full" onClick={handleLogin} >
//           Login
//         </button> <br />

//         <Link href="/auth/register">
//           <button className="btn-primary w-full mask-t-from-1" >don't have a account</button>
//         </Link>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { loginUser } from "@/services/auth.service";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await loginUser({ email, password });

      setUser(res.user);
      localStorage.setItem("token", res.token);

      if (res.user.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/student/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login to continue
        </p>

        {/* Error */}
        {error && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        {/* Email */}
        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-2 text-sm text-gray-500"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Register */}
        <Link href="/auth/register">
          <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 rounded-lg transition">
            Create new account
          </button>
        </Link>
      </div>
    </div>
  );
}
