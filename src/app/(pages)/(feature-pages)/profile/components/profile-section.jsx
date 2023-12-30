import Image from "next/image";
import {userProfile} from "@/app/lib/utils/images";
import {iconEdit} from "@/app/lib/utils/icon";

function ProfileSection() {
    return (
        <div className="w-full bg-gradient-to-b from-primary to-[#1D3F96] px-[50px] py-[25px]">
            <div className="w-full  flex flex-col lg:flex-row">
                <Image
                    className="w-[130px] h-[130px] mb-4 lg:mb-0 lg:w-[200px] lg:h-[200px] me-10"
                    src={userProfile}
                    alt="User Profile"
                    width={200}
                    height={200}
                />

                <div className=" w-full flex flex-col">
                    <div className="flex gap-4 items-center">
                        <h1 className="font-semibold text-white text-2xl">Fattah Anggit</h1>
                        <Image src={iconEdit} alt="Icon Edit" width={25} height={25}/>
                    </div>

                    <h3 className="font-medium text-white text-lg mt-1 mb-6">Android Developer</h3>

                    <h2 className="font-semibold text-white text-xl mb-3">Tentang Saya</h2>
                    <p className="text-white text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur</p>

                </div>
            </div>
        </div>
    );
}

export default ProfileSection;