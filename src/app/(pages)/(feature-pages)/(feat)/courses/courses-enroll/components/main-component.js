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

const montserrat = Montserrat({ subsets: ["latin"] });

const courseData = [
  {
    title: "Introduction to Business",
    description:
      "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations.",
  },
  {
    title: "Principles of Management",
    description:
      "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
  },
  {
    title: "Marketing Strategies",
    description:
      "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
  },
  {
    title: "Financial Accounting",
    description:
      "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
  },
];

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: montserrat.fontFamily,
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
      <div className="w-full h-[80vh]">
        <div className="flex flex-row w-full h-full gap-8 px-20 pt-12">
          <div className="flex flex-col w-3/5 h-[70%] gap-8 ">
            <h1 className="text-5xl px-3 border-l-[10px] border-primary font-semibold text-primary">
              Course Curriculum
            </h1>
            <div className="w-full h-full  ">
              {courseData.map((course, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    style={{ backgroundColor: "#f0f0f0" }}
                    expandIcon={<IoIosArrowDropdownCircle size={25} />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography>{course.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{course.description}</Typography>
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
  );
};

export default MainComponent;
