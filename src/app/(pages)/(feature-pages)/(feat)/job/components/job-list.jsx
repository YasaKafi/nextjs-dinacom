import Image from "next/image";
import {iconArrowDown, iconFilter} from "@/app/lib/utils/svg";
import job from "@/app/lib/services/endpoint/api/job";
import Link from "next/link";

async function JobList({data}) {


    return (
        <div className="w-full h-full">
            <div className="flex w-full justify-between items-center mb-5">
                <h1 className="font-bold text-[32px] text-textPrimary">{data.length} Pekerjaan</h1>
                <div className="w-1/4 flex border border-colorBorder px-4 py-3 gap-3 rounded-lg">
                    <Image src={iconFilter} alt="Icon Filter" width={20} height={20}/>
                    <h1>Filter</h1>
                    <Image src={iconArrowDown} alt="Icon Filter" width={20} height={20}/>
                </div>

            </div>
            {data.map((item, index) => (

                <Link href={`/job/${item.id}`} key={index}>
                    <div className="w-full  bg-white border border-colorBorder rounded-md p-6 mb-4">
                        <div className="flex">
                            <Image className="w-[70px] h-[70px] me-5" src={item.company_image} alt="Job Image" width={100}
                                   height={100}/>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-lg text-textPrimary">{item.company_name}</h1>
                                <h1 className="font-semibold text-textPrimary text-2xl">{item.jobdesk}</h1>
                                <div className="flex  w-[80%] justify-between text-sm">
                                    <h1>{item.location}</h1>
                                    <p>-</p>
                                    <h1>Full Time</h1>
                                    <p>-</p>
                                    <h1>Rp.1.000.000 - 2.000.000</h1>
                                    <p>-</p>
                                    <h1>2 day ago</h1>
                                </div>
                                <p className="text-base text-[#141414] text-opacity-70">Mollit in laborum tempor Lorem
                                    incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa
                                    do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    );
}

export default JobList;