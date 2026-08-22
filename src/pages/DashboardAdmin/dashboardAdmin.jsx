import { useCallback, useContext, useState } from "react";
import CreateClass from "../CreateClass/createClass";
import CreateUser from "../CreateUser/createUser";
import EnrollStudent from "../EnrollStudent/enrollStudent";
import { api } from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import CreateDiscipline from "../CreateDiscipline/createDiscipline";
import EnrollDisiciplineTeacher from "../EnrollDisciplineTeacher/enrollDisciplineTeacher";

export default function DashboardAdmin() {
  const { token } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [disciplines, setDisciplines] = useState([]);

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

  const fetchTeachers = useCallback(async () => {
    try {
      const response = await api.get("/teachers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Erro ao listar todos os educadores.",
      );
    }
  }, [token]);

  const fetchDisciplines = useCallback(async () => {
    try {
      const response = await api.get("/disciplines", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDisciplines(response.data.disciplines);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Erro ao listar todas as disciplinas.",
      );
    }
  }, [token]);

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col gap-10 w-96 p-4 rounded-xl bg-azul-claro">
          <CreateUser onUserCreated={fetchStudents} onTeacherCreated={fetchTeachers} />
          <CreateClass onClassCreated={fetchClasses} />
          <EnrollStudent
            students={students}
            classes={classes}
            fetchStudents={fetchStudents}
            fetchClasses={fetchClasses}
          />
          <CreateDiscipline onUserCreated={fetchDisciplines} />
          <EnrollDisiciplineTeacher
            teachers={teachers}
            disciplines={disciplines}
            classes={classes}
            fetchTeachers={fetchTeachers}
            fetchDisciplines={fetchDisciplines}
            fetchClasses={fetchClasses}
          />
        </div>
      </section>
    </>
  );
}
