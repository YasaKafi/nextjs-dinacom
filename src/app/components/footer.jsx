import Image from "next/image";
import {smarthomeLogo} from "@/app/lib/utils/images";
import {iconFacebookWhite, iconInstagramWhite, iconTwitterWhite} from "@/app/lib/utils/svg";

function Footer() {
    return (
        <div className="bg-primary flex flex-col px-[21px] py-[70px]">

            <div className="flex items-center gap-3">
                <h1 className="text-white text-base lg:text-lg">SmartCarrier</h1>
                <Image className="w-6 h-6 lg:w-8 lg:h-8" src={smarthomeLogo} alt="SmartCarrier Logo" width={25} height={25}/>
            </div>

            <p className="text-white text-xs opacity-50 text-center my-7 lg:my-10 lg:text-sm">Dengan adanya SmartCarrier diharapkan dapat meningkatkan kualitas masyarakat Indonesia dan meningkatan ekonomi di Indonesia</p>

            <ul className="gap-5 lg:gap-14 flex flex-col lg:flex-row items-center text-white text-[15px] mb-12 lg:mb-16">
                <li>Tentang Kami</li>
                <li>Kritik Saran</li>
                <li>Kontak</li>
            </ul>

            <div className="flex gap-10 items-center">
                <Image className="w-4 h-4 lg:w-6 lg:h-6" src={iconFacebookWhite} alt="IconFacebook" width={20} height={20}/>
                <Image className="w-4 h-4 lg:w-6 lg:h-6" src={iconTwitterWhite} alt="Icon Twitter" width={20} height={20}/>
                <Image className="w-4 h-4 lg:w-6 lg:h-6" src={iconInstagramWhite} alt="Icon Instagram" width={20} height={20}/>
            </div>
        </div>
    );
}

export default Footer;