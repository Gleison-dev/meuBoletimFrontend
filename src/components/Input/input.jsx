export default function Input({ type, placeholder, value, onChange }) {
  return (
    <>
      <input
        className="w-60 h-10 p-2 outline-none bg-branco border-2 border-azul rounded-lg focus:border-blue-800"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
