import { User } from "@/types/user.types";
import { api } from "./api";

export const getUser = async (): Promise<User[]> => {
  return api<User[]>("/api/users");
};

export const getUserById = async (id: string): Promise<User> => {
  return api<User>(`/api/users/${id}`);
};

export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User> => {
  return api<User>(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const deleteUser = async (
  id: string
): Promise<{ message: string }> => {
  return api<{ message: string }>(`/api/users/${id}`, {
    method: "DELETE",
  });
};