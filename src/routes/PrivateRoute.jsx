import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import {isTokenExpired} from "../utils/tokenUtils";

export function PrivateRoute() {
  const { token, logout } = useContext(AuthContext);
  const expired = !token || isTokenExpired(token);

  useEffect(() => {
    if (expired) {
      logout();
    }
  }, [expired]);

  if (expired) {
    return <Navigate to="/loginStudent" replace />;
  }

  return <Outlet />;
}
