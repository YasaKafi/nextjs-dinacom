"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { userProfile } from "@/app/lib/utils/images";
import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import logout from "@/app/lib/services/endpoint/auth/logout";
import { useRouter } from 'next/navigation';


export default function MenuProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vOGExMy0zNi02NS0yMTQtMjI2Lm5ncm9rLWZyZWUuYXBwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzA1NjE2NzcyLCJleHAiOjE3MDU2MjAzNzIsIm5iZiI6MTcwNTYxNjc3MiwianRpIjoiaUlLcHlmRXd2WUZiZlZaSyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.BqEYFUq1PkHb6Bd3flOhtH4Y21VmHyikpfbY7-T4ZIU");
            setIsMenuOpen(false);
            router.push("/login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
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
                <div className="w-full  flex">
                  <a href="/dashboard/profile">
                    <button className="flex flex-row items-start w-full">
                      <h4 className="font-normal  p-2">
                        {" "}
                        <GoPerson size={25} />
                      </h4>
                      <h2 className={`font-semibold text-base p-2 text-black`}>
                        Profil Saya
                      </h2>
                    </button>
                  </a>
                </div>
                <div className="w-full  flex">
                  
                    <button onClick={handleLogout} className="flex flex-row items-start w-full">
                      <h4 className="font-normal  p-2">
                        {" "}
                        <FiLogOut size={25} color="red" />
                      </h4>
                      <h2 className={`font-semibold text-base p-2 text-red-600`}>
                      Keluar
                      </h2>
                    </button>
                  
                </div>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
