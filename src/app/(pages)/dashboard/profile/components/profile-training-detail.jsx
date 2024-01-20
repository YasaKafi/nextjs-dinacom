"use client";
import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Tab } from "@headlessui/react";
import { PiCertificate } from "react-icons/pi";
import { FaRegShareSquare } from "react-icons/fa";

// Define payment options
const paymentOptions = [
  { id: 1, title: "Tentang Saya" },
  { id: 2, title: "Sertifikat" },
  { id: 3, title: "Pelatihan" },
  { id: 4, title: "Magang" },
];

const certificatesData = [
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    organization: "Dicoding Indonesia",
    publishDate: "Oct 2023",
    credentialID: "0LZ0QM9E0Z65",
  },{
    title: " Membuat Front-End Web untuk Pemula",
    organization: "Dicoding Indonesia",
    publishDate: "Oct 2023",
    credentialID: "0LZ0QM9E0Z65",
  },
];

export default function ProfileTrainingDetail() {
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? optionId : optionId);
  };

  // Inisialisasi state pada saat render pertama
  useEffect(() => {
    setSelectedOption(paymentOptions[0].id);
  }, []);

  return (
    <div className="h-screen w-full  px-[5%]  flex flex-col pb-36">
      {/* Tab bar */}
      <Tab.Group>
        <Tab.List className="w-full gap-12 flex mt-6">
          {paymentOptions.map((option) => (
            <Tab
              key={option.id}
              className={({ selected }) =>
                `w-full flex flex-col gap-2 rounded-lg p-6 text-sm font-medium  
                      bg-white text-black shadow`
              }
              onClick={() => handleOptionClick(option.id)}
            >
              {option.title}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-6">
          {paymentOptions.map((option) => (
            <Tab.Panel
              key={option.id}
              className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            >
              {selectedOption === 1 && (
                <>
                  <div
                    className="w-full flex flex-col gap-4 rounded-lg p-6 text-sm font-medium  
                      bg-white text-black shadow"
                  >
                    <h1 className="text-2xl font-semibold">Tentang Saya</h1>
                    <h3 className="text-xl font-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, accusantium illo, nam, molestias possimus ab maxime
                      exercitationem rerum corporis similique eius laboriosam?
                      Saepe sunt et suscipit dolores! In, iusto nisi!
                    </h3>
                  </div>
                </>
              )}
              {selectedOption === 2 && (
                <>
                  <div className="flex flex-col w-full">
                    <div className=" w-full flex flex-row  justify-between">
                      <h1 className="text-3xl font-medium">Sertifikat</h1>
                      <button className="border-2 border-primary py-2 px-8 flex flex-row gap-3 rounded-2xl text-primary font-medium text-sm lg:text-lg">
                        <h2>Tambah</h2>
                        <FiPlus size={25} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-8">
                {certificatesData.map((certificate, index) => (
                  <div key={index} className="w-full flex gap-2 flex-col shadow-xl px-6 rounded-xl py-6">
                    <div className="w-full gap-3 flex flex-row">
                      <PiCertificate size={25} />
                      <h1 className="text-lg font-normal">{certificate.title}</h1>
                    </div>
                    <div className="w-full  ml-9 gap-3 flex flex-row">
                      <h1 className="text-lg font-normal">{certificate.organization}</h1> •
                      <h1 className="text-lg font-normal">{certificate.publishDate}</h1>
                    </div>
                    <div className="w-full  ml-9 gap-3 flex flex-row">
                      <h1 className="text-lg font-normal">Credential ID : {certificate.credentialID}</h1> |
                      <div className="flex flex-row gap-3 rounded-lg justify-center items-center text-primary px-3 py-1 bg-gray-100">
                        <h1 className="text-base font-normal">Show Credential</h1>
                        <h3><FaRegShareSquare size={15} /></h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                  </div>
                </>
              )}

              {selectedOption === 3 && (
                <>
                  <h1 className="font-semibold text-2xl">Pelatihan</h1>
                </>
              )}
              {selectedOption === 4 && (
                <>
                  <h1 className="font-semibold text-2xl">Magang</h1>
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
