import ProfileSection from "@/app/(pages)/(feature-pages)/(feat)/profile/components/profile-section";
import ProfileTrainingDetail
    from "@/app/(pages)/(feature-pages)/(feat)/profile/components/profile-training-detail/profile-training-detail";


function ProfilePage() {
    return (
        <>
            <div className="h-[55px]"></div>
            <ProfileSection/>
            <ProfileTrainingDetail/>
        </>
    );
}

export default ProfilePage;