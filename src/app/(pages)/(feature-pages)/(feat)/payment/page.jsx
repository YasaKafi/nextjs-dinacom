"use client";
import React, { useState, useEffect } from "react";
import { BsBank } from "react-icons/bs";
import { PiWallet } from "react-icons/pi";
import { MdPayments } from "react-icons/md";

import { Tab } from "@headlessui/react";
import InputNoCard from "./components/input-no-card";
import CustomDatePicker from "./components/date-picker";
import InputCommon from "./components/input-cvc-card";
import UploadFile from "./components/upload-file";

// Define payment options
const paymentOptions = [
  { id: 1, icon: <BsBank size={20} />, title: "Bank" },
  { id: 2, icon: <PiWallet size={25} />, title: "E-Wallet" },
  { id: 3, icon: <MdPayments size={25} />, title: "Paylater" },
];

// PaymentPage component
// ... (imports lainnya)

export default function PaymentPage() {
    const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);
  
    const handleOptionClick = (optionId) => {
      setSelectedOption(optionId === selectedOption ? optionId : optionId);
    };
  
    // Inisialisasi state pada saat render pertama
    useEffect(() => {
      setSelectedOption(paymentOptions[0].id);
    }, []);
  
    return (
      <div className="h-screen w-full  px-[20%]  flex flex-col pt-24 pb-36">
        <h2 className="text-3xl font-semibold">Metode Pembayaran</h2>
  
        {/* Tab bar */}
        <Tab.Group>
          <Tab.List className="w-full gap-12 flex mt-6">
            {paymentOptions.map((option) => (
              <Tab
                key={option.id}
                className={({ selected }) =>
                  `w-full flex flex-col gap-2 rounded-lg p-6 text-sm font-medium  
                      bg-white text-blue-700 shadow`
                   
                }
                onClick={() => handleOptionClick(option.id)}
              >
                {option.icon}
                {option.title}
                
              </Tab>
            ))}
          </Tab.List>
  
          <Tab.Panels className="mt-2">
            {paymentOptions.map((option) => (
              <Tab.Panel
                key={option.id}
                className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              >
                {selectedOption === 1 && (
                  <>
                    <InputNoCard
                      title="Nomor Kartu"
                      placeholder="1234 1234 1234 1234"
                    />
                    <div className="w-full mt-8 flex flex-row gap-6 ">
                      <CustomDatePicker />
                      <InputCommon title="CVC" placeholder="CVC"/>
                    </div>
                  </>
                )}
                {selectedOption === 2 && (
                  <>
                    <InputNoCard
                      title="Nomor E-Wallet"
                      placeholder="1234 1234 1234 1234"
                    />
                    <div className="w-full mt-8 flex flex-row gap-6 ">
                    
                      <InputCommon title="Nama E-Wallet" placeholder="cth : Dana" />
                      <InputCommon title="Atas Nama" placeholder="GusKCrutt" />
                    </div>
                  </>
                )}
                
                {selectedOption === 3 && (
                  <>
                    
                    <div className="w-full mt-8 flex flex-row gap-6 ">
                   
                      <InputCommon title="Nama Lengkap" placeholder="Gus Ngrucutt" />
                      <InputCommon title="NIK" placeholder="12345678901234" />
                    </div>
                    <UploadFile />
                  </>
                )}
  
                <button className="w-full mt-16 bg-primary py-4 rounded-2xl text-white font-medium text-sm lg:text-lg">
                  Bayar
                </button>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  }
  
