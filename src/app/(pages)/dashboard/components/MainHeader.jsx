"use client";

import React from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { userProfile } from "@/app/lib/utils/images";
import { useSidebar } from "./SidebarContext";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import MenuProfile from "./menu-profile";
export default function MainHeader() {
  const [isSideBarOpen, toggleSidebar] = useSidebar();

  const handleMenuClick = () => {
    toggleSidebar();
  };

  const pathname = usePathname();
  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard/training":
        return "Progress Pelatihan";
      case "/dashboard/internship":
        return "Progress Magang";
      case "/dashboard/profile":
        return "Profil Pengguna";
      case "/dashboard/profile/edit":
        return "Edit Profil";
      default:
        return "";
    }
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
          {getPageTitle()}
        </h2>
        <div className="w-1/4 h-px ml-4 border-2 border-black rounded-xl"></div>
      </div>
      <MenuProfile />
    </div>
  );
}
