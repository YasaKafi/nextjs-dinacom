"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import {
  coursesWork,
  decorationBottom,
  decorationBox,
  emptyDataIlustration,
} from "@/app/lib/utils/images";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { FaCheck } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    "Pelatihan yang sedang berlangsung": [
      {
        id: 1,
        title: "Menavigasi Tren Media Sosial: Tetap Relevan di Era Digital",
        imageUrl: coursesWork,
        presentase: 10,
      },
      {
        id: 2,
        title: "Soft Skill - Memulai Karir menggunakan Design Thinking",
        imageUrl: coursesWork,
        presentase: 30,
      },
      {
        id: 3,
        title: "Soft Skill - Kerja Sama Tim dan Manajemen Harapan",
        imageUrl: coursesWork,
        presentase: 80,
      },
      {
        id: 4,
        title: "Prinsip Desain Visual: Menciptakan Grafik yang Menarik",
        imageUrl: coursesWork,
        presentase: 50,
      },
    ],
    "Pelatihan yang sudah selesai": [
      {
        id: 1,
        title: "Menavigasi Tren Media Sosial: Tetap Relevan di Era Digital",
        imageUrl: coursesWork,
        presentase: 100,
      },
      {
        id: 2,
        title: "Soft Skill - Memulai Karir menggunakan Design Thinking",
        imageUrl: coursesWork,
        presentase: 100,
      },
    ],
  });

  return (
    <div className="w-full px-6 py-6 lg:px-12 lg:py-12 h-full ">
      <Tab.Group>
        <Tab.List className="lg:w-[70%] w-full flex flex-col lg:flex-row rounded-xl  p-1 ">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-2xl py-2.5 text-sm font-medium",
                  "ring-white/60  focus:outline-none focus:ring-2",
                  selected
                    ? "bg-primary bg-opacity-25 text-textPrimary"
                    : "text-blue hover:bg-gray-200 hover:text-black",
                  index !== Object.keys(categories).length - 1 && "mr-12"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="pt-8 w-full h-[95%]">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl  p-3 w-full h-full",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts.length === 0 && (
                <div className="flex flex-col w-full items-center justify-center h-full ">
                  <Image src={emptyDataIlustration} alt="" />
                  <h2 className="text-xl font-medium text-gray-500 w-1/2 text-center">
                    Tidak ada pelatihan saat ini, Ayo temukan peluang baru dan
                    tingkatkan skill anda sekarang
                    <span className="text-primary"> disini</span>
                  </h2>
                </div>
              )}
              {posts.length > 0 && (
                <ul className="h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-3 gap-2 overflow-auto ">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="w-full h-full relative flex flex-row rounded-xl p-5 bg-white border-2 border-gray-50 shadow-sm  mb-5"
                    >
                      <div className="absolute top-0 left-0 ">
                        <Image src={decorationBox} />
                      </div>
                      <div className="absolute bottom-0 right-0 ">
                        <Image src={decorationBottom} />
                      </div>

                      <div className="flex flex-col w-[70%] justify-between ">
                        <div className="pr-6">
                          <h2 className="font-semibold text-xs md:text-base">
                            {post.title}
                          </h2>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                          <div className="w-8 h-8 sm:w-14 sm:h-14 sm:mb-4 ">
                            <CircularProgressbarWithChildren
                              value={post.presentase}
                              strokeWidth={10}
                              styles={buildStyles({
                                pathColor: `${
                                  post.presentase === 100
                                    ? "#23BB86"
                                    : "rgba(40, 178, 255, 1)"
                                } `,
                                trailColor: "#d6d6d6",
                                backgroundColor: "#3e98c7",
                              })}
                            >
                              <h2 className="text-sm">
                                {post.presentase === 100 ? (
                                  <FaCheck size={20} color="green" />
                                ) : (
                                  <h2 className="text-[10px] lg:text-sm">
                                    {post.presentase + "%"}
                                  </h2>
                                )}
                              </h2>
                            </CircularProgressbarWithChildren>
                          </div>
                          <h2
                            className={`${
                              post.presentase === 100
                                ? "pb-3 font-medium text-green-500"
                                : "hidden"
                            }`}
                          >
                            Lulus
                          </h2>
                        </div>
                      </div>
                      <div className="w-[30%] mb-4 flex flex-row justify-start items-center">
                        <Image
                          src={post.imageUrl}
                          alt=""
                          className="rounded-xl w-full h-full object-cover "
                        />
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
