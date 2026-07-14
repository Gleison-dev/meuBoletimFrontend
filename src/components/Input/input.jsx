export default function Input({ type, placeholder }) {
  return (
    <>
      <input className="w-60 h-10 p-2 rounded-xl outline-none border-2 border-azul" type={type} placeholder={placeholder} />
    </>
  );
}
