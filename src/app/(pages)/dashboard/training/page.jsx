"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { coursesWork } from "@/app/lib/utils/images";

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
                    ? "bg-white text-blue-700"
                    : "text-blue hover:bg-white/[0.12] hover:text-white",
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
              <ul className="h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-3 gap-2 overflow-auto ">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="w-full h-full relative flex flex-col rounded-xl p-5 bg-white hover:bg-gray-100 mb-5"
                  >
                    <div className="flex flex-row h-[70%] ">
                      <Image
                        src={post.imageUrl}
                        alt=""
                        className="rounded-xl w-1/5 h-4/5 object-cover "
                      />
                      <div className="px-6 ">
                        <h2 className="font-semibold text-xs md:text-base">
                          {post.title}
                        </h2>
                        <div className="py-[5px]  mt-3 w-[30%] bg-green-500  flex items-center justify-center rounded-xl">
                          <p className="md:text-xs text-[10px] font-semibold text-white">
                            Pemula
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full  h-[30%] flex flex-row justify-start items-center">
                      <h2 className="md:text-base text-sm font-semibold">
                        {post.presentase}%
                      </h2>
                      <div className="w-full h-[50%] bg-gray-300  mx-6 rounded-xl ">
                        <div
                          className={`h-full rounded-xl ${
                            post.presentase === 100
                              ? "bg-green-500"
                              : "bg-blue-400"
                          }`}
                          style={{ width: `${post.presentase}%` }}
                        ></div>
                      </div>
                      <button
                        className={`${
                          post.presentase === 100
                            ? "bg-green-500"
                            : "bg-blue-400"
                        } py-2 px-3 text-[10px]  md:text-xs rounded-lg text-white`}
                      >
                        {post.presentase === 100 ? "Selesai" : "Berlangsung"}
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
