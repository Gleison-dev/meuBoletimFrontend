import Label from "@/components/Label/label";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";

export default function EnrollStudent({
  students,
  classes,
  fetchStudents,
  fetchClasses,
}) {
  const { token } = useContext(AuthContext);
  const [studentId, setStudentId] = useState("");
  const [classId, setClassId] = useState("");

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, [fetchStudents, fetchClasses]);

  const studentOption = students.map((aluno) => ({
    value: aluno.id,
    label: aluno.name,
  }));

  const classOption = classes.map((classe) => ({
    value: classe.id,
    label: classe.name,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        `/createStudent?userId=${studentId}&classId=${classId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Erro ao vincular o estudante há uma turma.";
    }
  };

  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Matricular estudante na turma</strong>
          </h1>
          <p>Vincule um estudante há uma turma.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <Label name="Nome do Estudante" /> <br />
            <Select
              className="focus:bg-blue-800"
              options={studentOption}
              onChange={(selected) => setStudentId(selected.value)}
              placeholder="Selecione um aluno"
            />
          </div>
          <div className="mt-4">
            <Label name="Nome da turma" />
            <Select
              options={classOption}
              onChange={(selected) => setClassId(selected.value)}
              placeholder="Selecione uma turma"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-80 h-12 text-xl rounded-md text-branco bg-azul hover:bg-blue-800"
            >
              Vincular
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
