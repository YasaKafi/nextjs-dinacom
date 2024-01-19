import HeaderInternshipEnroll
    from "@/app/(pages)/(feature-pages)/(feat)/internship/detail/[id]/components/header";
import ListTask from "@/app/(pages)/(feature-pages)/(feat)/internship/detail/[id]/components/list-task";
import React from "react";
import InternshipDescription
    from "@/app/(pages)/(feature-pages)/(feat)/internship/detail/[id]/components/internship-description";
import internshipDetail from "@/app/lib/services/endpoint/api/internship-detail";

export default async function Page({params}) {
    const id = params.id
    const dataInternship = await internshipDetail(id)
    console.log("DATA INTERNSHIP DETAIL")
    console.log(dataInternship)

    return (
        <div className="w-screen">
            <HeaderInternshipEnroll data={dataInternship}/>
            <div className="flex w-full px-[33px] py-[60px] gap-7" >
                <ListTask data={dataInternship}/>
                <InternshipDescription data={dataInternship}/>
            </div>
        </div>
    );
}

