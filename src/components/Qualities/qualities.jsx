export default function Qualities({img, alt, title, text}) {
  return (
    <>
      <section>
        <div>
          <img src={img} alt={alt} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
    </>
  );
}
