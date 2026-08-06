import icon_instagram from "../../assets/icon_instagram.svg";
import icon_whatsapp from "../../assets/icon_whatsapp.svg";
import icon_email from "../../assets/icon_email.svg";
import icon_phone from "../../assets/icon_phone.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center mt-5">
        <div className="w-screen p-4 bg-azul-claro">
          <div className="flex justify-around items-center">
            <div>
              <h1 className="text-xl">
                <strong className="text-azul">Sobre nós</strong>
              </h1>
              <ul>
                <li className="underline">Quem somos</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl">
                <strong className="text-azul">Ajuda</strong>
              </h1>
              <ul>
                <li className="underline">Feedback</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-around items-center mt-5">
            <div>
              <h1 className="text-xl">
                <span className="font-semibold">Meu</span> <br />{" "}
                <span className="text-azul">
                  <strong>Boletim</strong>
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <img src={icon_instagram} alt="Ícone do instagram" />
              <img src={icon_whatsapp} alt="Ícone do whatsapp" />
              <img src={icon_email} alt="Ícone de e-mail" />
              <img src={icon_phone} alt="Ícone de telefone" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
