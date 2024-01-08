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

function ListTask() {

    // const montserrat = Montserrat({ subsets: ["latin"] });

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
        // typography: {
        //     allVariants: {
        //         fontFamily: montserrat.fontFamily,
        //     },
        // },
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
                                    <Typography>{course.description}</Typography>
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