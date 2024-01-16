  import React from 'react';
  import Image from 'next/image';
  import { internshipBanner } from '@/app/lib/utils/svg';
  import article from '@/app/lib/services/endpoint/api/article';
  import Link from 'next/link';

  async function getArticles() {
    const articleData = await article();
    return articleData;
  }

  export default async function ArticleCards() {
    const articles = await getArticles();

    return (
      <div className='flex flex-col gap-10'>
        {articles.map((item, index) => (
          <Link href={`/article/[id]`} as={`/article/${item.id}`} key={index}>
            <div className='flex w-[970px] justify-between cursor-pointer'>
              <div className='flex flex-col gap-6 w-[610px]'>
                <div className='flex flex-row gap-2 items-center'>
                  <h1 className='font-semibold font-montserrat bg-blue-300 px-[12px] py-[9px] text-white rounded-md'>
                    {item.category}
                  </h1>
                  <h2 className='font-montserrat'>{item.createAt}</h2>
                </div>
                <div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold font-montserrat text-xl text-textPrimary'>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
              <Image
                className='h-[210px] w-[300px] object-cover rounded-md'
                src={item.image}
                alt={item.title}
                width={300}
                height={210}
              />
            </div>
          </Link>
        ))}
      </div>
    );
  }
