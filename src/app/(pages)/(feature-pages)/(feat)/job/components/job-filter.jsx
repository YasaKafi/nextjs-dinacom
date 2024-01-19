"use client"
import { Label, Radio } from 'flowbite-react';
import MultiRangeSlider from "@/app/(pages)/(feature-pages)/(feat)/job/components/multirange-slider";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";


function JobFilter() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedTypeJob, setSelectedTypeJob] = useState('');
    const [selectedJobPosition, setSelectedJobPosition] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRadioChangeTypeJob = (event) => {
        setSelectedTypeJob(event.target.value)
    }

    const handleRadioChangeJobPosition = (event) => {
        setSelectedJobPosition(event.target.value)
    }


    const router = useRouter()

    useEffect(() => {
        if (router) {
            router.push(`/job?sort_by=${selectedOption}&job_type=${selectedTypeJob}&position=${selectedJobPosition}`, {scroll: false})
        } else {
            router.push(`/job`)
        }
    }, [selectedOption, selectedTypeJob, selectedJobPosition, router]);

    return (
        <div className="w-[40%] h-min border border-colorBorder rounded-xl p-[28px]">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-bold text-[24px] text-textPrimary">Filter</h1>
                <h3 className="font-medium text-base text-[#537FE7]">Reset All</h3>
            </div>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

            <fieldset className="flex max-w-md  gap-4 text-red-300">
                <legend className="mb-4 font-bold text-[20px] text-textPrimary">Berdasarkan dari</legend>
                <div className="flex items-center gap-2 " onClick={handleRadioChange}>
                    <Radio
                           id="popular"
                           name="sortBy"
                           value="popular"
                           checked={selectedOption === 'popular'}
                    />
                    <Label htmlFor="popular">Sedang Populer</Label>
                </div>
                <div className="flex items-center gap-2" onClick={handleRadioChange}>
                    <Radio
                        id="sallary-max"
                        name="sortBy"
                        value="sallary-max"
                        checked={selectedOption === 'sallary-max'}
                    />
                    <Label htmlFor="sallary-max">Gaji Tertinggi</Label>
                </div>

            </fieldset>

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>


            <h1 className="font-bold text-[20px] text-textPrimary">Kisaran Gaji</h1>
            <MultiRangeSlider
                min={1000000}
                max={20000000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

            <fieldset className="flex max-w-md  gap-4 text-red-300">
                <legend className="mb-4 font-bold text-[20px] text-textPrimary">Tipe Pekerjaan</legend>
                <div className="flex items-center gap-2 " onClick={handleRadioChangeTypeJob}>
                    <Radio
                        id="fulltime"
                        name="type-job"
                        value="full-time"
                        checked={selectedTypeJob === 'full-time'}
                    />
                    <Label htmlFor="fulltime">Full-Time</Label>
                </div>
                <div className="flex items-center gap-2" onClick={handleRadioChangeTypeJob}>
                    <Radio
                        id="parttime"
                        name="type-job"
                        value="part-time"
                        checked={selectedTypeJob === 'part-time'}
                    />
                    <Label htmlFor="parttime">Part-Time</Label>
                </div>
                <div className="flex items-center gap-2" onClick={handleRadioChange}>
                    <Radio
                        id="contract"
                        name="type-job"
                        value="contract"
                        checked={selectedTypeJob === 'contract'}
                    />
                    <Label htmlFor="contract">Contract</Label>
                </div>


            </fieldset>

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

            <fieldset className="flex max-w-md  gap-4 text-red-300">
                <legend className="mb-4 font-bold text-[20px] text-textPrimary">Posisi</legend>
                <div className="flex items-center gap-2 text-red-100" onClick={handleRadioChangeJobPosition}>
                    <Radio
                        id="on-site"
                        name="position"
                        value="on-site"
                        checked={selectedJobPosition === 'on-site'}
                    />
                    <Label htmlFor="on-site">On-Site</Label>
                </div>
                <div className="flex items-center gap-2" onClick={handleRadioChangeJobPosition}>
                    <Radio
                        id="hybrid"
                        name="position"
                        value="hybrid"
                        checked={selectedJobPosition === 'hybrid'}
                    />
                    <Label htmlFor="hybrid">Hybrid</Label>
                </div>
                <div className="flex items-center gap-2" onClick={handleRadioChangeJobPosition}>
                    <Radio
                        id="remote"
                        name="position"
                        value="remote"
                        checked={selectedJobPosition === 'remote'}
                    />
                    <Label htmlFor="remote">Remote</Label>
                </div>

            </fieldset>

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

        </div>
    );
}

export default JobFilter;