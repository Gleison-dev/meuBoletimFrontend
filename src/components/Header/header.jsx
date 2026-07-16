import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="h-25 flex justify-between items-center shadow px-10 bg-azul-claro">
        <div>
          <NavLink to="/">
            <h1 className="text-xl">
              <span className="font-semibold">Meu</span> <br />{" "}
              <span className="text-azul">
                <strong>Boletim</strong>
              </span>
            </h1>
          </NavLink>
        </div>
        <div>
          <NavLink to="/loginStudent">
            <button className="w-30 h-10 rounded-lg text-lg cursor-pointer bg-azul text-branco hover:bg-blue-600">
              Entrar
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
