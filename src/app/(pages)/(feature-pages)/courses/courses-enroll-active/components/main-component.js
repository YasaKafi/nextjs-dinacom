"use client";
import React from "react";
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
import CardSubab from "./card-subab-courses";
import { RiLock2Line } from "react-icons/ri";
import { FiUploadCloud } from "react-icons/fi";

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
      {
        id: 1,
        titlesubab: "Soal",
        titleButton: "Baca Disini",
        colorButton: "primary",
      },
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

const MainComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-full mb-40">
        <div className="flex flex-row w-full h-full gap-8 px-20 pt-12">
          <div className="flex flex-col w-3/5 h-[70%] gap-8 ">
            <h1 className="text-5xl px-3 border-l-[10px] border-primary font-semibold text-primary">
              Kurikulum Pelatihan
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
                      {course.id === 2 && (
                        <div className=" mt-10  w-full h-24  flex flex-row justify-between items-center">
                          <div className="w-5 h-5 bg-white rounded-full border  border-black border-opacity-40 " />
                          <div className="w-[90%] h-full border border-dashed border-gray-400 rounded-xl items-center justify-between flex flex-row px-6">
                            <div className="flex flex-row gap-4 h-full items-center">
                              <div className="text-black ml-6 text-opacity-40">
                                <FiUploadCloud size={40} />
                              </div>
                              <div className="flex flex-col gap-2 ml-12">
                                <div className="text-black text-base">
                                  Masukkann File Disini
                                </div>
                                <div className="text-black text-opacity-40 text-sm">
                                  JPG, PNG or PDF, file size no more than 10MB
                                </div>
                              </div>
                            </div>
                            <button
                              className={`bg-white border border-primary w-24 flex items-center justify-center flex-row rounded-lg h-2/5  gap-1`}
                            >
                              <h1 className="font-medium text-xs text-primary">
                                Pilih File
                              </h1>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-2/5 h-[70%] pl-20">
            <div className="w-[85%] h-[25vh] border-2 border-gray-300 mt-20   rounded-xl flex py-8 flex-col px-8 justify-around">
              <h2 className="font-semibold text-2xl ">Progress Pelatihan</h2>
              <div className="w-full h-[10%] bg-gray-300 rounded-xl">
                <div
                  className={`h-full rounded-xl bg-primary`}
                  style={{ width: `50%` }}
                ></div>
              </div>
              <h2 className="font-semibold text-lg text-primary ">50% Progress</h2>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainComponent;
