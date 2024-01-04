
export default function FormEdit({defaultValue, label}) {
    return  (
        <div className="flex flex-col w-full items-start mb-4">
              <h2 className="text-primaryText text-sm font-medium lg:text-xl mb-2">
                {label}
              </h2>
              <input
                className="w-full h-14 mt-1 text-base rounded-lg border px-4 border-black focus:outline-none"
                type="text"
                defaultValue={defaultValue}
              />
            </div>
    );
        
    
}