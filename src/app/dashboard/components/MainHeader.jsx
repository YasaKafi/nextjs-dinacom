"use client"
import React from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { avatarUser } from "@/app/lib/utils/images";
import { useSidebar } from "./SidebarContext";
export default function MainHeader() {
  const [isSideBarOpen, toggleSidebar] = useSidebar();
  

  const handleMenuClick = () => {
    toggleSidebar(); 
  };
  return (
    <div className="w-full h-[13%] bg-white flex flex-row justify-between items-center">
      <div className="w-full flex flex-row items-center ">
        <div className={`flex ml-8 cursor-pointer ${isSideBarOpen ? 'lg:hidden' : ''}`} onClick={handleMenuClick}>
          <FiMenu size={30} />
        </div>
        
        <h2 className="font-semibold font-montserrat text-lg lg:text-2xl pl-16 ">
          Progress Pelatihan
        </h2>
        <div className="w-1/4 h-px ml-4 border-2 border-black rounded-xl"></div>
       
      </div>

      <div className="flex-row hidden lg:flex gap-3 items-center mr-6">
        <Image src={avatarUser}  width={100} height={100}/>
        <h2 className="font-medium font-montserrat text-lg text-nowrap">
          Yasa Kafi Razzan
        </h2>
      </div>
    </div>
  );
}
