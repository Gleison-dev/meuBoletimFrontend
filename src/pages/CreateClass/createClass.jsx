import Input from "@/components/Input/input";
import Label from "@/components/Label/label";

export default function CreateClass() {
  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Criar nova turma</strong>
          </h1>
          <p>Crie uma nova turma abaixo.</p>
        </div>
        <form className="flex flex-col gap-4 mt-5">
          <div>
            <Label name="Nome da turma" /> <br />
            <Input type="text" placeholder="Digite o nome da turma" />
          </div>
          <div>
            <button className="w-80 h-12 rounded-md text-xl text-branco bg-azul">Criar turma</button>
          </div>
        </form>
      </section>
    </>
  );
}
