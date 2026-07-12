export default function Qualities({ img, alt, title, text }) {
  return (
    <section className="flex rounded-2xl w-77 h-25 gap-5 mt-10 bg-branco">
      <div className="flex justify-center items-center w-25 h-25 rounded-2xl bg-azul">
        <img className="w-13" src={img} alt={alt} />
      </div>

      <div className="mt-2 flex-1 min-w-0 pr-8">
        <h1 className="text-azul text-xl font-bold">{title}</h1>
        <p className="text-sm font-semibold wrap-break-word">{text}</p>
      </div>
    </section>
  );
}
