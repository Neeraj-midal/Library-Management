// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function ProtectedRoute({
//   children,
//   role,
// }: {
//   children: React.ReactNode;
//   role?: "ADMIN" | "STUDENT";
// }) {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//     } else if (role && user.role !== role) {
//       router.push("/");
//     }
//   }, [user]);

//   return <>{children}</>;
// }




"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: "ADMIN" | "STUDENT";
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth/login");
    } else if (role && user && user.role !== role) {
      router.push("/");
    }
  }, [user, role, router]);

  // 🧠 VERY IMPORTANT: wait until auth is loaded
  if (user === undefined) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}