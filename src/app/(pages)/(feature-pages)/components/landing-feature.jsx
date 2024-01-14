import React from 'react';
import Image from "next/image";
import {landingFeatIllustration} from "@/app/lib/utils/images";
import {iconCheck, landingFeatImage, topDecoration} from "@/app/lib/utils/svg";

function LandingFeature() {
    const listFeature = [
        "Mendapatkan materi pelatihan tersertifikasi",
        "Magang di perusahaan ternama",
        "Kesempatan peluang kerja yang tinggi"
    ]

    return (
        <div className="h-screen lg:h-[80vh] w-screen relative">
            <Image
                className="h-full w-full object-cover absolute hidden lg:block"
                src={landingFeatIllustration}
                alt="Landing Feature Illustration"
                width={1000}
                height={1000}
                quality={100}
            />

            <Image
                src={topDecoration}
                alt="Top Decoration"
                width={150}
                height={150}
                className="absolute top-0 z-20 left-0 hidden lg:block"
            />

            <div className="absolute z-10 w-full h-full bg-primary bg-opacity-20">
                <div className="flex flex-col lg:flex-row w-full h-full  p-[30px] lg:p-[100px]">

                    <div className="w-full lg:w-1/2 lg:flex lg:justify-end p-10">
                        <Image
                            src={landingFeatImage}
                            alt="Landing Feature Image"
                            width={1000}
                            height={1000}
                            quality={100}
                        />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
                        <h1 className="font-semibold text-primary text-xl lg:text-[36px] lg:leading-10">Kami Menyediakan Banyak Fitur yang Dapat Anda Gunakan</h1>
                        <p className="text-textPrimary text-sm lg:text-base lg:leading-[30px]">Anda dapat menjelajahi fitur-fitur yang kami sediakan untuk membantu anda memulai karir dan mewujudkan impian</p>
                        <ul>
                            {listFeature.map((item, index) => (
                                <li key={index} className="flex items-center gap-5 mb-2">
                                    <Image
                                        className="h-8 w-8 lg:w-5 lg:h-5"
                                        src={iconCheck}
                                        alt="Icon Check"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="font-semibold text-textPrimary lg:text-sm lg:leading-[30px]">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default LandingFeature;