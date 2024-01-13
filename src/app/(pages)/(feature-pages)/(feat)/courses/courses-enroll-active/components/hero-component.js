"use client";
import React from "react";
import { bgHeroBuilding } from "@/app/lib/utils/images";
import { FaArrowTrendUp } from "react-icons/fa6";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="w-full h-[60vh] relative bg-yellow-50">
      <Image src={bgHeroBuilding} className="w-full h-full" alt="Hero Courses Enroll Active" />
      <div className="absolute top-32 left-20 w-1/2 text-white flex flex-col gap-6">
        <h1 className="font-semibold text-5xl ">Business and Management</h1>
        <p className="font-normal">
          This (Hons) Business and Management BSc course from University of
          Essex Online will help you adapt to the ever-changing world of
          business. We'll examine a range of real-world business examples and
          use them to develop the broad skillset that a good manager should be
          able to draw from.
        </p>
      </div>
      <div className="absolute bottom-24 left-20 w-1/2  flex flex-row gap-6">
        <div className="flex flex-row justify-center text-[#23BB86] items-center gap-3">
          <FaArrowTrendUp size={22} />
          <h1 className="font-normal text-base ">Pemula</h1>
        </div>
        <h3 className="text-base text-white font-normal py-1 px-5 border border-white rounded-2xl">
          Business
        </h3>
      </div>
    </div>
  );
};

export default HeroComponent;
