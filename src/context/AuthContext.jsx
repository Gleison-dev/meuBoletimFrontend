import { createContext, useState } from "react";
import isTokenExpired from "../utils/tokenUtils";
import { api } from "../services/api";

export const AuthContext = createContext();

function getValidToken() {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  async function login(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const token = response.data.user;

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
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
