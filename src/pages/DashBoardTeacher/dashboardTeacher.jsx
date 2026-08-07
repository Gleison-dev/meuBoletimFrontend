import icon_user from "../../assets/icon_user.svg";
import icon_class from "../../assets/icon_class.svg";
import icon_email from "../../assets/icon_email.svg";
import { TableActionsTeacher } from "@/components/ui/tableActionTeacher";

export default function DashboardTeacher() {
  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="w-96 p-6 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>Professor!</strong>
            </h1>
          </div>
          <div className="p-4 mt-5 rounded-xl bg-branco">
            <div>
              <h1 className="text-xl">
                <strong>Painel de Informações</strong>
              </h1>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <img src={icon_user} alt="Ícone de usuário" />
                <p>Nome</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={icon_class} alt="Ícone de usuário" />
                <p>Turmas</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={icon_email} alt="Ícone de usuário" />
                <p>Email</p>
              </div>
            </div>
          </div>
          <div className="p-4 mt-5 rounded-xl bg-branco">
            <div> 
              <h1 className="text-xl">
                <strong>Minhas Turmas</strong>
              </h1>
            </div>
            <div>
              <TableActionsTeacher />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
