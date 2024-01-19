import Image from "next/image";
import {
    iconAmex,
    iconDiscover,
    iconMasterCard,
    iconVisa,
  } from "@/app/lib/utils/svg";
export default function InputNoCard({title, placeholder}) {
  return (
    <>
      <div className="w-full mt-8 flex flex-col ">
        <h2 className="font-medium text-xl">{title}</h2>
        <div className="w-full items-center p-4 shadow-lg border rounded-lg flex flex-row justify-between">
          <input
            className="w-[60%] text-lg  rounded-xl border-gray-200 px-4  focus:outline-none"
            placeholder={placeholder}
          />
          <div className="flex flex-row gap-2">
            <Image
              alt="iconMasterCard"
              src={iconVisa}
              className="w-12 h-12"
            ></Image>
            <Image
              alt="iconMasterCard"
              src={iconMasterCard}
              className="w-12 h-12"
            ></Image>
            <Image
              alt="iconMasterCard"
              src={iconAmex}
              className="w-12 h-12"
            ></Image>
            <Image
              alt="iconMasterCard"
              src={iconDiscover}
              className="w-12 h-12"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
