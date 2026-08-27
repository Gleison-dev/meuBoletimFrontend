import { DialogDemo } from "../ui/dialogDemo";

export default function CardStudent({ id, name }) {
  return (
    <>
      <section className="w-30 p-4 gap-2 shadow flex flex-col justify-center items-center border rounded-xl">
        <div>
          <h1>
            <strong>{name}</strong>
          </h1>
        </div>
        <hr className="w-20 border border-azul" />
        <div>
          <DialogDemo studentId={id} />
        </div>
      </section>
    </>
  );
}
