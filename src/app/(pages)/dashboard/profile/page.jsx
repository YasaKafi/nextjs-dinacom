// import ProfileHeader from "@/app/(pages)/dashboard/profile/components/profile-header";
import ProfileAbout from "@/app/(pages)/dashboard/profile/components/profile-about";
import ProfileTrainingDetail from "./components/profile-training-detail";




function Page() {
    return (
        <div className=" w-full p-6 bg-white">
            {/* <ProfileHeader/> */}
            <div className="flex w-full h-1/2 mt-10">
                {/* <ProfileAbout/> */}
                <ProfileTrainingDetail/>
            </div>
        </div>
    );
}

export default Page;