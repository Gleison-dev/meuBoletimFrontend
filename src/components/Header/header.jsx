import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import icon_user from "../../assets/icon_user.svg";
import { isTokenExpired } from "../../utils/tokenUtils";
import { DropdownMenuBasic } from "../ui/dropdown";

export default function Header() {
  const { token } = useContext(AuthContext);
  const isAuthenticated = token && !isTokenExpired(token);
  return (
    <>
      <section className="h-25 flex justify-between items-center shadow px-10 bg-azul-claro">
        <div>
          {token ? (
            <h1 className="text-xl">
              <span className="font-semibold">Meu</span> <br />{" "}
              <span className="text-azul">
                <strong>Boletim</strong>
              </span>
            </h1>
          ) : (
            <NavLink to="/">
              <h1 className="text-xl">
                <span className="font-semibold">Meu</span> <br />{" "}
                <span className="text-azul">
                  <strong>Boletim</strong>
                </span>
              </h1>
            </NavLink>
          )}
        </div>
        <div>
          {isAuthenticated ? (
            <DropdownMenuBasic />
          ) : (
            <NavLink to="/login">
              <button className="w-30 h-15 rounded-lg text-xl cursor-pointer bg-azul text-branco hover:bg-blue-600">
                <strong>Entrar</strong>
              </button>
            </NavLink>
          )}
        </div>
      </section>
    </>
  );
}
