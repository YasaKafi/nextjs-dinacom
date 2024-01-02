import ContactForm from "@/app/landing-component/landing-contact/contact-form";
import ContactDetail from "@/app/landing-component/landing-contact/contact-detail";

function LandingContact() {
    return (
        <div className="w-screen  bg-[#F6F6F6] lg:py-[50px] lg:px-[200px] flex flex-col items-center">

            <h1 className="font-bold text-primary text-[50px] hidden lg:block">Kontak Kami</h1>
            <p className="text-[#4F5665] mb-10 hidden lg:block">Jika kamu memiliki laporan atau saran bisa menghubungi kami disini</p>

            <div className="flex flex-col-reverse lg:flex-row w-full h-full justify-between">
                <div className=" w-full  lg:w-2/5">
                    <ContactForm/>
                </div>
                <div className=" w-full flex flex-col items-center px-8 py-5 lg:px-0 lg:py-0 lg:w-1/2">
                    <h1 className="font-bold text-primary text-[35px] lg:text-[50px] lg:hidden">Kontak Kami</h1>
                    <p className="text-[#4F5665] text-center mb-10 lg:hidden">Jika kamu memiliki laporan atau saran bisa menghubungi kami
                        disini</p>
                    <ContactDetail/>
                </div>
            </div>

        </div>
    );
}

export default LandingContact;