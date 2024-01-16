"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

const FormBirthDate = ({ heading, setBirthdate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    
      <div className="flex flex-col ">
        <h2 className="text-primaryText text-sm font-medium lg:text-xl mb-2">
          {heading}
        </h2>
        <div className="flex flex-row items-center border-2 border-black rounded-xl">
          <FaRegCalendarAlt className="text-primaryText w-24" size={20}/>
          <DatePicker selected={startDate} dateFormat="MMMM d, yyyy" onChange={(date) => {
            setStartDate(date);
            setBirthdate(format(date, "yyyy-MM-dd"));
          }} className="py-2  w-[70vh]"/>
        </div>
      </div> 
    
  );
};
export default FormBirthDate;
