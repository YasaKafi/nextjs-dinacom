import React from "react";
import Image from "next/image";
import { decorationBox } from "@/app/lib/utils/images";

const InternshipCard = ({ userCourse }) => {
  return (
    <div className="relative h-[24vh] flex flex-col rounded-xl p-3 bg-white shadow-md">
      <div className="absolute top-0 left-0">
        <Image src={decorationBox} />
      </div>
      <div className="w-full h-[17vh] flex flex-row">
        <div className="w-[10vh] h-1/2 mb-4 flex flex-row justify-start items-center mt-3">
          <Image
            src={userCourse.company_image}
            alt={userCourse.company_name}
            className="rounded-xl w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-[70%] flex flex-col px-4 gap-4 mt-3">
          <div className="flex flex-col">
            <h2 className="font-medium text-xs text-primary ml-2">
              December 2024
            </h2>
            <h2 className="font-semibold text-xs md:text-base mt-2">
              {userCourse.title}
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-base">{userCourse.company_name}</h2>
            <h2 className="font-normal text-base mt-1">{userCourse.category}</h2>
          </div>
        </div>

        <h2
          className={`text-xs h-8 font-medium text-white px-4 py-2 ${
            // userCourse.presentase === 100 ? "bg-green-500" : "bg-blue-400"
            "bg-green-500"
          } rounded-lg mt-3`}
        >
          {/*{userCourse.presentase === 100 ? "Selesai" : "Berlangsung"}*/}
          { "Selesai"}
        </h2>
      </div>
      <div className="w-full h-px border border-black border-opacity-20 mt-2"></div>
      <div className="w-full h-full flex flex-row gap-4 items-center mt-2">
        <h2 className="text-sm font-medium">{userCourse.presentase}%</h2>
        <div className="w-full h-1/5 bg-gray-300 rounded-xl">
          <div
            className={`h-full rounded-xl ${
              // userCourse.presentase === 100 ? "bg-green-500" : "bg-blue-400"
              "bg-green-500"
            }`}
            style={{ width: `${100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;