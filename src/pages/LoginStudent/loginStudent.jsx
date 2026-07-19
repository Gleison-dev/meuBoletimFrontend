import { NavLink, replace, useNavigate } from "react-router-dom";
import Input from "../../components/Input/input";
import "./styles.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginStudent() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      navigate("/dashboardStudent", { replace: true });
    } else {
      console.log(success.message);
    }
  }

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
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
            <div className="mt-5">
              <button
                type="submit"
                className="w-60 h-14 rounded-4xl cursor-pointer text-branco bg-azul hover:bg-blue-600"
              >
                <strong>ACESSAR</strong>
              </button>
            </div>
          </form>
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
