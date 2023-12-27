import Image from "next/image";
import Form from "@/app/components/form";

export default function LoginPage() {
    return (
        <main className="h-screen w-screen flex flex-col items-center  px-8 py-10">

            <div className="w-full flex justify-end mb-16">
                <Image
                    className="flex items-end"
                    src="/image/logo.png"
                    alt="Logo"
                    width={115}
                    height={50}/>
            </div>

            <div className="w-full h-full flex flex-col items-start justify-between py-[5vh]">
                <div className="w-full">
                    <h1 className="text-black font-semibold text-2xl mb-3">Masuk</h1>
                    <h3 className="text-[#8D8D8D] font-light text-base mb-8">Selamat Datang Kembali!</h3>

                    <div className="w-full flex flex-col gap-5 mb-5">
                        <Form label="Email"/>
                        <Form label="Password"/>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-5">

                    <button className="w-full bg-primary py-3 rounded-2xl text-white font-medium text-sm">Masuk
                    </button>

                    <div className="w-full py-3 relative">
                        <Image className="absolute py-3 ms-5" src='/icon/icon_google.svg' alt="Icon Google" height={20} width={20}/>
                        <button className="w-full border border-black py-3 rounded-2xl text-textPrimary font-medium text-sm">Masuk
                            dengan Google
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

