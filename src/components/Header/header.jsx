import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="h-25 flex justify-between items-center shadow px-10 bg-azul-claro">
        <div>
          <h1 className="text-lg">
            <span className="font-semibold">Meu</span> <br />{" "}
            <span className="text-azul">Boletim</span>
          </h1>
        </div>
        <div>
          <NavLink to="/login">
            <button className="w-30 h-10 rounded-lg text-lg cursor-pointer bg-azul text-branco">
              Entrar
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
