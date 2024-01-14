import Image from "next/image";
import {googleMap} from "@/app/lib/utils/images";
import {iconFacebook, iconLinkedin, iconLocation, iconMail, iconPhone, iconTwitter} from "@/app/lib/utils/svg";

function ContactDetail() {
    return (
        <div className="w-full  lg:h-full flex flex-col-reverse lg:flex-col  justify-between">

            <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
                <div className="flex lg:flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconLocation} alt="Icon Location" width={30} height={30}/>
                    <p className="text-[#374754] text-base">Gebog</p>
                </div>
                <div className="flex lg:flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconPhone} alt="Icon Phone" width={30} height={30}/>
                    <p className="text-[#374754] text-base">+62 3837483744</p>
                </div>
                <div className="flex lg:flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconMail} alt="Icon Mail" width={30} height={30}/>
                    <p className="text-[#374754] text-base">SmartCarrier@gmail.com</p>
                </div>
            </div>

            <div className="lg:hidden"></div>
            <Image className="w-full hidden lg:block" src={googleMap} alt="Map" width={500} height={500}/>

            <div className="flex gap-5 justify-center my-16 lg:my-0">
                <Image src={iconTwitter} alt="Icon Twitter" width={30} height={30}/>
                <Image src={iconFacebook} alt="Icon Facebook" width={30} height={30}/>
                <Image src={iconLinkedin} alt="Icon Linkedin" width={30} height={30}/>
            </div>


        </div>
    );
}

export default ContactDetail;