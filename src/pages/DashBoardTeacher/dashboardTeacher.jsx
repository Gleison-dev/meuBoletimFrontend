import icon_user from "../../assets/icon_user.svg";
import icon_class from "../../assets/icon_class.svg";
import icon_email from "../../assets/icon_email.svg";
import { TableActionsTeacher } from "@/components/ui/tableActionTeacher";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useNavigate } from "react-router-dom";

export default function DashboardTeacher() {
  const { user, token } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCountClass = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/countClass`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCount(response.data.disciplineTeacher);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message ||
        "Erro ao buscar a contagem das turmas.";
      console.log(message);
    }
  };

  const handleClass = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/disciplineTeacher`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClasses(response.data.disciplineTeacher);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message || "Erro ao buscar as turmas.";
      console.log(message);
    }
  };

  useEffect(() => {
    handleCountClass();
    handleClass();
  }, [user, token]);

  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="w-96 p-6 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>{user?.name}</strong>
            </h1>
          </div>
          <div className="p-4 mt-5 rounded-xl bg-branco">
            <div>
              <h1 className="text-xl">
                <strong>Painel de Informações</strong>
              </h1>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <img src={icon_user} alt="Ícone de usuário" />
                <p>{user?.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={icon_class} alt="Ícone de usuário" />
                {loading ? <p>Carregando...</p> : <p>{count} turmas</p>}
              </div>
              <div className="flex items-center gap-1">
                <img src={icon_email} alt="Ícone de usuário" />
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
          <div className="p-4 mt-5 rounded-xl bg-branco">
            <div>
              <h1 className="text-xl">
                <strong>Minhas Turmas</strong>
              </h1>
            </div>
            <div>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                <>
                  {classes.map((i) => (
                    <TableActionsTeacher
                      key={i.id}
                      id={i.classId}
                      turma={i.turma.name}
                      discipline={i.disciplina.name}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
