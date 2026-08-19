import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";

export default function EnrollStudent() {
  const { token } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [classId, setClassId] = useState("");

  const handleStudents = async () => {
    try {
      const response = await api.get("/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data.students);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar todos os estudantes.";
      return console.error(message);
    }
  };

  const handleClasses = async () => {
    try {
      const response = await api.get("/classes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClasses(response.data.classes);
    } catch (error) {
      const message =
        error.response?.data?.message || "Erro ao listar todas as turmas.";
      return console.error(message);
    }
  };

  const studentOption = students.map((aluno) => ({
    value: aluno.id,
    label: aluno.name,
  }));

  const classOption = classes.map((classe) => ({
    value: classe.id,
    label: classe.name,
  }));

  useEffect(() => {
    handleStudents();
    handleClasses();
  }, [token]);

  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Matricular estudante na turma</strong>
          </h1>
          <p>Vincule um estudante há uma turma.</p>
        </div>
        <Select
          className="mt-4 focus:bg-blue-800"
          options={studentOption}
          onChange={(selected) => setStudentId(selected.value)}
          placeholder="Selecione um aluno"
        />
      </section>
    </>
  );
}
