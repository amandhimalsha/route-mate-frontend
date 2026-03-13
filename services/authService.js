import api from "./api";

export async function loginUser(email, password) {
  // TEMPORARY LOGIN MOCK FOR FRONTEND DEVELOPMENT
  // Replace with real backend API call when backend is connected.

  // const response = await api.post("/auth/login", { email, password });
  // return response.data;

  const isDriver = email.toLowerCase().includes("driver");

  const user = {
    id: "demo-user-id",
    name: "Demo User",
    email,
    role: isDriver ? "driver" : "passenger",
    token: "dummy-token",
  };

  return user;
}

export async function registerUser(userData) {
  const response = await api.post("/auth/register", userData);
  return response.data;
}

