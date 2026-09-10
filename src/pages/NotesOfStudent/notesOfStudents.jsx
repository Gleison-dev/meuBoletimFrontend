import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import icon_arrow from "../../assets/icon_arrow.svg";
import { TableNotes } from "@/components/ui/tableNotes";

export default function NotesOfStudent() {
  const { token } = useContext(AuthContext);
  const { studentId } = useParams();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);

  const handleStudent = async () => {
    try {
      const response = await api.get(`/studentById?id=${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.student.usuario.name);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar o estudante.";
      return console.error(message);
    }
  };

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
    handleStudent();
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
              <strong>{name}</strong>
            </h1>
          </div>
          <div className="w-80 rounded-lg bg-branco">
            <TableNotes />
          </div>
        </div>
      </section>
    </>
  );
}
