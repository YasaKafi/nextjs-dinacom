"use client";

import React, { useState } from "react";
import register from "@/app/lib/services/register";
import { registerIlustration, smartHomeLogo } from "@/app/lib/utils/images";
import { googleIcon } from "@/app/lib/utils/icon";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Form from "@/app/components/form";
import Image from "next/image";

export default function RegisterPage() {
  const [name, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setKataSandi] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="w-full h-screen flex flex-row ">
        <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center bg-gradient-to-b from-sky-400 to-blue-900 ">
          <Image src={registerIlustration} alt="" className="px-5" />
        </div>
        <div className="w-full h-screen  flex flex-col px-8 sm:px-24 lg:px-36 py-8">
          <div className="flex-row h-auto items-center justify-end flex">
            <h2 className="font-montserrat  text-blue-400 font-semibold pr-4 ">
              Smart AI
            </h2>
            <Image src={smartHomeLogo} alt="" />
          </div>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <div className="  mt-12 font-montserrat text-black ">
                <div className="font-semibold text-3xl">Daftar</div>
                <div className="mt-4">
                  Mari kita mulai dengan mengisi data dibawah ini
                </div>
              </div>
              <div className="flex flex-col font-montserrat w-full  mt-16">
                <Form
                  label={"Nama"}
                  type={"text"}
                  value={name}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="flex flex-col font-montserrat w-full  mt-10">
                <Form
                  label={"Email"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-red-500">{emailError}</div>}
              </div>
              <div className="flex flex-col font-montserrat w-full  mt-10">
                <Form
                  label={"Password"}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setKataSandi(e.target.value)}
                />

                <span
                  className="absolute top-[48%] sm:top-[47%] right-[13%] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoIosEyeOff size={25} />
                  ) : (
                    <IoIosEye size={25} />
                  )}
                </span>
                {passwordError && (
                  <div className="text-red-500">{passwordError}</div>
                )}
              </div>
              <div className="flex flex-col font-montserrat w-full  mt-10">
                <Form
                  label={"Confirm Password"}
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && (
                  <div className="text-red-500">{confirmPasswordError}</div>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col mt-20 font-montserrat text-sm sm:text-xl gap-6">
              <button className="w-full py-3 flex items-center justify-center rounded-2xl bg-sky-400">
                Buat Akun
              </button>
              <button className="w-full py-3  flex flex-row  items-center justify-center rounded-2xl bg-white border-2 border-black text-black">
                <div className="mr-4">
                  <Image src={googleIcon} alt="" />
                </div>
                <h2>Daftar Dengan Google</h2>
              </button>
              <h4 className="text-black text-xs sm:text-lg flex justify-center gap-3">
                Sudah mempunyai akun?{" "}
                <span className="text-blue-400  text-xs sm:text-lg font-semibold">
                  Masuk
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
