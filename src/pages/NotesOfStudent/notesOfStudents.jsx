import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import icon_arrow from "../../assets/icon_arrow.svg";

export default function NotesOfStudent() {
  const { token } = useContext(AuthContext);
  const { studentId } = useParams();
  const [notes, setNotes] = useState([]);

  const handleNote = async () => {
    try {
      const response = await api.get(`/noteByStudent?studentId=${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(response.data.note);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar a nota do estudante.";
      return console.error(message);
    }
  };

  useEffect(() => {
    handleNote();
  }, [token]);

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="w-96 p-4 rounded-lg bg-azul-claro">
          <NavLink to="/dashboardTeacher">
            <div>
              <img src={icon_arrow} alt="Ícone de seta" />
            </div>
          </NavLink>
          <div className="mt-2 mb-2">
            <h1 className="text-3xl">
              <strong>Nome do aluno</strong>
            </h1>
          </div>
          <div className="w-80 rounded-lg bg-branco"></div>
        </div>
      </section>
    </>
  );
}
