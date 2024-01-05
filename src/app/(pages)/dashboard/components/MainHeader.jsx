"use client";

import React from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { userProfile } from "@/app/lib/utils/images";
import { useSidebar } from "./SidebarContext";
import { IoIosArrowDown } from "react-icons/io";
export default function MainHeader({getPageTitle}) {
  
  const [isSideBarOpen, toggleSidebar] = useSidebar();

  const handleMenuClick = () => {
    toggleSidebar();
  };
  return (
    <div className="w-full h-[13%] bg-white flex flex-row justify-between items-center border-b-2 pr-8">
      <div className="w-full flex flex-row items-center ">
        <div
          className={`flex ml-8 cursor-pointer ${
            isSideBarOpen ? "lg:hidden" : ""
          }`}
          onClick={handleMenuClick}
        >
          <FiMenu size={30} />
        </div>

        <h2 className="font-semibold font-montserrat text-lg lg:text-2xl pl-16 ">
          {getPageTitle}
        </h2>
        <div className="w-1/4 h-px ml-4 border-2 border-black rounded-xl"></div>
      </div>

      <div className="flex-row hidden lg:flex gap-3 items-center  bg-primary bg-opacity-25 rounded-xl py-2">
        <div className="w-10 h-10 relative rounded-lg  overflow-hidden ml-3">
          <Image
            src={userProfile}
            alt="User Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-medium font-montserrat text-xs lg:text-base text-nowrap">
            Yasa Kafi Razzan
          </h2>
          <h3 className="text-blue-600 text-sm">Free</h3>
        </div>

        <div className="mr-4">
          <IoIosArrowDown size={30} />
        </div>
      </div>
    </div>
  );
}
