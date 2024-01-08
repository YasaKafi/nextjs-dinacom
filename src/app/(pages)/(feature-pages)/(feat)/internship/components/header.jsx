import Image from "next/image";

import {internshipPersonImage} from "@/app/lib/utils/images";
import {iconCompany, internshipBanner} from "@/app/lib/utils/icon";

function InternshipHeader() {
    return (
        <div className="w-full h-[70vh] relative mb-10">
            <Image className="h-full w-full absolute object-cover" src={internshipBanner} alt="Internship Banner" width={1920} height={1080}/>
            <div className="h-full w-full absolute px-[80px] flex items-center">
                <div className="flex flex-col justify-center h-full w-full  gap-5">
                    <h1 className="font-bold text-white text-[64px]">Ayo magang di perusahan impianmu hanya disini</h1>
                    <button className="bg-[#D4F0FF] py-2 w-[170px] px-4 text-primary rounded-md"> JELAJAHI DISINI</button>
                </div>
                <div className="w-3/5 h-full relative">
                    <Image className="w-full h-full absolute object-cover" src={internshipPersonImage} alt="Internship Person Image" width={300} height={300}/>
                    <div className="w-full h-full absolute flex items-end justify-center pb-4">
                        <div className=" w-[300px] h-[85px] bg-white bg-opacity-80 rounded-md p-4 flex gap-3">
                            <Image src={iconCompany} alt="Icon Company" width={50} height={50}/>
                            <div className="flex flex-col text-[#595959]">
                                <h1 className="font-semibold text-[20px]">5k+</h1>
                                <h3 className="font-medium text-base ">Perusahaan Terverifikasi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternshipHeader;