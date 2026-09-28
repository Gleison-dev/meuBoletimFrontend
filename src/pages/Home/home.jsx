import Qualities from "../../components/Qualities/qualities";
import icon_light from "../../assets/icon_light.svg";
import icon_ray from "../../assets/icon_ray.svg";
import icon_lock from "../../assets/icon_lock.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="lg:flex-row lg:justify-around lg:items-center lg:mt-10 flex flex-col justify-center items-center px-10 gap-10">
        <div className="mt-5">
          <h1 className="text-3xl lg:text-5xl">
            <strong>Gerencie Suas Notas</strong> <br />
            com Facilidade, conheça <br />o{" "}
            <span className="font-bold text-azul">MeuBoletim</span>
          </h1>
          <div className="mt-5">
            <NavLink to="/login">
              <button className="w-85 h-20 text-xl rounded-2xl cursor-pointer bg-azul text-branco">
                SAIBA MAIS
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-4 rounded-xl bg-azul-claro">
          <Qualities
            img={icon_light}
            title="Fácil"
            text="Organize suas notas de forma simples e rápida."
          />
          <Qualities
            img={icon_ray}
            title="Eficiente"
            text="Organização e agilidade em um só lugar."
          />
          <Qualities
            img={icon_lock}
            title="Seguro"
            text="Seus dados protegidos com segurança."
          />
        </div>
      </section>
    </>
  );
}
