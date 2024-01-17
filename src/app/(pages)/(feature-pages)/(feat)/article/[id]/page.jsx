import React from 'react';
import DetailHeroArticle from './components/detail-hero-article';
import DetailMainArticle from './components/detail-main-article';
import article from "@/app/lib/services/endpoint/api/article";

export default async function DetailPageArticle({params}) {
    const id = params.id;
    console.log(id)

    const fetchArticle = await article()
    const jobDetail = fetchArticle[id]


    return (
        <div className='my-12 mx-24 flex flex-col gap-10'>

            <DetailHeroArticle articleData={jobDetail} />
            <DetailMainArticle articleData={jobDetail} />
        </div>
    );
}