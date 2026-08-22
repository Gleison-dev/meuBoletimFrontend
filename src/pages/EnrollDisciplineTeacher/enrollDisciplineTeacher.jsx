import Label from "@/components/Label/label";
import { AuthContext } from "@/context/AuthContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";

export default function EnrollDisiciplineTeacher({
  teachers,
  disciplines,
  classes,
  fetchTeachers,
  fetchDisciplines,
  fetchClasses,
}) {
  const { token } = useContext(AuthContext);
  const [teacherId, setTeacherId] = useState("");
  const [disciplineId, setDisciplineId] = useState("");
  const [classId, setClassId] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeachers();
    fetchDisciplines();
    fetchClasses();
  }, [fetchTeachers, fetchTeachers, fetchClasses]);

  const teachersOption = teachers.map((teacher) => ({
    value: teacher.id,
    label: teacher.name,
  }));

  const disciplinesOption = disciplines.map((discipline) => ({
    value: discipline.id,
    label: discipline.name,
  }));

  const classesOption = classes.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post(
        `/createDisciplineTeacher?teacherId=${teacherId}&disciplineId=${disciplineId}&classId=${classId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setStatus(response.data.disciplineTeacher);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const message =
        error.response?.data?.message ||
        "Erro ao vincular Professor + Disciplina + Turma.";
      setStatus(message);
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <>
      <section className="p-4 rounded-md bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Disciplina + Professor + Turma</strong>
          </h1>
          <p>
            Vincule um professor + disciplina + turma pelo formulário abaixo.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          <div>
            <Label name="Escolha o(a) Professor(a)" />
            <Select
              options={teachersOption}
              onChange={(selected) => setTeacherId(selected.value)}
              placeholder="Selecione um professor(a)"
            />
          </div>
          <div>
            <Label name="Escolha a disciplina" />
            <Select
              options={disciplinesOption}
              onChange={(selected) => setDisciplineId(selected.value)}
              placeholder="Selecione uma disciplina)"
            />
          </div>
          <div>
            <Label name="Escolha a turma" />
            <Select
              options={classesOption}
              onChange={(selected) => setClassId(selected.value)}
              placeholder="Selecione uma turma"
            />
          </div>
          <div>
            <p className="text-azul">
              <strong>{status}</strong>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-80 h-12 rounded-md text-xl text-branco bg-azul hover:bg-blue-800"
            >
              Vincular
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
