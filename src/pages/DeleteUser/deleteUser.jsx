import Input from "@/components/Input/input";
import Label from "@/components/Label/label";
import Select from "react-select";

export default function DeleteUser() {
  return (
    <>
      <section className="p-4 rounded-lg bg-branco">
        <div>
          <h1 className="text-xl">
            <strong>Deletar usuário</strong>
          </h1>
          <p>Delete um usuário abaixo!</p>
        </div>
        <form className="flex flex-col gap-3 mt-3">
          <div>
            <Label name="Informe o usuário" />
            <Select placeholder="Selecione um usuário" />
          </div>
          <div>
            <Label name="Digite sua senha" />
            <Input type="password" placeholder="Insira a sua senha aqui." />
          </div>
          <div className="flex justify-center">
            <button className="w-80 h-12 rounded-md cursor-pointer text-xl text-branco bg-red-500 hover:bg-red-800">Excluir</button>
          </div>
        </form>
      </section>
    </>
  );
}
