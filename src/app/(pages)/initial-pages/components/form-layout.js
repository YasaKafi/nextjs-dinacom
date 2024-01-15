"use client";

import React, { useState } from "react";
import register from "@/app/lib/services/endpoint/auth/register";
import { iconGoogle } from "@/app/lib/utils/svg";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Image from "next/image";

function FormLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      setConfirmPasswordError(
        "Konfirmasi password tidak cocok dengan password"
      );
      return;
    } else {
      setConfirmPasswordError("");
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
            <div className="font-semibold text-3xl">Daftar</div>
            <div className="mt-4">
              Mari kita mulai dengan mengisi data dibawah ini
            </div>
          </div>
          <div className="flex flex-col font-montserrat w-full  mt-16">
            <h2 className="text-[#252525] text-sm mb-2">Nama</h2>
            <input
              className="w-[95%] border-b border-black focus:outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col font-montserrat w-full  mt-10">
            <h2 className="text-[#252525] text-sm mb-2">Email</h2>
            <input
              className="w-[95%] border-b border-black focus:outline-none"
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
          <div className="flex flex-col font-montserrat w-full  mt-10">
            <h2 className="text-[#252525] text-sm mb-2">Confirm Password</h2>
            <div className="flex flex-row font-montserrat w-full  ">
              <input
                className="w-[95%] border-b border-black focus:outline-none"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div
                className=" flex mb-2  items-end cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <IoIosEye size={20} />
                ) : (
                  <IoIosEyeOff size={20} />
                )}
              </div>
            </div>
            {confirmPasswordError && (
              <div className="text-red-500">{confirmPasswordError}</div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col mt-20 font-montserrat text-sm sm:text-xl gap-6">
          <button
            onClick={handleRegister}
            className="w-full py-3 flex items-center justify-center rounded-2xl bg-sky-400"
          >
            Buat Akun
          </button>
          <button className="w-full py-3  flex flex-row  items-center justify-center rounded-2xl bg-white border-2 border-black text-black">
            <div className="mr-4">
              <Image src={iconGoogle} alt="Icon Google" />
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
  );
}

export default FormLayout;
