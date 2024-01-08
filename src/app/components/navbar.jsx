import Image from "next/image";
import {avatarUser, smarthomeLogo, userProfileNavbar} from "@/app/lib/utils/images";
import {iconHamburger} from "@/app/lib/utils/icon";
import NavbarMobileBtn from "@/app/components/navbar-mobile-btn";
import Link from "next/link";
import React from "react";

function Navbar() {
    const isLogin = true;

    return (
        <div className="bg-white w-screen py-3 px-5 flex justify-between shadow-md fixed top-0 z-30">

            <div className="flex items-center gap-20">
                <Link href={"/"}>
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
                </Link>

                <ul className="hidden text-textPrimary font-medium gap-8 lg:flex ">
                    <li>
                        <Link href={"/courses"} className="text-base">Pelatihan</Link>
                    </li>
                    <li>
                        <Link href={"/internship"} className="text-base">Magang</Link>
                    </li>
                    <li>
                        <Link href={"/job"} className="text-base">Pekerjaan</Link>
                    </li>
                </ul>
            </div>

            <NavbarMobileBtn/>

            {isLogin ? <div className="hidden lg:gap-3 lg:flex lg:items-center">
                <Link href={"/dashboard/training"}>
                    <button className="px-[30px] py-[10px] text-white bg-primary rounded-xl">
                        Dashboard
                    </button>
                </Link>

                <Image className="w-[60px] h-[60px]" src={avatarUser} width={100} height={100} />

            </div> : <div className="hidden lg:gap-3 lg:flex">
                <Link href={"/login"}>
                    <button className="px-[30px] py-[10px] text-primary border border-primary rounded-xl">
                        Masuk
                    </button>
                </Link>

                <Link href={"/register"}>
                    <button className="px-[30px] py-[10px] text-white bg-primary rounded-xl">
                        Daftar
                    </button>
                </Link>

            </div>}
        </div>
    );
}

export default Navbar;


