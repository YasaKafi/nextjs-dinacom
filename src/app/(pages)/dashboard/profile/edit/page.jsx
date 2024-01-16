'use client'
import React, { useState } from "react";
import FormEdit from "./components/form-edit";
import RadioGender from "./components/radio-gender";
import ProfileEdit from "./components/profile-edit";
import ComboBoxEdit from "./components/combo-box";
import editProfile from "@/app/lib/services/endpoint/auth/edit-profile";
import "react-datepicker/dist/react-datepicker.css";
import FormBirthDate from "./components/form-birth-date";
import FormEditProfile from "./components/form-edit-profile";

export default function EditProfilePage() {

  return (
    <main className="w-full  bg-white ">
      <div className="w-full  relative flex flex-col lg:flex-row lg:justify-between pt-12 px-14 ">
        <ProfileEdit />
        <div className="w-3/4  flex flex-col overflow-scroll ">
          <FormEditProfile/>
        </div>
      </div>
    </main>
  );
}
