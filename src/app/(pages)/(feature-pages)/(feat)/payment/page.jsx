"use client";
import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { PiWallet } from "react-icons/pi";
import { MdPayments } from "react-icons/md";



import { Tab } from "@headlessui/react";
import InputNoCard from "./components/input-no-card";

// Define payment options
const paymentOptions = [
  { id: 1, icon: <BsBank size={20} />, title: "Bank" },
  { id: 2, icon: <PiWallet size={25} />, title: "E-Wallet" },
  { id: 3, icon: <MdPayments size={25} />, title: "Paylater" },
];

// PaymentPage component
export default function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0]);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <div className="h-screen w-full  px-[20%] flex flex-col pt-24 pb-36">
      <h2 className="text-3xl font-semibold">Metode Pembayaran</h2>

      {/* Tab bar */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {paymentOptions.map((option) => (
            <Tab
              key={option.id}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none focus:ring-2 ${
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }`
              }
              onClick={() => handleOptionClick(option.id)}
            >
              {option.title}
              {option.icon}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {paymentOptions.map((option) => (
            <Tab.Panel
              key={option.id}
              className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            >
              <InputNoCard/>
              
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
