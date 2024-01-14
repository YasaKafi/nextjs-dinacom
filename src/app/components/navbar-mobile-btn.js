'use client'

import Image from "next/image";
import {userProfileNavbar} from "@/app/lib/utils/images";
import {iconExit, iconHamburger} from "@/app/lib/utils/svg";
import {useState} from "react";

function NavbarMobileBtn() {
    const [showNavbar, setShowNavbar] = useState(false);

    function toggleNavbar() {
        setShowNavbar(!showNavbar);
    }
    return (
        <>
            <div className="flex gap-3 lg:hidden">
                <Image src={userProfileNavbar} alt="User Profile" width={25} height={25}/>
                <Image onClick={toggleNavbar} src={iconHamburger} alt="Icon Hamburger" width={25} height={25}/>
            </div>
            {showNavbar ? (
                <div className="flex flex-col gap-8 bg-white p-5 rounded-lg shadow-lg fixed top-0 left-0 right-0 bottom-0 lg:hidden">
                    <div className="flex justify-end">
                        <Image onClick={toggleNavbar} src={iconExit} alt="Icon Exit" width={25} height={25}/>
                    </div>
                    <div className="flex gap-5">
                        <button className="w-full px-[30px] py-[10px] text-primary border border-primary rounded-xl">
                            Masuk
                        </button>

                        <button className="w-full px-[30px] py-[10px] text-white bg-primary rounded-xl">
                            Daftar
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="#" className="text-lg font-medium text-textPrimary">Pelatihan</a>
                        <a href="#" className="text-lg font-medium text-textPrimary">Magang</a>
                        <a href="#" className="text-lg font-medium text-textPrimary">Pekerjaan</a>
                        </div>
                </div>
            ) : null}
        </>
    );
}

export default NavbarMobileBtn;