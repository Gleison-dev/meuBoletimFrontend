import { useContext, useEffect, useState } from "react";
import icon_arrow from "../../assets/icon_arrow.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

export default function Profile() {
  const { user, token } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState(user?.email);
  const [password, setPassword] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");

  const handleEmail = async () => {
    try {
      const response = await api.put(
        `updateEmail?id=${user.id}`,
        {
          newEmail: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setMessageEmail(response.data.user);
      setTimeout(() => {
        setMessageEmail("");
        setEmail("");
        window.location.reload();
      }, 3000);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao alterar o email do usuário.";
      setMessageEmail(message);
    }
  };

  const handlePassword = async () => {
    try {
      const response = await api.put(
        `updatePassword?id=${user.id}`,
        {
          newPassword: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setMessagePassword(response.data.user);
      setTimeout(() => {
        setMessagePassword("");
        setPassword("");
        window.location.reload();
      }, 3000);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao alterar o email do usuário.";
      setMessagePassword(message);
    }
  };

  return (
    <>
      <section className="mt-10 flex justify-center items-center">
        <div className="w-96 h-100 rounded-xl bg-azul-claro">
          <div className="mt-5 ml-5">
            <NavLink to="/dashboardStudent">
              <img
                className="hover:cursor-pointer"
                src={icon_arrow}
                alt="Ícone de seta para a esquerda."
              />
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 mb-1 bg-azul rounded-full"></div>
            <div>
              <h1>{user?.name}</h1>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-5 mt-5">
            <div>
              <label>
                <strong>E-mail</strong>
              </label>{" "}
              <br />
              <input
                className="w-60 h-10 p-2 outline-none bg-branco border-2 border-azul rounded-lg focus:border-blue-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu novo e-mail"
              />
              <button
                onClick={handleEmail}
                className="w-20 h-10 ml-2 rounded-md cursor-pointer text-branco bg-azul hover:bg-blue-800"
              >
                Alterar
              </button>
              {messageEmail && (
                <p className="text-sm mt-1 text-azul">
                  <strong>{messageEmail}</strong>
                </p>
              )}
            </div>
            <div>
              <label>
                <strong>Senha</strong>
              </label>{" "}
              <br />
              <input
                className="w-60 h-10 p-2 outline-none bg-branco border-2 border-azul rounded-lg focus:border-blue-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Insira sua nova senha"
              />
              <button
                onClick={handlePassword}
                className="w-20 h-10 ml-2 rounded-md cursor-pointer text-branco bg-azul hover:bg-blue-800"
              >
                Alterar
              </button>
              {messagePassword && (
                <p className="text-sm mt-1 text-azul">
                  <strong>{messagePassword}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
