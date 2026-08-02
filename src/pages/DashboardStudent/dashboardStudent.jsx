import { TableActions } from "@/components/ui/tableActions";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import icon_user from "../../assets/icon_user.svg";
import icon_class from "../../assets/icon_class.svg";
import icon_email from "../../assets/icon_email.svg";

export default function DashboardStudent() {
  const { user, token } = useContext(AuthContext);
  const [note, setNote] = useState([]);
  const [studentUser, setStudentUser] = useState({});
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

  const handleSearchStudent = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudentUser(response.data.student);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao listar as notas.";
    }
  };

  useEffect(() => {
    handleSearchNote();
    handleSearchStudent();
  }, [user, token]);

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-8 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>{studentUser.usuario?.name}</strong>
            </h1>
          </div>
          <div className="p-4 mt-10 rounded-xl border-2 border-azul bg-branco">
            <div>
              <h1 className="text-xl mb-3">
                <strong>Informações do aluno(a)</strong>
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <img src={icon_user} alt="Ícone de usuário" />
                <h1>{studentUser.usuario?.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon_class} alt="Ícone de usuário" />
                <h1>{studentUser.turma?.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon_email} alt="Ícone de usuário" />
                <h1>{studentUser.usuario?.email}</h1>
              </div>
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
