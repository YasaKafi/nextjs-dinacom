import React from 'react';
import {FaCircle} from "react-icons/fa";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

function InternshipDescription({data}) {
    const features = [
        "4 Alur belajar yang efisien",
        "Akses Seumur Hidup",
        "Mentoring",
        "Assesmen Akhir",
    ];

    return (
        <div className="flex flex-col w-2/5  ">
            <div className="w-full bg-white rounded-xl flex flex-col p-8 justify-start shadow-lg gap-7">

                <div className="w-[133px] py-1 bg-[#F8FBF9] border border-[#43936C] rounded-md flex items-center justify-center ">
                    <h1 className="text-[#43936C]">{data.category}</h1>
                </div>

                <h1 className="font-semibold text-[#404040] text-[24px]">Tentang Program</h1>

                <p className="text-[#404040] text-[16px]">
                    {data.description}
                </p>
            </div>
        </div>
    );
}

export default InternshipDescription;