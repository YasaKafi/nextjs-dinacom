"use client";

import React, { useState } from "react";
import register from "@/app/lib/services/endpoint/auth/register";
import { iconGoogle } from "@/app/lib/utils/svg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";


function FormLayout() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { data: session } = useSession();

    if (session) {

        router.push("/");
    } else {

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Semua input harus diisi!");
            return;
        }

        if (!isEmailValid(email)) {
            setEmailError("Format email tidak valid!");
            return;
        } else {
            setEmailError("");
        }

        if (password.length < 8) {
            setPasswordError("Password harus memiliki minimal 8 karakter !");
            return;
        } else {
            setPasswordError("");
        }


        try {
            const response = await register({ name, email, password });
            console.log("Respons dari pendaftaran:", response);
        } catch (error) {
            console.error("Terjadi kesalahan saat pendaftaran:", error);
        }
    };
    return (
        <div className=" w-full ">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col">
                    <div className="  mt-12 font-montserrat text-black ">
                        <div className="font-semibold text-3xl">Masuk</div>
                        <div className="mt-4">
                            Selamat Datang Kembali
                        </div>
                    </div>
                    <div className="flex flex-col font-montserrat w-full  mt-10">
                        <h2 className="text-[#252525] text-sm mb-2">Email</h2>
                        <input
                            className="w-[95%] border-b border-black focus:outline-none"
                            name="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="text-red-500">{emailError}</div>}
                    </div>
                    <div className="flex flex-col font-montserrat w-full  mt-10">
                        <h2 className="text-[#252525] text-sm mb-2">Password</h2>
                        <div className="flex flex-row font-montserrat w-full  ">
                            <input
                                className="w-[95%] border-b border-black focus:outline-none"
                                name="Password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div
                                className=" flex mb-2  items-end cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <IoIosEye size={20} />
                                ) : (
                                    <IoIosEyeOff size={20} />
                                )}
                            </div>
                        </div>

                        {passwordError && (
                            <div className="text-red-500">{passwordError}</div>
                        )}
                    </div>

                </div>
                <div className="w-full flex flex-col mt-20 font-montserrat text-sm sm:text-xl gap-6">
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 flex items-center justify-center rounded-2xl bg-primary text-white"
                    >
                        Masuk
                    </button>

                    <h4 className="text-black text-xs sm:text-lg flex justify-center gap-3">
                        Belum punya akun?
                        <Link href={'/register'}>
                            <span className="text-blue-400  text-xs sm:text-lg font-semibold">
              Daftar
            </span>
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default FormLayout;
