import React from "react";
import { LuClock4 } from "react-icons/lu";
import "../../../../../../globals.css";
import { HiBadgeCheck } from "react-icons/hi";
import Image from "next/image";
import ButtonApply from "../components/button";
import jobDetail from "@/app/lib/services/jobDetail";

const responsibilities = [
  "Fokus pada pengelolaan dan pemrosesan data termasuk perencanaan data, visualisasi, data besar, atau analitik.",
  "Meningkatkan efisiensi sistem dengan berkonsultasi dengan pengguna akhir dan memberikan solusi inovatif.",
  "Memahami konsep penganggaran perencanaan, dan spesifikasi fungsional, mengembangkan dan mengimplementasikan solusi, dan melakukan pengujian.",
  "Menganalisis dan meningkatkan kinerja teknologi.",
  "Menyelesaikan kesalahan yang dicatat, serta memastikan keamanan dan enkripsi sistem.",
  "Mendokumentasikan proses dan memantau metrik kinerja sistem.",
  "Berkolaborasi dan berpartisipasi dalam implementasi proyek dan berbagai upaya yang berfokus pada kebutuhan bisnis.",
];


async function getDataJob() {
  const jobData = await jobDetail();
  return jobData.data;
}

export default async function DetailDescription() {
  const jobData = await getDataJob();
  
  return (
    <div className="w-full flex flex-col justify-start px-6 lg:px-24">
      <h1 className="w-full text-xl lg:text-3xl font-semibold mt-8 lg:mt-12">
        Tentang Posisi Ini
      </h1>
      <div className="w-full flex flex-col lg:flex-row mt-8">
        <div className="lg:w-3/5 w-full flex flex-col">
          <div className="w-full flex flex-col ">
            <h2 className="w-full text-lg lg:text-2xl font-semibold">
              Anda akan bertanggung jawab :
            </h2>
            <ul className="mt-4">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="list-disc ml-4 text-xs md:text-sm lg:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col mt-12">
            <h2 className="w-full text-lg lg:text-2xl font-semibold">
              Persyaratan :
            </h2>
            <ul className="mt-4">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="list-disc ml-4 text-xs md:text-sm lg:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex flex-col shadow-none sm:shadow-xl rounded-none sm:rounded-xl ml-0 lg:ml-36  mt-8 lg:mt-0 p-0 sm:p-4 mb-24">
          <div className="flex flex-col">
            <h2 className="box-detail-h2">Informasi Lowongan</h2>
            <div className="flex flex-row justify-start items-center mt-2  px-4 text-xs gap-2 lg:text-base py-2 rounded-xl border-2  ">
              <LuClock4 size={20} />
              Terakhir diperbarui: 14 Desember 2023
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="box-detail-h2">Jobdesk</h2>
              {/*<h3 className="lg:text-lg text-base">{jobData.jobdesk}</h3>*/}
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="box-detail-h2">Tipe Pekerjaan</h2>
              {/*<h3 className="lg:text-lg text-base">{jobData.type_job}</h3>*/}
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="box-detail-h2">Gaji</h2>
              <h3 className="lg:text-lg text-base">Negotiable</h3>
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="box-detail-h2">Pengalaman</h2>
              <h3 className="lg:text-lg text-base">Entry Level (0-2 tahun)</h3>
            </div>
            <div className="mt-6 flex flex-col">
              <h2 className="box-detail-h2">Lokasi</h2>
              <h3 className="lg:text-lg text-base">DKI Jakarta</h3>
            </div>
            <div className="flex flex-col mt-16">
              <div class="w-full h-px bg-white"></div>
              <h3 className="mt-6 text-lg">Tentang Perusahaan</h3>
              <div className="flex flex-row w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <h3>Perusahaan</h3>
                  <div className="flex flex-row items-center gap-1">
                    <HiBadgeCheck size={20} color="green" />
                    <h3>Rakamin</h3>
                  </div>
                </div>
                {/*<Image*/}
                {/*  src={jobData.company_image}*/}
                {/*  alt="backgroundDetail"*/}
                {/*  priority*/}
                {/*  className="object-cover w-[15%] md:w-[15%] border-2 border-gray-300 rounded-lg"*/}
                {/*></Image>*/}
              </div>
              <div className="flex flex-row w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <h3>Lokasi</h3>
                  {/*<h3>{jobData.location}</h3>*/}
                </div>
                <div className="flex items-center py-1 bg-blue-300 px-2 rounded-lg">
                  <h3 className="text-sm text-white">hybird</h3>
                </div>
              </div>
              <div className="mt-8 mx-6">
                <ButtonApply />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}