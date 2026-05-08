"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser } = context;

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored && !user) {
      setUser(JSON.parse(stored));
    }
  }, [user, setUser]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, setUser, logout };
};
