export default function InputCommon({title, placeholder}) {
  return (
    <>
      <div className="w-1/2">
        <h2 className="font-medium text-xl">{title}</h2>
        <input
          className="w-full p-4 bg-white shadow-lg text-lg mt-1  border-gray-200 border rounded-lg focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
