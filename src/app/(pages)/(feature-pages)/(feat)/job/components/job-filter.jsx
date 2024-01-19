"use client"
import { Label, Radio } from 'flowbite-react';
import MultiRangeSlider from "@/app/(pages)/(feature-pages)/(feat)/job/components/multirange-slider";


function JobFilter() {
    return (
        <div className="w-[40%] h-min border border-colorBorder rounded-xl p-[28px]">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-bold text-[24px] text-textPrimary">Filter</h1>
                <h3 className="font-medium text-base text-[#537FE7]">Reset All</h3>
            </div>
            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

            <fieldset className="flex max-w-md  gap-4 text-red-300">
                <legend className="mb-4 font-bold text-[20px] text-textPrimary">Berdasarkan dari</legend>
                <div className="flex items-center gap-2 text-red-100">
                    <Radio id="united-state" name="countries" value="popular" defaultChecked/>
                    <Label htmlFor="united-state">Sedang Populer</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="germany" name="countries" value="sallary-max"/>
                    <Label htmlFor="germany">Gaji Tertinggi</Label>
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
                <div className="flex items-center gap-2 text-red-100">
                    <Radio id="united-state" name="countries" value="popular" defaultChecked/>
                    <Label htmlFor="united-state">Full-Time</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="germany" name="countries" value="sallary-max"/>
                    <Label htmlFor="germany">Part-Time</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="germany" name="countries" value="sallary-max"/>
                    <Label htmlFor="germany">Contract</Label>
                </div>


            </fieldset>

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

            <fieldset className="flex max-w-md  gap-4 text-red-300">
                <legend className="mb-4 font-bold text-[20px] text-textPrimary">Posisi</legend>
                <div className="flex items-center gap-2 text-red-100">
                    <Radio id="united-state" name="countries" value="popular" defaultChecked/>
                    <Label htmlFor="united-state">On-Site</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="germany" name="countries" value="sallary-max"/>
                    <Label htmlFor="germany">Hybrid</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="germany" name="countries" value="sallary-max"/>
                    <Label htmlFor="germany">Remote</Label>
                </div>

            </fieldset>

            <div className="w-full h-[0.5px] border border-[#E7E7EE] my-4"></div>

        </div>
    );
}

export default JobFilter;