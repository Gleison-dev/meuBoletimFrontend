import { useCallback, useContext, useState } from "react";
import CreateClass from "../CreateClass/createClass";
import CreateUser from "../CreateUser/createUser";
import EnrollStudent from "../EnrollStudent/enrollStudent";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import CreateDiscipline from "../CreateDiscipline/createDiscipline";

export default function DashboardAdmin() {
  const { token } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  const fetchStudents = useCallback(async () => {
    try {
      const response = await api.get("/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data.students);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Erro ao listar todos os estudantes.",
      );
    }
  }, [token]);

  const fetchClasses = useCallback(async () => {
    try {
      const response = await api.get("/classes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClasses(response.data.classes);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Erro ao listar todas as turmas.",
      );
    }
  }, [token]);

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col gap-10 w-96 p-4 rounded-xl bg-azul-claro">
          <CreateUser onUserCreated={fetchStudents} />
          <CreateClass onClassCreated={fetchClasses} />
          <EnrollStudent
            students={students}
            classes={classes}
            fetchStudents={fetchStudents}
            fetchClasses={fetchClasses}
          />
          <CreateDiscipline />
        </div>
      </section>
    </>
  );
}
