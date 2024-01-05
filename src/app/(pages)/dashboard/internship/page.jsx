"use client";
import React from "react";
import Image from "next/image";
import {
  coursesWork,
  emptyDataIlustrationInternship,
} from "@/app/lib/utils/images";
import InternshipCard from "./components/card-internship";

export default function InternshipPage() {
  const posts = [
    {
      id: 1,
      title: "Digital Marketing Nuri",
      company: "PT Nuri Gaya Citra",
      department: "Digital Marketing",
      imageUrl: coursesWork,
      presentase: 50,
    },
    {
      id: 2,
      title: "Digital Marketing Gojek",
      company: "PT Gojek",
      department: "Digital Marketing",
      imageUrl: coursesWork,
      presentase: 100,
    },
  ];

  return (
    <main className="w-full h-full">
      {posts.length === 0 && (
        <div className="flex flex-col w-full items-center justify-center h-full ">
          <Image src={emptyDataIlustrationInternship} alt="" />
          <h2 className="text-xl font-medium text-gray-500 w-1/2 text-center">
            Kamu belum melakukan magang di perusahaan manapun ya? Yuk ikuti
            magang agar mendapat banyak pengalaman
            <span className="text-primary"> disini</span>
          </h2>
        </div>
      )}
      {posts.length > 0 && (
        <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-16 gap-2 overflow-auto px-6 lg:px-8 pt-12 lg:pt-16">
          {posts.map((post) => (
            <InternshipCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
