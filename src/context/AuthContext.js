import { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  async function login(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("token", token);

      setToken(token);

      return true;
    } catch (error) {
      return false;
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }
  return (
    <AuthContext.Provider value={{ login, logout  }}></AuthContext.Provider>
  );
}
