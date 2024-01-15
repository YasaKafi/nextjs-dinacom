import React from "react";
import Image from "next/image";
import { bgHeroDetail } from "@/app/lib/utils/svg";
import jobDetail from "@/app/lib/services/jobDetail";

async function getDataJob() {
  const jobData = await jobDetail(2);
  return jobData.data;
}

export default async function DetailHero() {
  const dataJob = await getDataJob();
  return (
    <div className=" w-full  flex items-center justify-start ">
      <Image
        src={bgHeroDetail}
        alt="backgroundDetail"
        
        priority
        className="object-cover w-full h-[300px]"
      ></Image>
      <div className="absolute lg:top-32 left-[35%] lg:left-[30%] top-32 text-white lg:text-5xl text-2xl  md:text-3xl font-semibold">
      {dataJob.jobdesk}
      </div>
      <Image width={100}
        height={100} src={dataJob.company_image} alt="logoCompany" className="absolute lg:top-28 left-[10%] top-32 w-1/5 lg:w-[15%] 2xl:w-[10%] rounded-xl">
        
      </Image>
      <div className="absolute lg:top-48 left-[35%] lg:left-[30%] top-44 text-white lg:text-2xl text-lg sm:text-xl font-normal">
        {dataJob.company_name}
      </div>
    </div>
  );
}
