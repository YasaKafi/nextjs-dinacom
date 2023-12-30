import ContactForm from "@/app/landing-component/landing-contact/contact-form";
import ContactDetail from "@/app/landing-component/landing-contact/contact-detail";

function LandingContact() {
    return (
        <div className="w-screen  bg-[#F6F6F6] py-[50px] px-[200px] flex flex-col items-center">

            <h1 className="font-bold text-primary text-[50px]">Kontak Kami</h1>
            <p className="text-[#4F5665] mb-10">Jika kamu memiliki laporan atau saran bisa menghubungi kami disini</p>

            <div className="flex w-full h-full justify-between">
                <div className="w-2/5">
                    <ContactForm/>
                </div>
                <div className="w-1/2">
                    <ContactDetail/>
                </div>
            </div>

        </div>
    );
}

export default LandingContact;