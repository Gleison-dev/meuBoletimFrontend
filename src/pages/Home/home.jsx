export default function Home() {
  return (
    <>
      <section className="px-10">
        <div className="mt-10">
          <p className="w-38 pl-3 rounded-full bg-azul-claro">
            <strong>Sistema de Notas</strong>
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">
            <strong>Gerencie Suas Notas</strong> <br />
            com Facilidade, conheça <br />o{" "}
            <span className="font-bold text-azul">MeuBoletim</span>
          </h1>
        </div>
        <div className="mt-8">
          <button className="w-85 h-20 text-xl rounded-2xl cursor-pointer bg-azul text-branco">
            SAIBA MAIS
          </button>
        </div>
      </section>
    </>
  );
}
