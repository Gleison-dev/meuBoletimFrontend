import { TableActions } from "@/components/ui/tableActions";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";

export default function DashboardStudent() {
  const { user, token } = useContext(AuthContext);
  const [note, setNote] = useState([]);

  const handleSearchNote = async () => {
    try {
      const response = await api.get(`/noteByStudent?studentId=${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNote(response.data.note);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar as notas.";
    }
  };

  useEffect(() => {
    handleSearchNote();
  }, [token]);

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-8 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>{user?.name}</strong>
            </h1>
          </div>
          <div className="flex justify-between items-center mt-5 gap-10">
            <div className="w-40 h-25 p-4 border-3 border-azul rounded-xl">
              <h1 className="text-2xl">
                <strong>Aprovado</strong>
              </h1>
            </div>
            <div className="w-40 h-25 flex flex-col justify-around items-center p-4 border-3 border-azul rounded-xl">
              <h1 className="text-2xl">
                <strong>Média</strong>
              </h1>
              <p className="text-2xl">9.7</p>
            </div>
          </div>
          <div className="p-4 mt-10 rounded-xl border-2 border-azul bg-branco">
            <div>
              <h1 className="text-xl mb-3">Minhas Disciplinas</h1>
            </div>
            <div>
              {note.map((i) => (
                <TableActions discipline={i.disciplina.name} unit={i.unit} note={i.note} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
