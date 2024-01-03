import React from "react";
import FormEdit from "./components/form-edit";
import RadioGender from "./components/radio-gender";
import ProfileEdit from "./components/profile-edit";


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
        <ProfileEdit/>

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
