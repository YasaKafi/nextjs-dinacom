"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import {IoIosArrowDropdownCircle} from "react-icons/io";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {FaCircle} from "react-icons/fa";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import {Montserrat} from "next/font/google";
import {courseHeaderBanner} from "@/app/lib/utils/images";

const montserrat = Montserrat({ subsets: ["latin"] });

function ListTask() {



    const courseData = [
        {
            title: "Minggu 1",
            tasks: [
                {
                    id: 1,
                    image: courseHeaderBanner,
                    title: "Materi 1",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 2,
                    image: courseHeaderBanner,
                    title: "Materi 2",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 3,
                    image: courseHeaderBanner,
                    title: "Materi 3",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
            ]
        },
        {
            title: "Minggu 2",
            tasks: [
                {
                    id: 1,
                    image: courseHeaderBanner,
                    title: "Materi 1",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 2,
                    image: courseHeaderBanner,
                    title: "Materi 2",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 3,
                    image: courseHeaderBanner,
                    title: "Materi 3",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
            ]
        },
        {
            title: "Minggu 3",
            tasks: [
                {
                    id: 1,
                    image: courseHeaderBanner,
                    title: "Materi 1",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 2,
                    image: courseHeaderBanner,
                    title: "Materi 2",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 3,
                    image: courseHeaderBanner,
                    title: "Materi 3",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
            ]
        },
        {
            title: "Minggu 4",
            tasks: [
                {
                    id: 1,
                    image: courseHeaderBanner,
                    title: "Materi 1",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
                {
                    id: 2,
                    image: courseHeaderBanner,
                    title: "Materi 2",
                    description: "This subject provides a foundational overview of the business environment, introducing key concepts, structures, and functions of organizations",
                },
            ]
        }
        ]

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



    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="flex flex-col w-full h-[70%] gap-8 ">
                    <div className="w-full h-full  ">
                        {courseData.map((course, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    style={{backgroundColor: "#f0f0f0"}}
                                    expandIcon={<IoIosArrowDropdownCircle size={25}/>}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography>{course.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="flex flex-col w-full h-full gap-4">
                                        {course.tasks.map((task, index) => (
                                            <div className="flex flex-row w-full h-[100px] gap-4">
                                                <div className="w-[100px] h-[100px] bg-[#F8FBF9] rounded-xl flex items-center justify-center">
                                                    <img src={task.image} alt="course image"/>
                                                </div>
                                                <div className="flex flex-col w-full h-full gap-2">
                                                    <h1 className="font-semibold text-[#404040] text-[18px]">{task.title}</h1>
                                                    <p className="text-[#404040] text-[16px]">{task.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default ListTask;