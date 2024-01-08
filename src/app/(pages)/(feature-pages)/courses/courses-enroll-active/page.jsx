"use client";
import React from "react";
import HeroComponent from "./components/hero-component";
import MainComponent from "./components/main-component";
import { Montserrat } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GoCheckCircleFill } from "react-icons/go";
import CardSubab from "./components/card-subab-courses";
import { RiLock2Line } from "react-icons/ri";

const montserrat = Montserrat({ subsets: ["latin"] });

const courseData = [
  {
    id: 1,
    title: "Materi Pelatihan",
    dataSubab: [
      {
        id: 1,
        titlesubab: "1. Introduction",
        icon: <GoCheckCircleFill size={20} />,
        titleButton: "Belajar Lagi",
        colorButton: "primary",
      },
      {
        id: 2,
        titlesubab: "2. Tentang",
        titleButton: "Belajar",
        colorButton: "primary",
      },
      {
        id: 3,
        titlesubab: "3. Penjelasan",
        titleButton: "Terkunci",
        iconButton: <RiLock2Line size={15} />,
        colorButton: "gray-300",
      },
      {
        id: 4,
        titlesubab: "4. Penutup",
        iconButton: <RiLock2Line size={15} />,
        titleButton: "Terkunci",
        colorButton: "gray-300",
      },
    ],
  },
  {
    id: 2,
    title: "Assesmen Akhir",
    dataSubab: [
      
    ],
  },
];

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: montserrat.fontFamily,
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#28B2FF",
    },
  },
});

const features = [
  "4 Alur belajar yang efisien",
  "Akses Seumur Hidup",
  "Mentoring",
  "Assesmen Akhir",
];

export default function EnrollCoursesActive() {
  return (
    <main className="w-full">
      <HeroComponent />
      <ThemeProvider theme={theme}>
        <div className="w-full h-full mb-40">
          <div className="flex flex-row w-full h-full gap-8 px-20 pt-12">
            <div className="flex flex-col w-3/5 h-[70%] gap-8 ">
              <h1 className="text-5xl px-3 border-l-[10px] border-primary font-semibold text-primary">
                Course Curriculum
              </h1>
              <div className="w-full h-full  ">
                {courseData.map((course, index) => (
                  <Accordion key={course.id} style={{ boxShadow: "none" }}>
                    <AccordionSummary
                      style={{
                        border: "1px solid #E0E0E0",
                        borderRadius: "12px",
                      }}
                      expandIcon={<IoIosArrowDropdownCircle size={25} />}
                      aria-controls={`panel${index + 1}-content`}
                      id={`panel${index + 1}-header`}
                    >
                      <div className="flex flex-row gap-3 items-center">
                        <div className="w-8 h-8 bg bg-primary bg-opacity-25 text-primary rounded-full flex items-center justify-center">
                          <HiOutlineClipboardList size={20} />
                        </div>
                        <Typography>{course.title}</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="w-full flex flex-col relative  gap-4 items-end">
                        {course.dataSubab.map((subab, index) => (
                          <CardSubab
                            key={index}
                            title={subab.titlesubab}
                            icon={subab.icon}
                            titleButton={subab.titleButton}
                            iconButton={subab.iconButton}
                            colorButton={subab.colorButton}
                          />
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-2/5 h-[70%] pl-20">
              <div className="w-[85%] h-[70%] bg-blue-400 mt-12 rounded-xl flex flex-col px-8 justify-start">
                <ul className="text-2xl font-semibold text-white  pt-4 pb-12 border-white border-opacity-40 border-b-2 ">
                  Pelatihan ini termasuk:
                  {features.map((feature, index) => (
                    <li key={index} className="mt-2">
                      <div className="flex flex-row gap-3 items-center text-lg font-normal text-white">
                        <FaCircle size={5} />
                        {feature}
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="bg-white w-full h-1/4 mb-5 rounded-lg flex flex-row justify-center items-center gap-3 mt-4">
                  <h1 className="font-medium text-lg text-primary">
                    Belajar Sekarang
                  </h1>
                  <EastRoundedIcon sx={{ color: "#28B2FF", fontSize: 25 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}
