import React from 'react';
import article from '@/app/lib/services/endpoint/api/article';

async function getArticleById(id) {
    const articleData = await article();
    console.log(articleData);
    return articleData.find((item) => item.id === id);
  }

export default async function DetailMainArticle({articleData}) {
    if (!articleData) {
        return <p>Article not found</p>;
      }

    return (
        <div className='flex flex-col gap-12'>
            <h1 className='font-montserrat text-textPri mary text-4xl tracking-wide w-full font-bold '>{articleData.title}</h1>
            <hr className='w-full border-2' />
            <p className='font-montserrat'>{articleData.content}</p>
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
  
  