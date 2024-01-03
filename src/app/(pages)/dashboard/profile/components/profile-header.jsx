import {profileBanner, userProfileImage} from "@/app/lib/utils/images";
import Image from "next/image";

function ProfileHeader() {
    return (
        <div className="w-full h-[50vh] bg-red border border-[#C4C4C4] rounded-xl overflow-hidden relative">

            <div className="h-2/3 w-full relative">
                <Image className="w-full h-full absolute" src={profileBanner} alt="Profile Banner" width={1000} height={1000}/>
                <div className="h-full w-full absolute flex justify-end items-end p-[30px]">
                    <button className="bg-white px-6 py-3 text-primary text-sm font-semibold rounded-xl">
                        Edit Sampul Foto
                    </button>
                </div>
            </div>

            <div className="h-1/3 w-full flex items-center  justify-between absolute z-10 -mt-6 px-10">

                <div className="flex items-center">
                    <Image className="w-[180px] h-[180px] rounded-full me-5" src={userProfileImage} alt="User Profile Image" width={1000} height={1000}/>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-textPrimary text-[30px]">Fattah Anggit</h1>
                        <h3 className="text-textPrimary text-base">Front-End Developer</h3>
                    </div>
                </div>
                <div>
                    <button
                        className="h-[45px] bg-white border border-primary rounded-xl px-[40px] text-primary font-semibold text-base">
                        Edit Profil
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;