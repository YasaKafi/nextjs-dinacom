import React from "react";
import FormEdit from "./components/form-edit";
import RadioGender from "./components/radio-gender";
import ProfileEdit from "./components/profile-edit";
import ComboBox from "./components/combo-box";
import ComboBoxEdit from "./components/combo-box";
import Form from "../../(initial-pages)/components/form";
import FormBirthDate from "./components/form-birth-date";

export default function EditProfilePage() {
  const labels = ["Nama Lengkap", "Email", "No HP", "Pekerjaan Sekarang"];
  const defaultValues = [
    "Nama Lengkap Default",
    "Email Default",
    "No HP Default",
    "Pekerjaan Sekarang Default",
  ];
  const province = [
    { id: 1, name: "Ganjar" },
    { id: 2, name: "Mafud" },
    { id: 3, name: "Bowo" },
    { id: 4, name: "Gibran" },
    { id: 5, name: "Annnies" },
    { id: 6, name: "Slepett" },
  ];



  return (
    <main className="w-full h-full ">
      <div className="w-full h-full relative flex flex-col lg:flex-row lg:justify-between pt-12 px-14">
        <ProfileEdit />

        <div className="w-3/4 h-full flex flex-col ">
          {labels.map((label, index) => (
            <FormEdit
              key={index}
              defaultValue={defaultValues[index]}
              label={label}
            />
          ))}
          <RadioGender />
          <div className="w-full h-16 flex flex-row gap-6 mt-4">
            <div className="w-1/2">
              <ComboBoxEdit domicile={province} label="Provinsi" />
            </div>
            <div className="w-1/2">
              <ComboBoxEdit domicile={province} label="Kota/Kabupaten" />
            </div>
          </div>
          <FormBirthDate/>
          
        </div>
      </div>
    </main>
  );
}
