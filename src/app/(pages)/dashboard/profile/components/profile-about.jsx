import Image from "next/image";
import {iconSearch, jobHeaderIllustration} from "@/app/lib/utils/icon";

function ProfileAbout() {

    const biodata = [
        {
            icon: jobHeaderIllustration,
            value: "Laki-laki",
        },
        {
            icon: jobHeaderIllustration,
            value: "Lahir Juni 26, 1980",
        },
        {
            icon: jobHeaderIllustration,
            value: "Jawir Selatan",
        },
        {
            icon: jobHeaderIllustration,
            value: "fadza@gmail.com",
        },
        {
            icon: jobHeaderIllustration,
            value: "33757005467",
        }
    ]

    return (
        <div className="bg-white w-1/4 h-full border border-colorBorder rounded-xl px-4 py-5">
            <h1 className="font-bold text-textPrimary text-xl">Tentang Saya</h1>
            <ul>
                {biodata.map((item, index) => (
                    <div key={index} className="flex flex-col my-4">
                        <div className="flex gap-2 mb-2">
                            <Image src={item.icon} alt="Icon Search" width={25} height={25}/>
                            <h3>{item.value}</h3>
                        </div>
                        {index !== biodata.length - 1 && (
                            <div className="h-[1px] w-full border border-colorBorder"></div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ProfileAbout;