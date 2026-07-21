import { createContext, useEffect, useState } from "react";
import { isTokenExpired } from "../utils/tokenUtils";
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";
import { FileChartColumnIncreasingIcon } from "lucide-react";

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const role = token ? jwtDecode(token).role : null;

  async function login(email, password) {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token, role } = response.data.user;

      localStorage.setItem("token", token);

      setToken(token);

      return { success: true, role: role };
    } catch (error) {
      const message = error.response?.data?.message || "Erro ao fazer login!";
      return { success: false, message };
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  async function profile() {
    try {
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
    } catch (error) {
      const message =
        error.response?.data.message || "Erro ao buscar o perfil!";
      setUser(null);
      return message;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      profile();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, role, user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
