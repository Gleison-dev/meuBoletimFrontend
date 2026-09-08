import { NavLink } from "react-router-dom";
import { DialogDemo } from "../ui/dialogDemo";

export default function CardStudent({ id, name, disciplineId }) {
  return (
    <>
      <section className="w-30 p-4 gap-2 shadow flex flex-col justify-center items-center border rounded-xl">
        <div>
          <h1>
            <strong>{name}</strong>
          </h1>
        </div>
        <hr className="w-20 border border-azul" />
        <div className="flex flex-col justify-center items-centers gap-2">
          <NavLink to={`/notesOfStudent/${id}`}>
            <button className="p-1 w-25 h-8 rounded-lg border border-gray-300 cursor-pointer hover:bg-azul-claro">
              Ver nota
            </button>
          </NavLink>
          <DialogDemo studentId={id} disciplineId={disciplineId} />
        </div>
      </section>
    </>
  );
}
