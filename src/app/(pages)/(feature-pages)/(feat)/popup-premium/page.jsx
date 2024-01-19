import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { iconPremium } from "@/app/lib/utils/svg";

const features = [
  "Akses pelatihan premium dari perusahaan ternama",
  "Persentase diterima kerja / magang lebih tinggi",
  "Materi pelatihan lebih banyak dan kompleks",
  "Tanda premium di profile untuk menarik perhatian recruiter",
];

export default function PopUpPremium() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 h-[50%] flex flex-row shadow-2xl rounded-2xl">
          {/* Bagian Kiri */}
          <div className="w-1/2 h-full pt-12 px-8 rounded-l-2xl flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row gap-3">
                <Image alt="iconPremium" src={iconPremium}></Image>
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-lg font-medium text-[#6F6C90]">
                    SmartCarrier
                  </h2>
                  <h2 className="text-2xl font-semibold">Premium</h2>
                </div>
              </div>
              <h2 className="text-lg mt-6 font-medium text-[#6F6C90]">
                Upgrade untuk mendapatkan fitur premium
              </h2>
              <h1 className="text-lg mt-6 font-medium text-[#6F6C90]">
                <span className="text-5xl font-semibold text-black">50K </span>
                /bulan
              </h1>
            </div>

            <div className="flex justify-center pb-6">
              <button className="px-16 py-4 rounded-[24px] bg-[#FFBF19]">
                <h2 className="font-semibold text-xl text-white">
                  Upgrade Sekarang
                </h2>
              </button>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="w-1/2 h-full bg-[#F7F7FC] rounded-r-2xl overflow-hidden">
            <ul className="text-xl font-semibold px-8 pt-12 pb-12">
              Fitur spesial premium:
              {features.map((feature, index) => (
                <li key={index} className="mt-3">
                  <div className="flex flex-row gap-3 items-center">
                    <h2 className="text-[#FFBF19]">
                      <FaCircleCheck size={25} />
                    </h2>
                    <h2 className="w-[90%] text-lg font-normal">{feature}</h2>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="px-16 py-4 rounded-[24px] border-2 border-[#FFBF19]">
                <h2 className="font-semibold text-xl text-[#FFBF19]">
                  Atau coba 3 hari
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
