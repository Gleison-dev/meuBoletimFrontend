import { NavLink } from "react-router-dom";
import Input from "../../components/Input/input";
import "./styles.css";
import { useState } from "react";

export default function LoginStudent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
    } catch (error) {
      return console.error("Não foi possível enviar:", error);
    }
  };

  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="pl-20 w-96 rounded-xl main-login flex flex-col justify-center bg-azul-claro">
          <div>
            <h1 className="text-xl">
              <strong>LOGIN</strong>
            </h1>
            <p>Faça seu login de aluno(a) abaixo.</p>
          </div>
          <form className="flex flex-col gap-3 mt-5">
            <div>
              <label>
                <strong>E-mail:</strong>
              </label>{" "}
              <br />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira o seu e-mail"
              />
            </div>
            <div>
              <label>
                <strong>Senha:</strong>
              </label>{" "}
              <br />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
          </form>
          <div className="mt-5">
            <button className="w-60 h-14 rounded-4xl cursor-pointer text-branco bg-azul hover:bg-blue-600">
              <strong>ACESSAR</strong>
            </button>
          </div>
          <hr className="w-60 mt-5 mb-5 border-azul" />
          <div>
            <p>
              É um professor(a)?{" "}
              <NavLink to="/loginTeacher">
                <span className="text-azul underline">Clique aqui.</span>
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
