import React from 'react';
import DetailHeroArticle from './components/detail-hero-article';
import DetailMainArticle from './components/detail-main-article';

export default async function DetailPageArticle({ params }) {
    const id = params.id;

    return (
        <div className='my-12 mx-24 flex flex-col gap-10'>
            <DetailHeroArticle />
            <DetailMainArticle />
        </div>
    );
}