import { NavLink, useParams } from "react-router-dom";
import icon_arrow from "../../assets/icon_arrow.svg";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { TableActionsClass } from "@/components/ui/tableActionsClass";

export default function DashboardClass() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const { id } = useParams();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/studentsOfClass?classId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data.studentsOfClass);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message ||
        "Erro ao buscar os estudantes da turma.";
      console.log(message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [token]);
  return (
    <>
      <section className="flex justify-center">
        <div className="w-96 mt-10 p-6 rounded-xl bg-azul-claro">
          <div>
            <NavLink to="/dashboardTeacher">
              <img src={icon_arrow} alt="Ícone de seta para esquerda." />
            </NavLink>
          </div>
          <div className="mt-3">
            <h1 className="text-3xl">Estudantes do 3º B</h1>
          </div>
          <div className="bg-branco rounded-xl p-4 mt-5">
            {loading ? (
              <p>Carregando...</p>
            ) : (
              <>
                {students.map((i) => (
                  <TableActionsClass key={i.id} name={i.usuario.name} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
