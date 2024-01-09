import Image from "next/image";
import {courseHeaderBanner, jobImage} from "@/app/lib/utils/images";

function HeaderInternshipEnroll() {
    return (
        <div className="w-full h-[15vh]  relative overflow-hidden">
            <Image className="absolute" src={courseHeaderBanner} alt="Header Banner" width={1920} height={300} />
            <div className="absolute w-full h-full bg-gradient-to-r from-primary to-100% flex items-center px-[60px] py-[40px] gap-7">
                <Image src={jobImage} alt="Job Image" width={40} height={40}/>
                <div className="h-full w-[1px] bg-white"></div>
                <h1 className="font-semibold text-white text-[32px]">Digital Marketing</h1>
            </div>
        </div>
    );
}

export default HeaderInternshipEnroll;