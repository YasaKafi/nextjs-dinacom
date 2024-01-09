import React from 'react';
import {FaCircle} from "react-icons/fa";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

function InternshipDescription() {
    const features = [
        "4 Alur belajar yang efisien",
        "Akses Seumur Hidup",
        "Mentoring",
        "Assesmen Akhir",
    ];

    return (
        <div className="flex flex-col w-2/5  ">
            <div className="w-full bg-white rounded-xl flex flex-col p-8 justify-start shadow-lg gap-7">

                <div className="w-[133px] py-1 bg-[#F8FBF9] border border-[#43936C] rounded-md flex items-center justify-center ">
                    <h1 className="text-[#43936C]">Bisnis</h1>
                </div>

                <h1 className="font-semibold text-[#404040] text-[24px]">Tentang Program</h1>

                <p className="text-[#404040] text-[16px]">
                    Penyediaan fitur magang dalam organisasi kami bertujuan untuk memenuhi kebutuhan sumber daya manusia dengan cara yang efektif dan berkelanjutan. Program magang tidak hanya memberikan kontribusi tambahan dalam menyelesaikan tugas dan proyek, tetapi juga memainkan peran kunci dalam pengembangan bakat dan keterampilan calon profesional. Dengan memberikan kesempatan ini, kami tidak hanya mendukung pertumbuhan individu, tetapi juga menciptakan kolaborasi yang dinamis di antara tim. Magang menjadi landasan untuk menciptakan sumber daya manusia yang terampil, berpengetahuan luas, dan siap berkontribusi positif terhadap tujuan dan visi jangka panjang organisasi kami.
                </p>
            </div>
        </div>
    );
}

export default InternshipDescription;