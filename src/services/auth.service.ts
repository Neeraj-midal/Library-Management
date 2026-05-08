import { api } from "./api";
import { User } from "@/types/user.types";

type AuthResponse = {
  user: User;
  token: string;
};

// 🔹 Register
export const registerUser = async (data: {
  name: string;
  email: string;
  phone: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api<AuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  // Save token
  localStorage.setItem("token", res.token);

  return res;
};

// 🔹 Login
export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  // Save token
  localStorage.setItem("token", res.token);

  return res;
};

// 🔹 Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// 🔹 Get token
export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};