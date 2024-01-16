import React from 'react'
import { bgHeroBuilding, bgHeroDetail, courseHeaderBanner, profileBanner } from '@/app/lib/utils/images'
import Image from "next/image";
import { internshipBanner } from '@/app/lib/utils/svg';



const ArticleCards = ({ category, date, title, description, imageUrl }) => {

  

  return (
    <div className=' flex w-[970px] justify-between '>
      <div className='flex flex-col gap-6 w-[610px]'>
        <div className='flex flex-row gap-2 items-center'>
          <h1 className='font-semibold font-montserrat bg-blue-300 px-[12px] py-[9px] text-white rounded-md'>{category}</h1>
          <h2 className='font-montserrat'>{date}</h2>
        </div>
        <div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold font-montserrat text-xl text-textPrimary'>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Image
        className='h-[210px] w-[300px] object-cover rounded-md'
        src={imageUrl}
        alt={title}
        width={300}
        height={210}
      />
    </div>
  );
};

export default ArticleCards;


