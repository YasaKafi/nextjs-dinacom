import Image from "next/image";
import {iconGoogle} from "@/app/lib/utils/svg";
import Form from "@/app/(pages)/(initial-pages)/components/form";
import FormLayout from "@/app/(pages)/(initial-pages)/login/form-layout";

export default  function LoginPage() {
    return (
        <main className="h-screen w-screen flex flex-col items-center px-8 py-10 lg:flex-row-reverse lg:py-0 lg:px-0">
            <div className="w-full flex justify-end lg:justify-center mb-16 lg:bg-primary lg:h-full lg:mb-0 lg:w-1/2">
                <Image
                    className="flex items-end lg:hidden"
                    src="/image/logo.png"
                    alt="Logo"
                    width={115}
                    height={50}/>
                <Image
                    className="items-end h-full w-full hidden object-cover p-32 lg:block "
                    src="/image/register_image.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>


            <div className="w-full h-full flex flex-col items-start justify-start py-[5vh] lg:py-20 lg:px-24 lg:w-1/2">
                <Image
                    className=" items-end hidden lg:block"
                    src="/image/logo.png"
                    alt="Logo"
                    width={115}
                    height={50}
                />

                <FormLayout/>
            </div>
        </main>
    );
}

