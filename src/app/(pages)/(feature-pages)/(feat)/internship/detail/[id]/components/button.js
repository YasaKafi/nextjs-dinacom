"use client"
import React from 'react';
import {FaArrowDownLong} from "react-icons/fa6";
import addUserCourse from "@/app/lib/services/endpoint/user/add-user-course";
import addUserInternship from "@/app/lib/services/endpoint/user/add-user-internship";

function Button({id}) {
    const handleApplyInternship = async () => {
        try {
            const response = await addUserInternship({ userId: 2, internshipIdf: id });
            console.log("Respons dari pendaftaran:", response);
            alert("Pendaftaran berhasil!")
        } catch (error) {
            console.error("Terjadi kesalahan saat pendaftaran:", error);
        }
    }
    return (
        <button onClick={handleApplyInternship}
                className="bg-primary w-[100%] h-full py-4 rounded-lg flex flex-row justify-center items-center gap-3">
            <h1 className="font-medium text-xl text-white">
                Daftar Sekarang
            </h1>
        </button>
    );
}

export default Button;