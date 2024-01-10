import React, { useState } from "react";
import Image from "next/image";
import { editProfileUser } from "@/app/lib/utils/images";
import { FiEdit } from "react-icons/fi";

export default function ProfileEdit() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Hanya file JPEG atau PNG yang diizinkan.");
    }
  };

  const handleEditClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageLoad = (event) => {
    setImageDimensions({
      width: event.target.width,
      height: event.target.height,
    });
  };

  return (
    <div className="w-52 h-52 origin-top relative rounded-full bg-orange-300">
      <input
        id="fileInput"
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <Image
        src={selectedImage || editProfileUser}
        alt="profile user"
        className="object-cover w-full h-full"
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
        width={imageDimensions.width}
        height={imageDimensions.height}
        onLoad={handleImageLoad}
      />
      <div
        className="absolute bottom-0 flex items-center justify-center right-0 w-16 h-16 rounded-full bg-blue-500 cursor-pointer"
        onClick={handleEditClick}
      >
        <FiEdit size={25} color="white" />
      </div>
    </div>
  );
}
