"use client";
import React from "react";
import { bgHeroBuilding } from "@/app/lib/utils/images";
import { FaArrowTrendUp } from "react-icons/fa6";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="w-full h-[60vh] relative bg-yellow-50">
      <Image src={bgHeroBuilding} className="w-full h-full" alt="Hero Courses Enroll Active" width={1000} height={1000} />
      <div className="absolute top-32 left-20 w-1/2 text-white flex flex-col gap-6">
        <h1 className="font-semibold text-5xl ">Mastering React EXPERT</h1>
        <p className="font-normal">
            Explore the world of React, the popular JavaScript library for building user interfaces. This comprehensive course is designed for both beginners and experienced developers who want to deepen their understanding of React and its ecosystem. Throughout the program, you'll gain hands-on experience by working on real-world projects, honing your skills in creating interactive and dynamic web applications.
        </p>
      </div>
      <div className="absolute bottom-24 left-20 w-1/2  flex flex-row gap-6">
        <div className="flex flex-row justify-center text-[#23BB86] items-center gap-3">
          <FaArrowTrendUp size={22}  />
          <h1 className="font-normal text-base ">Expert</h1>
        </div>
        <h3 className="text-base text-white font-normal py-1 px-5 border border-white rounded-2xl">
          Development
        </h3>
      </div>
    </div>
  );
};

export default HeroComponent;
