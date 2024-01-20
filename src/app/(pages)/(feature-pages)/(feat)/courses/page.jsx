import React from "react";

import Image from "next/image";
import { courseHeaderBanner } from "@/app/lib/utils/images";
import course from "@/app/lib/services/endpoint/api/course";
import CourseHeader from "@/app/(pages)/(feature-pages)/(feat)/courses/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/(feat)/courses/components/search-bar";
import Link from "next/link";

async function Page({ searchParams }) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  const fetchCourse = await course(search);

  console.log(fetchCourse);

  return (
    <div className="w-screen bg-gray-100 ">
      <CourseHeader />
      <div className="w-full h-full px-[80px] mt-20 ">
        <SearchBarCourses />
        <div className="h-full grid grid-cols-4 gap-5 mt-10">
          {fetchCourse.map((item, index) => (
            <div
              key={index}
              className="rounded-xl relative  bg-white overflow-hidden mb-5"
            >
              <div className={`absolute top-6 left-4 py-2 px-4 ${
                item.difficulty === "begginer"
                  ? "bg-green-600"
                  : item.difficulty === "intermediate"
                  ? "bg-blue-600"
                  : item.difficulty === "expert"
                  ? "bg-red-600"
                  : "" 
              } rounded-lg z-10`}>
                <h3 className="font-medium text-sm text-white">{item.difficulty}</h3>
              </div>

              <Image
                className="w-full h-[130px] object-cover"
                src={item.image_course}
                alt="Course Header Banner"
                width={300}
                height={300}
              />

              <div className="flex flex-col  justify-between gap-12 px-5 py-4">
                <h2 className="w-[40%] flex items-center justify-center py-2 rounded-xl border border-primary text-primary"> {item.category} </h2>

                
                <h1 className="text-primary font-bold text-lg">{item.title}</h1>
                <p className="text-textPrimary font-light text-xs">
                  {item.description}
                </p>

                <Link href={`/courses/detail/${item.id}`}>
                  <button className="bg-primary w-2/3 py-3 text-white rounded-xl">
                    Daftar Sekarang
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default Page;
