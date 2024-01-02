import Image from "next/image";
import jobFilter from "@/app/(pages)/(feature-pages)/job/components/job-filter";
import {iconSearch} from "@/app/lib/utils/icon";

export default function Header() {
    return (
        <div>
            <div className="bg-primary h-[18vh]">
                <div className="flex">
                    <div className="flex flex-col">
                        <h1>Temukan pekerjaan impianmu disini!</h1>
                        <p>Berbagai macam pekerjaan telah menunggumu</p>
                    </div>

                    <Image src={iconSearch} alt="Job Header Illustration" width={1000} height={1000} quality={100}/>
                </div>

            </div>
        </div>
    )
}