import React from 'react';
import Image from "next/image";
import {iconEducation, iconGlobe} from "@/app/lib/utils/svg";
import {landingSmartcarrierImage} from "@/app/lib/utils/images";

function LandingSmartCarrier() {
    return (
        <div className="w-screen lg:h-[80vh] bg-[#F6F6F6] relative">

            <Image
                src={iconGlobe}
                alt="Globe Icon"
                width={350}
                height={350}
                className="w-[200px] h-[200px] top-0 lg:w-[350px] lg:h-[350px] absolute lg:-top-20 right-0"
            />

            <div className="flex flex-col-reverse w-full h-full px-[25px] py-[35px] lg:flex-row  lg:justify-between lg:px-[150px] lg:py-20">

                <div className="flex flex-col justify-center w-full lg:w-1/2 h-full gap-5">

                    <div className="flex items-center mt-5 lg:mt-0">
                        <h1 className="font-bold text-primary text-[30px] lg:text-[50px] ">Kenapa Harus SmartCarrier?</h1>
                        <Image
                            className="w-[100px] h-[100px]  lg:w-[200px] lg:h-[200px]"
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

                <div className="w-full lg:w-1/3 h-full flex items-center">
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