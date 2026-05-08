// import { API_BASE } from "@/utils/constant";
// export const api = async <T>(
//   endpoint: string,
//   options?: RequestInit
// ): Promise<T> => {
//   const token =
//     typeof window !== "undefined"
//       ? localStorage.getItem("token")
//       : null;

//   const isFormData = options?.body instanceof FormData;

//   const res = await fetch(`${API_BASE}${endpoint}`, {
//     ...options,
//     headers: {
//       ...(isFormData ? {} : { "Content-Type": "application/json" }),

//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...(options?.headers || {}),
//     },
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(text);
//   }

//   return res.json();
// };








import { API_BASE } from "@/utils/constant";

export const api = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const isFormData = options?.body instanceof FormData;

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText);
  }

  return res.json();
};