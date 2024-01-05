"use client";
import React from "react";
import Image from "next/image";
import { coursesWork, decorationBox } from "@/app/lib/utils/images";

export default function InternshipPage() {
  const [post] = React.useState({
    id: 1,
    title: "Digital Marketing Nuri",
    imageUrl: coursesWork,
    presentase: 50,
  });
  return (
    <main className="w-full h-full ">
      <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-16 gap-2 overflow-auto px-6 lg:px-8 pt-12 lg:pt-16">
        <div className=" relative h-[24vh] flex flex-col rounded-xl p-3 bg-white  shadow-sm ">
        <div className="absolute top-0 left-0 ">
                        <Image src={decorationBox} />
                      </div>
          <div className="w-full h-[17vh] flex flex-row ">
            <div className="w-[10vh] h-1/2 mb-4 flex flex-row justify-start items-center mt-3 ">
              <Image
                src={coursesWork}
                alt=""
                className="rounded-xl w-full h-full object-cover "
              />
            </div>
            <div className="w-[70%] flex flex-col px-4 gap-4 mt-3">
              <div className="flex flex-col">
                <h2 className="font-medium text-xs text-primary ml-2">
                  December 2024
                </h2>
                <h2 className="font-semibold text-xs md:text-base mt-2">
                  Digital Marketing Nuri
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-base">PT Nuri Gaya Citra</h2>
                <h2 className="font-normal text-base  mt-1">
                  Digital Marketing
                </h2>
              </div>
            </div>

            <h2 className={`text-xs h-8 font-medium text-white px-4 py-2 ${
                          post.presentase === 100
                            ? "bg-green-500"
                            : "bg-blue-400"
                        } rounded-lg mt-3`}>
            {post.presentase === 100 ? "Selesai" : "Berlangsung"}
            </h2>
          </div>
          <div className="w-full h-px border border-black border-opacity-20 mt-2"></div>
          <div className="w-full h-full flex flex-row gap-4 items-center mt-2">
            <h2 className=" text-sm font-medium">
              {post.presentase}%
            </h2>
            <div className="w-full h-1/5 bg-gray-300   rounded-xl ">
              <div
                className={`h-full rounded-xl ${
                  post.presentase === 100 ? "bg-green-500" : "bg-blue-400"
                }`}
                style={{ width: `${post.presentase}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="  flex flex-col rounded-xl p-5 bg-white border-2 border-gray-50 shadow-sm  mb-5"></div>
      </div>
    </main>
  );
}
