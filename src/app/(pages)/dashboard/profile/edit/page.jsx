"use client";
import React, { useState } from "react";
import FormEdit from "./components/form-edit";
import RadioGender from "./components/radio-gender";
import ProfileEdit from "./components/profile-edit";
import ComboBoxEdit from "./components/combo-box";

import "react-datepicker/dist/react-datepicker.css";
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
    <main className="w-full  bg-white ">
      <div className="w-full  relative flex flex-col lg:flex-row lg:justify-between pt-12 px-14 ">
        <ProfileEdit />
        <div className="w-3/4  flex flex-col overflow-scroll ">
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
          <div className="mt-12 w-full mb-8">
            <FormBirthDate heading="Birth Date" />
          </div>

          <div className="w-full flex flex-row  gap-4 justify-end ">
            <button>
              <h2 className="text-base font-medium text-primary rounded-lg border-2 border-primary py-3 px-9">
                Batal
              </h2>
            </button>
            <button>
              <h2 className="text-base font-medium text-white rounded-lg bg-primary py-3 px-8">
                Simpan
              </h2>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
