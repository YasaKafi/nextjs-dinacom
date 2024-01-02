"use client";
import React, { useState } from "react";
import Image from "next/image";
import { smartHomeLogo } from "@/app/lib/utils/images";
import { TfiControlBackward } from "react-icons/tfi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { SiGitbook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function MainSideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useSidebar();

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div
      className={`lg:w-[30%] h-full bg-white flex flex-col border-r-2 ${
        isSideBarOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-full h-[13%] flex flex-row px-8 justify-between items-center">
        <div className="flex-row h-auto items-center justify-start flex ">
          <h2 className="font-montserrat text-lg  text-blue-400 font-semibold pr-4 ">
            Smart Carrier
          </h2>
          <Image src={smartHomeLogo} alt="" />
        </div>

        <TfiControlBackward
          size={30}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      <div className="w-full flex flex-col px-8 ">
        <div className="w-full flex flex-col">
          <h2 className="text-sm font-medium">MENU UTAMA</h2>
          <ul className="w-full mt-4">
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-4">
              <SiGitbook className="mr-4" size={25} />
              <Link href="/dashboard/training" className="text-base font-normal">
                Pelatihan
              </Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-4">
              <PiSuitcaseSimple className="mr-4" size={25} />
              <Link href="/dashboard/about" className="text-base font-normal">
                Magang
              </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-4">
              <AiOutlineMail className="mr-4" size={25} />
              <Link href="/contact-us" className="text-base font-normal">
                Inbox
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col mt-8">
          <h2 className="text-sm font-medium">MENU LAINNYA</h2>
          <ul className="w-full mt-4">
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-4">
              <FaRegUser className="mr-4" size={25} />
              <Link href="/" className="text-base font-normal">
                Profil Pengguna
              </Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-4">
              <IoSettingsOutline className="mr-4" size={25} />
              <Link href="/about-us" className="text-base font-normal">
                Pengaturan
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
