import { DialogDemo } from "../ui/dialogDemo";

export default function CardStudent({ name }) {
  return (
    <>
      <section>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <DialogDemo />
        </div>
      </section>
    </>
  );
}
