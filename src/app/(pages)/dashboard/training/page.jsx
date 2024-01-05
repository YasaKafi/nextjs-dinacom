"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import {
  coursesWork,
  decorationBottom,
  decorationBox,
  emptyDataIlustrationTraining,
} from "@/app/lib/utils/images";
import TrainingCard from "./components/card-training";

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
                  <Image src={emptyDataIlustrationTraining} alt="" />
                  <h2 className="text-xl font-medium text-gray-500 w-1/2 text-center">
                    Tidak ada pelatihan saat ini, Ayo temukan peluang baru dan
                    tingkatkan skill anda sekarang
                    <span className="text-primary"> disini</span>
                  </h2>
                </div>
              )}
              {posts.length > 0 && (
                <ul className="h-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-6 gap-2 overflow-auto ">
                  {posts.map((post) => (
                    <TrainingCard
                    key={post.id}
                    post={post}
                    decorationBox={decorationBox}
                    decorationBottom={decorationBottom}
                  />
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
