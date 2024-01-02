import Image from "next/image";
import {landingHeroImage} from "@/app/lib/utils/images";
import {brainDecoration} from "@/app/lib/utils/icon";

function LandingHero() {
    return (
        <div className=" w-screen lg:h-screen bg-white py-[50px] px-[25px] lg:px-[50px] lg:py-[100px]">
            <div className="flex flex-col-reverse justify-end w-full h-full lg:flex-row">

                <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pe-20">
                    <div className="w-full flex justify-between relative ">
                        <h1 className="font-bold text-primary text-[25px] lg:text-[50px] ">Bentuk Karirmu,</h1>
                        <Image className="absolute top-0 right-0 hidden lg:block" src={brainDecoration} alt="Brain Decoration" width={100} height={100}/>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-primary  text-[25px] lg:text-[50px] lg:leading-0">Wujudkan Impianmu.</h1>

                        <p className="text-[#4F5665] text-xs lg:text-base my-4">SmartCarrier hadir untuk membantu masyarakat meraih
                            impiannya dan membantu untuk meningkatkan kualitas hidup agar dapat meraih impian mereka</p>

                            <button
                                className="bg-primary bg-opacity-100 text-white font-bold shadow-lg shadow-[#98D6F9] rounded-[10px] text-xs px-12 py-3 lg:text-base lg:px-16 lg:py-4">
                                Mulai Disini
                            </button>


                    </div>
                </div>

                <div className="w-full my-10 lg:my-0 lg:w-1/2">
                    <Image
                        className="h-full w-full lg:px-16 lg:py-20"
                        src={landingHeroImage}
                        alt="Landing Hero Image"
                        width={1500}
                        height={1200}
                        quality={100}
                    />
                </div>

            </div>
        </div>
    );
}

export default LandingHero;