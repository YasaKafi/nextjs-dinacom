import Image from "next/image";
import {iconArrowDown, iconFilter} from "@/app/lib/utils/icon";
import {jobImage} from "@/app/lib/utils/images";

function JobList() {

    const dataDummy = [
        {
            id: 1,
            company: "Linear Company",
            position: "FrontEnd Developer",
            location: "London",
            type: "Full Time",
            salary: "Rp.1.000.000 - 2.000.000",
            date: "2 day ago",
            description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
        },
        {
            id: 2,
            company: "Linear Company",
            position: "FrontEnd Developer",
            location: "London",
            type: "Full Time",
            salary: "Rp.1.000.000 - 2.000.000",
            date: "2 day ago",
            description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
        },
        {
            id: 3,
            company: "Linear Company",
            position: "FrontEnd Developer",
            location: "London",
            type: "Full Time",
            salary: "Rp.1.000.000 - 2.000.000",
            date: "2 day ago",
            description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
        },
        {
            id: 4,
            company: "Linear Company",
            position: "FrontEnd Developer",
            location: "London",
            type: "Full Time",
            salary: "Rp.1.000.000 - 2.000.000",
            date: "2 day ago",
            description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
        },
        {
            id: 5,
            company: "Linear Company",
            position: "FrontEnd Developer",
            location: "London",
            type: "Full Time",
            salary: "Rp.1.000.000 - 2.000.000",
            date: "2 day ago",
            description: "Mollit in laborum tempor Lorem incididunt irure."
        }
    ]

    return (
        <div className="w-full h-full">
            <div className="flex w-full justify-between items-center mb-5">
                <h1 className="font-bold text-[32px] text-textPrimary">3177 Pekerjaan</h1>
                <div className="w-1/4 flex border border-colorBorder px-4 py-3 gap-3 rounded-lg">
                    <Image src={iconFilter} alt="Icon Filter" width={20} height={20}/>
                    <h1>Filter</h1>
                    <Image src={iconArrowDown} alt="Icon Filter" width={20} height={20}/>
                </div>

            </div>
            {dataDummy.map((item, index) => (
                <div className="w-full h-[20vh] bg-white border border-colorBorder rounded-xl">
                    <div className="flex">
                        <Image src={jobImage} alt="Job Image" width={100} height={100}/>
                        <div className="flex flex-col">
                            <h1>Linear Company</h1>
                            <h1>FrontEnd Developer</h1>
                            <div className="flex">
                                <h1>London</h1>
                                <h1>Full Time</h1>
                                <h1>Rp.1.000.000 - 2.000.000</h1>
                                <h1>2 day ago</h1>
                            </div>
                            <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa
                                do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default JobList;