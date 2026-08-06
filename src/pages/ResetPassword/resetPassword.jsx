import Input from "@/components/Input/input";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      setLoading(true);
      const response = await api.patch(
        `/resetPassword`,
        {
          email,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setMessage(response.data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao resetar sua senha.";
      setMessage(message);
    }
    setTimeout(() => {
      setEmail("");
      setNewPassword("");
      setMessage("");
      navigate("/login");
    }, 3000);
  };

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-6 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-3xl">Esqueceu a senha?</h1>
            <p>Sem problemas, a gente te ajuda!</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <label>
                <strong>E-mail</strong>
              </label>{" "}
              <br />
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira o e-mail cadastrado"
              />
            </div>
            <div>
              <label>
                <strong>Nova senha</strong>
              </label>{" "}
              <br />
              <Input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Digite sua nova senha"
              />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-azul underline">
              <strong>{message}</strong>
            </p>
          </div>
          <div className="flex justify-center items-center mt-4">
            {loading ? (
              <button
                disabled
                onClick={handleReset}
                className="w-96 h-14 rounded-4xl text-xl text-white bg-gray-500"
              >
                Redefinindo...
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="w-96 h-14 rounded-4xl text-xl cursor-pointer transition ease-in-out duration-300 text-white bg-azul hover:bg-blue-800"
              >
                Redefinir Senha
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
