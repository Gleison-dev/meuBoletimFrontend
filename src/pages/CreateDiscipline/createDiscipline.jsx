import Input from "@/components/Input/input";
import Label from "@/components/Label/label";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useState } from "react";

export default function CreateDiscipline({ onUserCreated }) {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(
        "/createDiscipline",
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setStatus(response.data.discipline);
      setLoading(false);
      onUserCreated?.();
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao cadastrar disciplina.";
      setStatus(message);
    }
    setTimeout(() => {
      setName("");
      setStatus("");
    }, 3000);
  };

  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl">
              <strong>Cadastrar Disciplina</strong>
            </h1>
            <p>Cadastre uma disciplina abaixo.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <Label name="Nome da disciplina" /> <br />
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome da disciplina"
              />
            </div>
            <div>
              <p className="text-azul">
                <strong>{status}</strong>
              </p>
            </div>
            <div className="flex justify-center">
              {loading ? (
                <button
                  disabled
                  type="submit"
                  className="w-80 h-12 rounded-md text-xl text-branco bg-gray-500"
                >
                  Cadastrando...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-80 h-12 rounded-md text-xl text-branco bg-azul hover:bg-blue-800"
                >
                  Cadastrar
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
