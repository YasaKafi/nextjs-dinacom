import React from 'react';
import SliderTestimony from "@/app/landing-component/landing-testimony/slider-testimony";
import Image from "next/image";
import {landingTestimonyDecoration} from "@/app/lib/utils/icon";

function LandingTestimony() {
    return (
        <div className="h-screen w-screen flex flex-col items-center p-[25px] lg:px-[70px] lg:py-[50px] relative">

            <Image
                className="absolute left-0"
                src={landingTestimonyDecoration}
                alt="Landing Testimony Decoration"
                width={700} height={700}
                />

            <h1 className="font-bold text-primary text-[25px] lg:text-[50px] mb-10">Testimoni Pengguna</h1>
            <p className="text-[#4F5665] text-base text-center lg:text-xl mb-10">Sebuah cerita dan pengalaman pengguna SmartCarrier</p>
            <div className="w-full">
                <SliderTestimony/>
            </div>
        </div>
    );
}

export default LandingTestimony;