import React from 'react'
import Image from "next/image";
import {
    bgHeroBuilding,
    bgHeroDetail,
    courseHeaderBanner,
    profileBanner,
  } from "@/app/lib/utils/images";


const DetailHeroArticle = () => {
  return (
    <div className='flex flex-col gap-3'>
        <Image className='w-full rounded-lg h-[500px] object-cover' src={courseHeaderBanner}/>
        <div className='w-full flex justify-between items-center'>
            <h1 className='py-2 px-3 bg-blue-200 rounded-lg'>JOB</h1>
            <h2 className=''>12, Desember 2023</h2>
        </div>
    </div>
  )
}

export default DetailHeroArticle