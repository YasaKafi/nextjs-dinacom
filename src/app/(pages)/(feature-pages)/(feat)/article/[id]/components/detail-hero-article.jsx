import React from 'react';
import Image from 'next/image';
import { bgHeroBuilding, bgHeroDetail, courseHeaderBanner, profileBanner } from '@/app/lib/utils/images';
import article from '@/app/lib/services/endpoint/api/article';

async function getArticleById(id) {
    const articleData = await article();
    console.log(articleData);
    return articleData.find((item) => item.id === id);
  }

export default async function DetailHeroArticle({articleData}) {
    if (!articleData) {
        return <p>Article not found</p>;
      }
    return (
        <div className='flex flex-col gap-3 '>
            <Image className='w-full rounded-lg h-[500px] object-cover' src={articleData.image} alt={articleData.title} />
            <div className='w-full flex justify-between items-center'>
                <h1 className='py-2 px-3 bg-blue-200 rounded-lg'>{articleData.category}</h1>
                <h2 className=''>{articleData.updatedAt}</h2>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const articles = await getArticles();
  
    const paths = articles.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const articleData = await getArticleById(params.id);
  
    return {
      props: {
        articleData,
      },
    };
  }
  
  