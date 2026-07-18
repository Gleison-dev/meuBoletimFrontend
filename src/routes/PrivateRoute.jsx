import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import isTokenExpired from "../utils/tokenUtils";

export function PrivateRoute() {
  const { token, logout } = useContext(AuthContext);

  if (!token || isTokenExpired(token)) {
    logout();
    return <Navigate to="/loginStudent" replace />;
  }

  return <Outlet />;
}
