import React from "react";

import Image from "next/image";
import { courseHeaderBanner } from "@/app/lib/utils/images";
import course from "@/app/lib/services/endpoint/api/course";
import CourseHeader from "@/app/(pages)/(feature-pages)/(feat)/courses/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/(feat)/courses/components/search-bar";
import Link from "next/link";
import { iconPremium, internshipBanner, premiumIcons } from "@/app/lib/utils/svg";

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
                      <div
                          className={`absolute top-6 left-4 py-2 px-4 ${
                              item.difficulty === "beginner"
                                  ? "bg-green-600"
                                  : item.difficulty === "intermediate"
                                      ? "bg-blue-600"
                                      : item.difficulty === "expert"
                                          ? "bg-red-600"
                                          : "bg-red-600"
                          } rounded-lg z-10`}
                      >
                          <h3 className="font-medium text-sm text-white">
                              {item.difficulty.toLowerCase()}
                          </h3>
                      </div>

                      <Image
                          className="w-full h-[130px] object-cover"
                          src={item.image_course}
                          alt="Course Header Banner"
                          width={300}
                          height={300}
                      />

                      <div className="flex flex-col  justify-between gap-8 px-5 py-4 w-full">
                          <div>
                              <div className="flex flex-col gap-2">
                                  <h4 className=" px-3 py-2 rounded-xl text-sm border border-primary text-primary w-fit">
                                      {" "}
                                      {item.category}{" "}
                                  </h4>

                                  <h1 className="text-primary font-bold text-xl truncate hover:text-clip">
                                      {item.title}
                                  </h1>
                              </div>
                              <p className="text-textPrimary font-light h-[50px] text-xs  hover:text-clip truncate">
                                  {item.description}
                              </p>
                          </div>

                          <Link href={`/courses/detail/${item.id}`}>
                              <button className="bg-primary w-2/3 py-3 text-white rounded-xl">
                                  Daftar Sekarang
                              </button>
                          </Link>
                      </div>
                  </div>
              ))}
              <div

                  className="rounded-xl relative  bg-white overflow-hidden mb-5"
              >
                  <div
                      className={`absolute top-6 left-4 py-2 px-4  bg-green-500 rounded-lg z-10`}
                  >
                      <h3 className="font-medium text-sm text-white">
                          beginner
                      </h3>
                  </div>

                  <Image
                      className="w-full h-[130px] object-cover"
                      src="https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/633a3977634507f8866a1542_android%20developer%20tools.png"
                      alt="Course Header Banner"
                      width={300}
                      height={300}/>

                  <div className="flex flex-col  justify-between gap-8 px-5 py-4 w-full">
                      <div>
                          <div className="flex flex-col gap-2">
                              <h4 className=" px-3 py-2 rounded-xl text-sm border border-premium text-premium w-fit">
                                  {" "}
                                  {"Development"}{" "}
                              </h4>

                              <h1 className="text-premium font-bold text-xl truncate hover:text-clip">
                                  "Start Journey as Android Developer"
                              </h1>
                          </div>
                          <p className="text-textPrimary font-light h-[50px] text-xs  hover:text-clip truncate">
                              Getting started with Android development can be an exciting journey, opening doors to
                              creating innovative apps that millions of users worldwide can enjoy. Whether you're a
                              seasoned programmer looking for a new frontier or a complete beginner with a passion
                              for technology, Android development offers a rewarding path with plenty of learning
                              resources and a supportive community.


                          </p>
                      </div>

                      <Link href={`/courses/detail/4`}>
                          <button
                              className="bg-gradient-to-r from-premium via-yellow-200 to-yellow-300 w-2/3 py-3 text-white rounded-xl flex items-center font-semibold justify-center gap-2">
                              Premium
                              <Image src={premiumIcons}/>
                          </button>
                      </Link>
                  </div>
              </div>
          </div>
          {/*  Premium*/}

          <div className="h-10"></div>
      </div>
    </div>
  );
}

export default Page;
