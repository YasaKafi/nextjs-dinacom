'use client'
import { FiUploadCloud } from "react-icons/fi";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function UploadFile() {
  const [buttonText, setButtonText] = useState("Pilih File");
  const [previewURL, setPreviewURL] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Hanya file JPG, JPEG, PNG, dan PDF yang diizinkan.");
      return;
    }

    const maxSize = 10 * 1024 * 1024; // 10 MB dalam bytes
    if (selectedFile.size > maxSize) {
      alert("Ukuran file harus kurang dari 10MB.");
      return;
    }

    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }

    console.log("File yang dipilih:", selectedFile);
    setButtonText("Kirim File");
  };
  return (
    <>
    
        <h2 className= "mt-10 mb-2 text-black  text-sm">*Masukkan foto selfie dengan kartu identitas atau ktp secara jelas</h2>
      <div className="   w-full h-auto  flex flex-row justify-between items-center">
        <div className="w-full h-full border border-dashed py-6 border-gray-400 rounded-xl items-center justify-between flex flex-row px-6">
          <div className="flex flex-row gap-4 h-full items-center">
            <div
              className={`${
                buttonText === "Kirim File" ? "hidden" : "flex"
              } text-black ml-6 text-opacity-40`}
            >
              <FiUploadCloud size={40} />
            </div>
            <div className="flex flex-col gap-2 ml-12">
              {buttonText === "Kirim File" && (
                <h2 className="text-black text-opacity-40 text-sm">
                  File yang dipilih: {`${fileInputRef.current?.files[0]?.name}`}
                </h2>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .pdf"
                style={{ display: "none" }}
              />
              {previewURL && (
                <Image
                  src={previewURL}
                  width={300}
                  height={200}
                  alt="Preview"
                />
              )}

              <div
                className={`${
                  buttonText === "Kirim File" ? "hidden" : "flex"
                } text-black text-opacity-40 text-sm`}
              >
                JPG, PNG or PDF, file size no more than 10MB
              </div>
            </div>
          </div>

          <button
            onClick={handleFileButtonClick}
            className={`${
              buttonText === "Pilih File" ? "bg-white" : "bg-primary"
            } border border-primary w-24 flex items-center justify-center flex-row rounded-lg py-3  gap-1`}
          >
            <h1
              className={`font-medium text-xs ${
                buttonText === "Pilih File" ? "text-primary" : "text-white"
              }`}
            >
              {buttonText}
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
