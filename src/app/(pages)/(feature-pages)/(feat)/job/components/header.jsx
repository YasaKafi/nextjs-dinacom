import Image from "next/image";

import {jobHeaderIllustration, notebook} from "@/app/lib/utils/icon";

export default function Header() {
    return (
        <div>
            <div className="bg-primary h-[18vh] w-full flex items-center justify-between ps-[50px]">
                <div className="flex ">
                    <div className="flex flex-col me-2">
                        <h1 className="font-semibold text-white text-[36px]">Temukan pekerjaan impianmu disini!</h1>
                        <p className="text-white text-base">Berbagai macam pekerjaan telah menunggumu</p>
                    </div>

                    <Image src={notebook} alt="NoteBook" width={85} height={100} quality={100}/>
                </div>
                <Image src={jobHeaderIllustration} alt="JobHeaderIllustration" width={500} height={500} quality={100}/>
            </div>
        </div>
    )
}