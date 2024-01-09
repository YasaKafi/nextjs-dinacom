"use client";
import React from "react";


const CardSubab = ({ title, icon, titleButton, iconButton, colorButton }) => {
  return (
    <div className=" mt-10  w-full h-24  flex flex-row justify-between items-center">
      <div className="w-5 h-5 bg-white rounded-full border border-black border-opacity-40 " />
      <div className="w-[90%] h-full border border-gray-400 rounded-xl items-center justify-between flex flex-row px-6">
        <div className="flex flex-row gap-4 h-full items-center">
          <h2 className="font-semibold text-base">{title}</h2>
          <div className="text-[#23BB86]">{icon}</div>
        </div>
        <button className={`bg-${colorButton} w-24 flex items-center justify-center flex-row rounded-lg h-2/5  gap-1`}>
          <div className="text-white">{iconButton}</div>
          <h1 className="font-medium text-xs text-white">{titleButton}</h1>
        </button>
      </div>
    </div>
  );
};
export default CardSubab;
