import Image from "next/image";
import {smarthomeLogo, userProfileNavbar} from "@/app/lib/utils/images";
import {iconHamburger} from "@/app/lib/utils/icon";
import NavbarMobileBtn from "@/app/components/navbar-mobile-btn";

function Navbar() {

    return (
        <div className="bg-white w-screen py-3 px-5 flex justify-between shadow-md fixed top-0 z-30">

            <div className="flex items-center gap-20">
                <div className="lg:flex lg:items-center lg:gap-3  ">
                    <h1 className="text-primary font-semibold text-base hidden lg:block">SmartCarrier</h1>
                    <Image
                        className="w-[30px] h-[30px]"
                        src={smarthomeLogo}
                        alt="SmartHome Logo"
                        width={25}
                        height={25}
                    />
                </div>

                <ul className="hidden text-textPrimary font-medium gap-8 lg:flex ">
                    <li>
                        <a href="#" className="text-base">Pelatihan</a>
                    </li>
                    <li >
                        <a href="#" className="text-base">Magang</a>
                    </li>
                    <li >
                        <a href="#" className="text-base">Pekerjaan</a>
                    </li>
                </ul>
            </div>

            <NavbarMobileBtn/>

            <div className="hidden lg:gap-3 lg:flex">
                <button className="px-[30px] py-[10px] text-primary border border-primary rounded-xl">
                    Masuk
                </button>

                <button className="px-[30px] py-[10px] text-white bg-primary rounded-xl">
                    Daftar
                </button>
            </div>
        </div>
    );
}

export default Navbar;


