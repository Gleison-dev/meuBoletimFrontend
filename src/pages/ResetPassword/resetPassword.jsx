import Input from "@/components/Input/input";

export default function ResetPassword() {
  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-6 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-3xl">Esqueceu a senha?</h1>
            <p>Sem problemas, a gente te ajuda!</p>
          </div>
          <div className="mt-4">
            <label>
              <strong>E-mail</strong>
            </label>{" "}
            <br />
            <Input type="text" placeholder="Insira o e-mail cadastrado" />
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="w-96 h-14 rounded-4xl text-xl cursor-pointer transition ease-in-out duration-300 text-white bg-azul hover:bg-blue-800">Verificar E-mail</button>
          </div>
        </div>
      </section>
    </>
  );
}
