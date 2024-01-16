"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";

const menuItems = [
  {
    title: "Customer Support",
    description: "Jika kamu memiliki masalah terkait program ini",
    whatsappLink:
      "https://wa.me/6285782031875?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20Website%20SmartCarrier",
  },
  {
    title: "Profesional Mentoring",
    description:
      "Jika kamu ingin berkonsultasi terkait dunia kerja, pelatihan, dan magang",
    whatsappLink:
      "https://wa.me/6285782031875?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20Website%20SmartCarrier",
  },
];

export default function MenuCS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <Menu.Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`inline-flex w-full ${
            isMenuOpen === false ? "flex" : "hidden"
          } justify-center rounded-full bg-white px-4 py-4 text-sm font-medium text-primary hover:bg-black/10 border-2 border-primary border-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
        >
          <BsChatText size={30} />
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
        <Menu.Items className=" z-50 absolute bottom-20 right-0  w-[30vw]  border border-blue-100   rounded-xl  shadow-lg  ">
          <div>
            <Menu.Item>
              <div className=" font-montserrat p-4 w-full bg-white flex rounded-xl flex-col">
                <div className="flex-row flex mt-2">
                  <h2 className="font-semibold text-base">
                    Ada pertanyaan terkait program? kami siap membantu
                  </h2>
                  <div className="cursor-pointer mr-4">
                    <IoIosArrowDown
                      size={30}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                  </div>
                </div>
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full relative items-end flex flex-col gap-2 mt-4"
                  >
                    <div className="flex w-full flex-row justify-end items-center">
                      <div className=" h-20 w-3 bg-blue-200 rounded-lg"></div>
                      <div className="w-[95%] pb-4 pt-2 px-4   rounded-lg border-t-2 justify-between border-gray-200 bg-white  shadow-md flex flex-col">
                        <div className="flex flex-col">
                          <h2 className="font-semibold text-lg">
                            {item.title}
                          </h2>
                          <h4 className="font-normal text-sm">
                            {item.description}
                          </h4>
                        </div>

                        <a href={item.whatsappLink}>
                          <button className="flex flex-row py-2 my-2 rounded-lg items-center gap-2 justify-center bg-primary bg-opacity-40 w-[15vw]">
                            <div className="text-primary">
                              <FaWhatsapp size={25} />
                            </div>

                            <div className="font-medium text-sm text-primary">
                              Hubungi disini
                            </div>
                          </button>
                        </a>
                      </div>
                    </div>
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
