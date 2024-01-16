"use client"

import React, { useState } from "react";
import FormEdit from "./form-edit";
import RadioGender from "./radio-gender";
import "react-datepicker/dist/react-datepicker.css";
import FormBirthDate from "./form-birth-date";
import ComboBoxEdit from "./combo-box";
import { handleEditProfile } from "./server-component";

const genderMap = {
    'male': 0,
    'female': 1,
  };

export default function FormEditProfile(
) {
  const province = [
    { id: 1, name: "Jawa Tengah" },
    { id: 2, name: "Jawa Barat" },
    { id: 3, name: "DKI Jakarta" },
    { id: 4, name: "Banten" },
    { id: 5, name: "DIY Yogyakarta" },
    { id: 6, name: "Jawa Timur" },
  ];

  const city = [
    { id: 1, name: "Semarang" },
    { id: 2, name: "Jakarta" },
    { id: 3, name: "Tangerang" },
    { id: 4, name: "Bandung" },
    { id: 5, name: "Sleman" },
    { id: 6, name: "Surabaya" },
  ];

  const [name, setName] = useState("Nama Lengkap Default");
  const [email, setEmail] = useState("Email Default");
  const [noHp, setNoHp] = useState("No HP Default");
  const [role, setRole] = useState("Pekerjaan Sekarang Default");
  const [gender, setGender] = useState("male");
  const [selectedProvince, setSelectedProvince] = useState(province[0]);
  const [selectedCity, setSelectedCity] = useState(city[0]);
  const [birthdate, setBirthdate] = useState(new Date()); 

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleEditProfileClient =  () => {
    handleEditProfile({
      name,
      email,
      no_hp: noHp,
      role,
      gender: genderMap[gender],
      birthdate,
      province: selectedProvince,
      city: selectedCity,
    });
  };
  return (
    <>
    <FormEdit
            label="Nama Lengkap"
            defaultValue={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormEdit
            label="Email"
            defaultValue={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormEdit
            label="No HP"
            defaultValue={noHp}
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
          />
          <FormEdit
            label="Pekerjaan Sekarang"
            defaultValue={role}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <RadioGender
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <div className="w-full h-16 flex flex-row gap-6 mt-4">
            <div className="w-1/2">
              <ComboBoxEdit
                domicile={province}
                selected={selectedProvince}
                onChange={handleProvinceChange}
                label="Provinsi"
              />
            </div>
            <div className="w-1/2">
              <ComboBoxEdit
                domicile={city}
                selected={selectedCity}
                onChange={handleCityChange}
                label="Kota/Kabupaten"
              />
            </div>
          </div>
          <div className="mt-12 w-full mb-8">
            <FormBirthDate heading="Birth Date" setBirthdate={setBirthdate} />
          </div>
          <div className="w-full flex flex-row  gap-4 justify-end ">
            <button>
              <h2 className="text-base font-medium text-primary rounded-lg border-2 border-primary py-3 px-9">
                Batal
              </h2>
            </button>
            <button onClick={handleEditProfileClient}>
              <h2 className="text-base font-medium text-white rounded-lg bg-primary py-3 px-8">
                Simpan
              </h2>
            </button>
          </div>
    </>
  )
}
