

function Form({label, value, onChange}) {
    return (
        <div className="flex flex-col w-full items-start">
            <h2 className="text-[#252525] text-sm mb-2">{label}</h2>
            <input
                className="w-full border-b border-black focus:outline-none"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Form;