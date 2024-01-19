import React from "react";
import Image from "next/image";
import {
  coursesWork,
  emptyDataIlustrationInternship,
} from "@/app/lib/utils/images";
import InternshipCard from "./components/card-internship";
import userCourse from "@/app/lib/services/endpoint/user/user-course";
import userInternship from "@/app/lib/services/endpoint/user/user-internship";

export default async function InternshipPage() {
  const dataUserInternship = await userInternship(1)
  console.log("DATA USER INTERNSHIP")
  console.log(dataUserInternship)

  return (
    <main className="w-full h-full">
      {dataUserInternship.length === 0 && (
        <div className="flex flex-col w-full items-center justify-center h-full ">
          <Image src={emptyDataIlustrationInternship} alt="" />
          <h2 className="text-xl font-medium text-gray-500 w-1/2 text-center">
            Kamu belum melakukan magang di perusahaan manapun ya? Yuk ikuti
            magang agar mendapat banyak pengalaman
            <span className="text-primary"> disini</span>
          </h2>
        </div>
      )}
      {dataUserInternship.length > 0 && (
        <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-16 gap-2 overflow-auto px-6 lg:px-8 pt-12 lg:pt-16">
          {dataUserInternship.map((userCourse) => (
            <InternshipCard key={userCourse.id} userCourse={userCourse} />
          ))}
        </div>
      )}
    </main>
  );
}
