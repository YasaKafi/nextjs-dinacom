import React from 'react';

import Image from "next/image";
import {courseHeaderBanner} from "@/app/lib/utils/images";
import course from "@/app/lib/services/endpoint/api/course";
import CourseHeader from "@/app/(pages)/(feature-pages)/(feat)/courses/components/header";
import SearchBarCourses from "@/app/(pages)/(feature-pages)/(feat)/courses/components/search-bar";

async function Page() {
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

    const fetchCourse = await course()

    console.log(fetchCourse)

    return (
        <div className="w-screen bg-gray-100 ">
            <CourseHeader/>
            <div className="w-full h-full px-[80px] mt-20 ">
                <SearchBarCourses/>
                <div className="h-full grid grid-cols-4 gap-5 mt-10">

                    {fetchCourse.map((item,index)=> (
                        <div key={index} className="rounded-xl h-[400px] bg-white overflow-hidden mb-5">

                            <Image className="w-full h-[130px] object-cover" src={item.image_course} alt="Course Header Banner"
                                   width={300} height={300}/>

                            <div className="flex flex-col h-[270px] justify-between gap-12 px-5 py-4">

                                <h1 className="text-primary font-bold text-lg">{item.title}</h1>
                                <p className="text-textPrimary font-light text-xs">{item.description}</p>

                                <button className="bg-primary w-2/3 py-3 text-white rounded-xl">
                                    Daftar Sekarang
                                </button>
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