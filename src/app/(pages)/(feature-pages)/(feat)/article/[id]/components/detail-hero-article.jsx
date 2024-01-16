import React from 'react';
import Image from 'next/image';
import { bgHeroBuilding, bgHeroDetail, courseHeaderBanner, profileBanner } from '@/app/lib/utils/images';
import article from '@/app/lib/services/endpoint/api/article';

async function getArticleById(id) {
  const articleData = await article();
  return articleData.find((item) => item.id === id);
}

export default async function DetailHeroArticle() {
    const dataArticle = await getArticleById();

    return (
        <div className='flex flex-col gap-3 '>
            <Image className='w-full rounded-lg h-[500px] object-cover' src={dataArticle.image} alt={dataArticle.title} />
            <div className='w-full flex justify-between items-center'>
                <h1 className='py-2 px-3 bg-blue-200 rounded-lg'>{dataArticle.category}</h1>
                <h2 className=''>{dataArticle.updatedAt}</h2>
            </div>
        </div>
    );
}