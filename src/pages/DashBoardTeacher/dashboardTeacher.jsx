import icon_user from "../../assets/icon_user.svg";
import icon_class from "../../assets/icon_class.svg";
import icon_email from "../../assets/icon_email.svg";
import { TableActionsTeacher } from "@/components/ui/tableActionTeacher";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";

export default function DashboardTeacher() {
  const { user, token } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  const handleClass = async () => {
    try {
      const response = await api.get(
        `/disciplineTeacher?teacherId=${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setClasses(response.data.disciplineTeacher);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao buscar as turmas.";
      console.log(message);
    }
  };

  useEffect(() => {
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
                <p>Turmas</p>
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
              {classes.map((i) => (
                <TableActionsTeacher
                  key={i.id}
                  turma={i.turma.name}
                  discipline={i.disciplina.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
