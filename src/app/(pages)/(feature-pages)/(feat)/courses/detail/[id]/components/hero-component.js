"use client";
import React from "react";
import { bgHeroBuilding } from "@/app/lib/utils/images";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from "next/image";
import register from "@/app/lib/services/endpoint/auth/register";
import addUserCourse from "@/app/lib/services/endpoint/user/add-user-course";

const HeroComponent = ({data}) => {

    const handleEnroll = async () => {
        try {
            const response = await addUserCourse({ userId: 2, courseId: data.id });
            console.log("Respons dari pendaftaran:", response);
            alert("Pendaftaran berhasil!")
        } catch (error) {
            console.error("Terjadi kesalahan saat pendaftaran:", error);
        }
    }

  return (
    <div className="w-full h-[60vh] relative bg-yellow-50">
      <Image src={bgHeroBuilding} className="w-full h-full" alt="Hero Courses Enroll" />
      <div className="absolute top-32 left-20 w-1/2 text-white flex flex-col gap-6">
        <h1 className="font-semibold text-5xl ">{data.title}</h1>
        <p className="font-normal">
            {data.description}
        </p>
      </div>
      <div className="absolute bottom-24 left-20 w-1/2 text-white flex flex-row gap-6">
        <div className="flex flex-row justify-center items-center gap-3">
          <FaArrowTrendUp size={22} />
          <h1 className="font-normal text-base ">Pemula</h1>
        </div>
        <h3 className="text-base font-normal py-1 px-5 border border-white rounded-2xl">
          Business
        </h3>
      </div>
      <div className="absolute top-32 right-20  h-[30%] w-[27%] bg-white text-textPrimary flex flex-col items-center rounded-xl gap-4">
        <h1 className="font-semibold h-2/5 text-[26px] py-3 border-b-2 w-[90%] text-center ">
          Free
        </h1>
        <button onClick={handleEnroll} className="bg-primary w-[90%] h-full mb-5 rounded-xl flex flex-row justify-center items-center gap-3">
          <h1 className="font-medium text-xl text-white">
            Ikuti pelatihan gratis
          </h1>
          <FaArrowDownLong color="white" size={25} />
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
