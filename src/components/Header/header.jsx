import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import icon_user from "../../assets/icon_user.svg";

export default function Header() {
  const { token } = useContext(AuthContext);
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
          {token ? (
            <img
              className="w-15 h-15 cursor-pointer"
              src={icon_user}
              alt="Ícone de usuário"
            />
          ) : (
            <NavLink to="/loginStudent">
              <button className="w-30 h-10 rounded-lg text-lg cursor-pointer bg-azul text-branco hover:bg-blue-600">
                Entrar
              </button>
            </NavLink>
          )}
        </div>
      </section>
    </>
  );
}
