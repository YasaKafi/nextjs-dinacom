import HeaderInternshipEnroll
    from "@/app/(pages)/(feature-pages)/(feat)/internship/internship-enroll/components/header";
import ListTask from "@/app/(pages)/(feature-pages)/(feat)/internship/internship-enroll/components/list-task";
import {FaCircle} from "react-icons/fa";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import React from "react";
import InternshipDescription
    from "@/app/(pages)/(feature-pages)/(feat)/internship/internship-enroll/components/internship-description";

export default function Page() {



    return (
        <div className="w-screen">
            <HeaderInternshipEnroll/>
            <div className="flex w-full px-[33px] py-[60px] gap-7" >
                <ListTask/>
                <InternshipDescription/>
            </div>
        </div>
    );
}

