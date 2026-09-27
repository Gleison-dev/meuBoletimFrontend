export default function AboutUs() {
  return (
    <>
      <section className="flex justify-center mt-10">
        <div className="lg:w-300 w-100 rounded-xl p-4 bg-azul-claro">
          <div className="p-2 rounded-xl bg-branco">
            <h1 className="text-3xl">
              <strong>Sobre nós!</strong>
            </h1>
            <p>Conheça os criadores e mais sobre este website!</p>
          </div>
          <div className="p-2 rounded-xl bg-branco mt-5">
            <h1 className="text-xl mb-2">
              <strong>Porque criamos o MeuBoletim?</strong>
            </h1>
            <p>
              O <span className="text-azul">MeuBoletim</span> foi criado com o
              intuito de ser uma plataforma simples, ágil e eficiente para
              lançar, ver, editar e deletar notas escolares. Percebemos que na
              nossa região não existe um sistema online que faz essa gestão onde
              alunos, educadores e gestores possam realizar essa gestão e
              acompanhamento.
            </p>
          </div>
          <div className="flex flex-col gap-3 p-2 rounded-xl bg-branco mt-5">
            <div>
              <h1 className="text-xl">
                <strong>Equipe desenvolvedora</strong>
              </h1>
              <p>Conheça os desenvolvedores deste projeto.</p>
            </div>
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-3">
              <div className="lg:w-80 p-2 rounded-xl flex flex-col justify-center items-center bg-azul-claro">
                <div className="w-20 h-20 mb-1 bg-azul rounded-full"></div>
                <p className="text-sm">
                  <strong>Gleison Ribeiro Gomes</strong>
                </p>
                <p>Desenvolvedor</p>
              </div>
              <div className="lg:w-80 p-2 rounded-xl flex flex-col justify-center items-center bg-azul-claro">
                <div className="w-20 h-20 mb-1 bg-azul rounded-full"></div>
                <p className="text-sm">
                  <strong>Eduardo de Almeida Bezerra</strong>
                </p>
                <p>Organizador</p>
              </div>
              <div className="lg:w-80 p-2 rounded-xl flex flex-col justify-center items-center bg-azul-claro">
                <div className="w-20 h-20 mb-1 bg-azul rounded-full"></div>
                <p className="text-sm">
                  <strong>Breno Italo de Souza Silva</strong>
                </p>
                <p>Desenvolvedor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
