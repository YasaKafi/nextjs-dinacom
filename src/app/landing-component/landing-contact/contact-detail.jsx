import Image from "next/image";
import {googleMap} from "@/app/lib/utils/images";
import {iconFacebook, iconLinkedin, iconLocation, iconMail, iconPhone, iconTwitter} from "@/app/lib/utils/icon";

function ContactDetail() {
    return (
        <div className="w-full h-full flex flex-col justify-between">

            <div className="flex justify-between">
                <div className="flex flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconLocation} alt="Icon Location" width={30} height={30}/>
                    <p className="text-[#374754] text-base">Gebog</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconPhone} alt="Icon Phone" width={30} height={30}/>
                    <p className="text-[#374754] text-base">+62 3837483744</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image className="w-[30px] h-[30px]" src={iconMail} alt="Icon Mail" width={30} height={30}/>
                    <p className="text-[#374754] text-base">SmartCarrier@gmail.com</p>
                </div>
            </div>

            <Image className="w-full" src={googleMap} alt="Map" width={500} height={500}/>

            <div className="flex gap-5 justify-center">
                <Image src={iconTwitter} alt="Icon Twitter" width={30} height={30}/>
                <Image src={iconFacebook} alt="Icon Facebook" width={30} height={30}/>
                <Image src={iconLinkedin} alt="Icon Linkedin" width={30} height={30}/>
            </div>


        </div>
    );
}

export default ContactDetail;