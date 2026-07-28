import { TableActions } from "@/components/ui/tableActions";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";

export default function DashboardStudent() {
  const { user, token } = useContext(AuthContext);
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchNote = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/noteByStudent?studentId=${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNote(response.data.note);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao listar as notas.";
    }
  };

  useEffect(() => {
    handleSearchNote();
  }, [user, token]);

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-8 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>{user?.name}</strong>
            </h1>
          </div>
          <div className="p-4 mt-10 rounded-xl border-2 border-azul bg-branco">
            <div>
              <h1 className="text-xl mb-3">Informações do aluno(a)</h1>
            </div>
            <div>
              <h1>{user?.name}</h1>
            </div>
          </div>
          <div className="p-4 mt-10 rounded-xl border-2 border-azul bg-branco">
            <div>
              <h1 className="text-xl mb-3">Minhas Disciplinas</h1>
            </div>
            <div>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                note.map((i) => (
                  <TableActions
                    discipline={i.disciplina.name}
                    unit={i.unit}
                    note={i.note}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
