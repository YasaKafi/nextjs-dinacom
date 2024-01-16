
import { popUpIlustration } from "@/app/lib/utils/images";
import Image from "next/image";
import ButtonPopUp from "./button-pop-up/button";

export default function PopUpAfterLogin() {
  return (
    <>
      <div className="h-screen flex justify-center items-center  w-full">
        <div className="w-[35%] h-80 bg-white shadow-md items-center rounded-2xl flex flex-col gap-2">
          <Image
            src={popUpIlustration}
            width={150}
            height={150}
            alt="pop-up-after-login"
            className="object-cover rounded-2xl"
          />
          <h2 className="font-semibold text-xl ">
            Profil kamu belum lengkap nih
          </h2>
          <p className="text-center ">
            Yuk lengkapi profil kamu agar orang muda mengenalmu
          </p>
          <ButtonPopUp />
        </div>
      </div>
    </>
  );
}
