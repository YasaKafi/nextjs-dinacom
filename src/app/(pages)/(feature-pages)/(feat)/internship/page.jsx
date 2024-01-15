
import Image from "next/image";
import {courseHeaderBanner, jobImage} from "@/app/lib/utils/images";
import React from "react";
import {iconCompany} from "@/app/lib/utils/svg";
import InternshipHeader from "@/app/(pages)/(feature-pages)/(feat)/internship/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/(feat)/courses/components/search-bar";
import internship from "@/app/lib/services/endpoint/api/internship";
import SearchBarInternship from "@/app/(pages)/(feature-pages)/(feat)/internship/components/search-bar";

export default async function Page() {
    const internshipData = await internship()

    return (
        <div className="w-screen bg-gray-100">
            <InternshipHeader/>
            <div className=" px-[90px]">
                <SearchBarInternship/>
                <div className="h-full grid grid-cols-3 gap-5 mt-10">

                    {internshipData.map((item, index) => (
                        <div key={index} className="rounded-xl  bg-white overflow-hidden mb-5 p-6 flex gap-5">

                            <div className="w-[70px] h-[70px] border border-colorBorder rounded-md overflow-hidden">
                                <Image className="w-full h-full object-cover" src={item.company_image} alt="Icon Company"
                                       width={50} height={50}/>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="font-semibold text-xs text-primary">{item.batch}</h2>
                                <h1 className="font-semibold text-base text-textPrimary mb-10">{item.position}</h1>
                                <h2 className="font-semibold text-sm text-textPrimary">{item.company_name}</h2>
                                <h1 className="text-xs text-textPrimary">Digital Marketing</h1>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="h-10"></div>
            </div>
        </div>
    );
}

