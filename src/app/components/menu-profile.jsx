"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import { avatarUser } from "@/app/lib/utils/images";
import logout from "../lib/services/endpoint/auth/logout";
import { useRouter } from 'next/navigation';



export default  function MenuProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNjljMC0xMDMtMjgtMTEzLTI0NC5uZ3Jvay1mcmVlLmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwNTU3MTE2MCwiZXhwIjoxNzA1NTc0NzYwLCJuYmYiOjE3MDU1NzExNjAsImp0aSI6IjZTcnBFTEJTTmFZV3hONk0iLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.wdmEt0FKlYkR-ISs4LCaL0oF4szaXOgCCmTmZWRd5-w");
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
          <Image
            className="w-[60px] h-[60px]"
            src={avatarUser}
            width={100}
            height={100}
          />
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
