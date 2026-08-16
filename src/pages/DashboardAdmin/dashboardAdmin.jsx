import CreateClass from "../CreateClass/createClass";
import CreateUser from "../CreateUser/createUser";

export default function DashboardAdmin() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col gap-10 w-96 p-4 rounded-xl bg-azul-claro">
          <CreateUser />
          <CreateClass />
        </div>
      </section>
    </>
  );
}
