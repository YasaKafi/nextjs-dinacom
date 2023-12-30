import React from "react";
import { registerIlustration, smartHomeLogo } from "@/app/lib/utils/images";
import Image from "next/image";
import Form from "@/app/components/form";

export default function RegisterPage() {
  return (
    <main>
      <div className="w-full h-screen flex flex-row ">
        <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center bg-gradient-to-b from-sky-400 to-blue-900 ">
          <Image src={registerIlustration} alt="" className="px-5" />
        </div>
        <div className="w-full h-screen  flex flex-col px-8 sm:px-24 lg:px-36 py-8">
          <div className="flex-row h-auto items-center justify-end flex">
            <h2 className="font-montserrat  text-blue-400 font-semibold pr-4 ">
              Smart AI
            </h2>
            <Image src={smartHomeLogo} alt="" />
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}
