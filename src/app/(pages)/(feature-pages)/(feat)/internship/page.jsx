
import Image from "next/image";
import {courseHeaderBanner, jobImage} from "@/app/lib/utils/images";
import React from "react";
import {iconCompany} from "@/app/lib/utils/svg";
import InternshipHeader from "@/app/(pages)/(feature-pages)/(feat)/internship/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/(feat)/courses/components/search-bar";

function Page() {

    const data = [
        {
            id:1,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:2,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:3,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },{
            id:4,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:5,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:6,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:7,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        },
        {
            id:8,
            title:"Product Management Basic",
            description:"Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
            image:courseHeaderBanner,
        }
    ]

    return (
        <div className="w-screen bg-gray-100">
            <InternshipHeader/>
            <div className=" px-[90px]">
                <SearchBarCourses/>
                <div className="h-full grid grid-cols-3 gap-5 mt-10">

                    {data.map((item, index) => (
                        <div key={index} className="rounded-xl  bg-white overflow-hidden mb-5 p-6 flex gap-5">

                            <div className="w-[70px] h-[70px] border border-colorBorder rounded-md overflow-hidden">
                                <Image className="w-full h-full object-cover" src={jobImage} alt="Icon Company"
                                       width={50} height={50}/>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="font-semibold text-xs text-primary">Desember 2023</h2>
                                <h1 className="font-semibold text-base text-textPrimary mb-10">Digital Marketing Nuri</h1>
                                <h2 className="font-semibold text-sm text-textPrimary">PT Nuri Gaya Citra</h2>
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

export default Page;