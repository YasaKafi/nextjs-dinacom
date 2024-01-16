import React from 'react';
import article from '@/app/lib/services/endpoint/api/article';

async function getArticle() {
    const articleData = await article(1);
    return articleData.data;
}

export default async function DetailMainArticle() {
    const dataArticle = await getArticle();

    return (
        <div className='flex flex-col gap-12'>
            <h1 className='font-montserrat text-textPrimary text-4xl tracking-wide w-full font-bold '>{dataArticle.title}</h1>
            <hr className='w-full border-2' />
            <p className='font-montserrat'>{dataArticle.content}</p>
        </div>
    );
}