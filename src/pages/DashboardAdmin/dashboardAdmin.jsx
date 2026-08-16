import Label from "../../components/Label/label";
import Input from "../../components/Input/input";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";

export default function DashboardAdmin() {
  const { user, token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ALUNO");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleCreateUser = async () => {
    try {
      setLoading(true);
      const response = await api.post(
        "/createUser",
        {
          name,
          email,
          password,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setStatus(response.data.user);
      setLoading(false);
      setTimeout(() => {
        setName("");
        setEmail("");
        setPassword("");
      }, 3000);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao criar o usuário";
      setStatus(message);
    }
  };

  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="w-96 p-4 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">Olá, {user?.name}!</h1>
          </div>
          <div className="flex flex-col gap-4 p-4 mt-5 rounded-lg bg-branco">
            <h1 className="text-xl">Cadastrar usuário</h1>
            <div className="flex flex-col gap-3">
              <div>
                <Label name="Nome" /> <br />
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite o nome do usuário"
                />
              </div>
              <div>
                <Label name="E-mail" /> <br />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira o e-mail do usuário"
                />
              </div>
              <div>
                <Label name="Senha" /> <br />
                <Input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Insira a senha do usuário"
                />
              </div>
              <div>
                <Label name="Função" /> <br />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-40 p-2 border-2 rounded-md outline-none border-azul focus:border-blue-800"
                >
                  <option value="ALUNO">ALUNO</option>
                  <option value="PROFESSOR">PROFESSOR</option>
                </select>
              </div>
            </div>
            {loading ? (
              <div></div>
            ) : (
              <div>
                <p className="text-azul">
                  <strong>{status}</strong>
                </p>
              </div>
            )}
            <div className="flex justify-center">
              <button
                onClick={handleCreateUser}
                className="w-80 p-4 rounded-xl cursor-pointer text-xl bg-azul text-branco hover:bg-blue-800"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
