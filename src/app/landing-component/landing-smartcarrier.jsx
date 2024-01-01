import React from 'react';
import Image from "next/image";
import {iconEducation, iconGlobe} from "@/app/lib/utils/icon";
import {landingSmartcarrierImage} from "@/app/lib/utils/images";

function LandingSmartCarrier() {
    return (
        <div className="w-screen h-[80vh] bg-[#F6F6F6] relative">

            <Image
                src={iconGlobe}
                alt="Globe Icon"
                width={350}
                height={350}
                className="absolute -top-20 right-0"
            />

            <div className="flex w-full h-full lg:justify-between lg:px-[150px] lg:py-20">

                <div className="flex flex-col justify-center w-1/2 h-full gap-5">

                    <div className="flex">
                        <h1 className="font-bold text-primary lg:text-[50px]">Kenapa Harus SmartCarrier?</h1>
                        <Image
                            src={iconEducation}
                            alt="Education Icon"
                            width={250}
                            height={250}
                        />
                    </div>

                    <p className="text-[#4F5665] text-base">
                        Dengan adanya SmartCarrier dapat meningkatkan ekonomi di Indonesia dengan cara mengurangi angka pengangguran dan meningkatkan kualitas masyarakat Indonesia. Dengan adanya materi pelatihan yang berkualitas, kesempatan magang di perusahaan ternama dapat meningkatkan pengalaman masyarakat Indonesia untuk merasakan dunia kerja sesungguhnya
                    </p>

                </div>

                <div className="w-1/3 h-full flex items-center">
                    <Image
                        src={landingSmartcarrierImage}
                        alt="Landing Smartcarrier Image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingSmartCarrier;