import Qualities from "../../components/Qualities/qualities";
import icon_light from "../../assets/icon_light.svg";
import icon_ray from "../../assets/icon_ray.svg";
import icon_lock from "../../assets/icon_lock.svg";
import "./styles.css"

export default function Home() {
  return (
    <>
      <section className="px-10">
        <div className="mt-10">
          <p className="w-38 pl-3 rounded-full bg-azul-claro">
            <strong>Sistema de Notas</strong>
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <strong>Gerencie Suas Notas</strong> <br />
            com Facilidade, conheça <br />o{" "}
            <span className="font-bold text-azul">MeuBoletim</span>
          </h1>
        </div>
        <div className="mt-8">
          <button className="w-85 h-20 text-xl rounded-2xl cursor-pointer bg-azul text-branco">
            SAIBA MAIS
          </button>
        </div>
        <div className="main-quality flex flex-col justify-center items-center rounded-md w-85 mt-8 bg-azul-claro">
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
