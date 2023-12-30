
'use client'

import Image from "next/image";
import Form from "@/app/components/form";
import login from "@/app/lib/services/login";



export default  function LoginPage() {


    async function handleLogin() {
        const fetchLogin = await login()
        console.log(fetchLogin)
    }


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


            <div className="w-full h-full flex flex-col items-start justify-between py-[5vh] lg:py-20 lg:px-24 lg:w-1/2">
                <Image
                    className=" items-end hidden lg:block"
                    src="/image/logo.png"
                    alt="Logo"
                    width={115}
                    height={50}
                />

                <div className="w-full">

                    <h1 className="text-black font-semibold text-2xl lg:text-[36px] mb-3">Masuk</h1>
                    <h3 className="text-[#8D8D8D] font-light text-base mb-12">Selamat Datang Kembali!</h3>

                    <div className="w-full flex flex-col gap-5 mb-5">
                        <Form label="Email"/>
                        <Form label="Password"/>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5">

                    <button onClick={handleLogin} className="w-full bg-primary py-3 rounded-2xl text-white font-medium text-sm lg:text-lg">Masuk
                    </button>

                    <div className="w-full py-3">

                        <button className="w-full border border-[#8D8D8D] py-3 rounded-2xl text-textPrimary font-medium text-sm flex justify-center lg:text-lg">
                            <div className="flex">
                                <Image className="me-4 " src='/icon/icon_google.svg' alt="Icon Google" height={20} width={20}/>
                                <h3 className="text-textPrimary text-sm lg:text-lg text-center">Masuk dengan Google</h3>
                            </div>
                        </button>
                    </div>

                    <div className="w-full flex gap-2 justify-center items-center">
                        <h3 className="text-textPrimary text-xs">Tidak mempunyai akun?</h3>
                        <h3 className="text-primary font-semibold text-sm">Daftar</h3>
                    </div>
                </div>
            </div>

        </main>
    );
}

