import React from "react";
import Image from "next/image";
import { editProfileUser } from "@/app/lib/utils/images";
import { FiEdit } from "react-icons/fi";
import FormEdit from "./components/form-edit";
import Form from "../../(initial-pages)/components/form";
import RadioGender from "./components/radio-gender";


export default function EditProfilePage() {
  const labels = ["Nama Lengkap", "Email", "No HP", "Pekerjaan Sekarang"];
  const defaultValues = [
    "Nama Lengkap Default",
    "Email Default",
    "No HP Default",
    "Pekerjaan Sekarang Default",
  ];

  return (
    <main className="w-full h-full ">
      <div className="w-full h-full relative flex flex-col lg:flex-row lg:justify-between pt-12 px-14">
        <div className="w-52 h-52 relative rounded-full bg-orange-300">
          <Image
            src={editProfileUser}
            alt="profile user"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 flex items-center justify-center right-0 w-16 h-16 rounded-full bg-blue-500">
            <FiEdit size={25} color="white" />
          </div>
        </div>

        <div className="w-3/4 h-full flex flex-col ">
          {labels.map((label, index) => (
            <FormEdit
              key={index}
              defaultValue={defaultValues[index]}
              label={label}
            />
          ))}
          <RadioGender/>
          
        </div>
      </div>
    </main>
  );
}
