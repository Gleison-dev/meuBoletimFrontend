import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { isTokenExpired } from "../utils/tokenUtils";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const { token, role } = useContext(AuthContext);
  const isAuthenticated = token && !isTokenExpired(token);
  
  if (isAuthenticated) {
    const verifyRole =
      role === "ALUNO" ? "/dashboardStudent" : "/dashboardTeacher";
    return <Navigate to={verifyRole} replace />;
  }

  return <Outlet />;
}
