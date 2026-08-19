import Input from "@/components/Input/input";
import Label from "@/components/Label/label";
import icon_class from "../../assets/icon_class.svg";
import { useContext, useState } from "react";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";

export default function CreateClass({ onClassCreated }) {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(
        "/createClass",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setStatus(response.data.newClass);
      setLoading(false);
      onClassCreated?.();
    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message || "Erro ao criar a turma.";
      return setStatus(message);
    } finally {
      setTimeout(() => {
        setName("");
        setStatus("");
      }, 3000);
    }
  };

  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl">
              <strong>Criar nova turma</strong>
            </h1>
            <img className="w-8 h-8" src={icon_class} alt="Ícone de turma" />
          </div>
          <p>Crie uma nova turma abaixo.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          <div>
            <Label name="Nome da turma" /> <br />
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome da turma"
            />
          </div>
          <div>
            <p className="text-azul">
              <strong>{status}</strong>
            </p>
          </div>
          <div>
            {loading ? (
              <button
                type="submit"
                disabled
                className="w-80 h-12 rounded-md text-xl text-branco bg-gray-500"
              >
                Cadastrando...
              </button>
            ) : (
              <button
                type="submit"
                className="w-80 h-12 rounded-md text-xl text-branco bg-azul hover:cursor-pointer"
              >
                Criar turma
              </button>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
