import Input from "../../components/Input/input";
import "./styles.css";

export default function Login() {
  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="pl-20 w-96 rounded-xl main-login flex flex-col justify-center bg-azul-claro">
          <div>
            <h1 className="text-xl">
              <strong>LOGIN</strong>
            </h1>
            <p>Faça seu login abaixo.</p>
          </div>
          <form className="flex flex-col gap-3 mt-5">
            <div>
              <label>
                <strong>E-mail:</strong>
              </label>{" "}
              <br />
              <Input type="email" placeholder="Insira o seu e-mail" />
            </div>
            <div>
              <label>
                <strong>Senha:</strong>
              </label>{" "}
              <br />
              <Input type="password" placeholder="Digite sua senha" />
            </div>
          </form>
          <div className="mt-5">
            <button className="w-60 h-14 rounded-4xl cursor-pointer text-branco bg-azul hover:bg-blue-600">
              <strong>ACESSAR</strong>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
