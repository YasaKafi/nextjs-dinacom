"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { userProfile } from "@/app/lib/utils/images";
import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import Image from "next/image";

const menuItems = [
  {
    title: "Profil Saya",
    icon: <GoPerson size={25} />,
    textColor: "text-black",
    urlPath : "/dashboard/profile"
  },
  {
    title: "Keluar",
    icon: <FiLogOut size={25} color="red" />,
    textColor: "text-red-600",
    urlPath : "/dashboard/training"
  },
];

export default function MenuProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={` w-full flex `}
        >
          <div className="flex-row hidden lg:flex gap-3 items-center  bg-primary bg-opacity-25 rounded-xl py-2">
            <div className="w-10 h-10 relative rounded-lg  overflow-hidden ml-3">
              <Image
                src={userProfile}
                alt="User Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex flex-col items-start">
              <h2 className="font-medium font-montserrat text-xs lg:text-base text-nowrap">
                Yasa Kafi Razzan
              </h2>
              <h3 className="text-blue-600 text-sm">Free</h3>
            </div>

            <div className="mr-4">
              <IoIosArrowDown size={30} />
            </div>
          </div>
        </Menu.Button>
      </div>
      <Transition
        show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" z-50 absolute mt-6 right-0  w-[17vw]  border border-blue-100   rounded-xl  shadow-lg  ">
          <div>
            <Menu.Item>
              <div className=" font-montserrat flex-col  p-4 w-full bg-white flex rounded-xl ">
                {menuItems.map((item, index) => (
                  <div key={index} className="w-full  flex">
                    <a
                      href=
                        {item.urlPath}
                    >
                      <button className="flex flex-row items-start w-full">
                        <h4 className="font-normal  p-2">{item.icon}</h4>
                        <h2
                          className={`font-semibold text-base p-2 ${item.textColor}`}
                        >
                          {item.title}
                        </h2>
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
