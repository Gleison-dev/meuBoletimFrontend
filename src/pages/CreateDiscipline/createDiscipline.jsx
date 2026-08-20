import Input from "@/components/Input/input";
import Label from "@/components/Label/label";

export default function CreateDiscipline() {
  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl">
              <strong>Cadastrar Disciplina</strong>
            </h1>
            <p>Cadastre uma disciplina abaixo.</p>
          </div>
          <form className="flex flex-col gap-3">
            <div>
              <Label name="Nome da disciplina" /> <br />
              <Input type="text" placeholder="Digite o nome da disciplina" />
            </div>
            <div className="flex justify-center">
              <button className="w-80 h-12 rounded-md text-xl text-branco bg-azul hover:bg-blue-800">Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
