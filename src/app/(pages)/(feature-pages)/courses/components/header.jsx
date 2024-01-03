import React from 'react';
import Image from "next/image";
import {courseHeaderBanner} from "@/app/lib/utils/images";

function CourseHeader() {
    return (
        <div className="h-[25vh] w-full bg-black relative">
            <Image className="w-full h-full object-cover absolute" src={courseHeaderBanner} alt="Course Header Banner" width={1000} height={100} />
            <div className="w-full h-full flex flex-col justify-center px-16 text-white absolute">
                <h1 className="font-semibold text-[64px]">Selamat Datang!!</h1>
                <p className="font-medium text-lg">Yuk bangun karir digitalmu disini</p>
            </div>
        </div>
    );
}

export default CourseHeader;