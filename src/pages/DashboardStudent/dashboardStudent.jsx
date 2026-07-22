import { TableActions } from "@/components/ui/tableActions";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function DashboardStudent() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className="w-96 p-8 rounded-xl bg-azul-claro">
          <div>
            <h1 className="text-2xl">
              Olá, <strong>{user?.name}</strong>
            </h1>
          </div>
          <div className="flex justify-between items-center mt-5 gap-10">
            <div className="w-40 h-25 p-4 border-3 border-azul rounded-xl">
              <h1 className="text-2xl">
                <strong>Aprovado</strong>
              </h1>
            </div>
            <div className="w-40 h-25 flex flex-col justify-around items-center p-4 border-3 border-azul rounded-xl">
              <h1 className="text-2xl">
                <strong>Média</strong>
              </h1>
              <p className="text-2xl">9.7</p>
            </div>
          </div>
          <div className="p-4 mt-10 rounded-xl border-2 border-azul bg-branco">
            <div>
              <h1 className="text-xl mb-3">Minhas Disciplinas</h1>
            </div>
            <div>
              <TableActions />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
