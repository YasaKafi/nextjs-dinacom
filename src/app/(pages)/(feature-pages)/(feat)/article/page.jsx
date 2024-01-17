import React from "react";
import ArticleCards from "./components/ArticleCards";
import {
  bgHeroBuilding,
  bgHeroDetail,
  courseHeaderBanner,
  profileBanner,
} from "@/app/lib/utils/images";
import Image from "next/image";
import SearchArticle from "./components/SearchArticle";
import ChipCategoryArticle from "./components/ChipCategoryArticle";

 export default async function ArticlePage() {


  const articleCategory =[
    {
      title : "Job"
    },
    {
      title : "Technology"
    },
    {
      title : "Money"
    },
    {
      title : "Art"
    },
    {
      title : "Productivity"
    },
    {
      title : "Development"
    },
    {
      title : "Business"
    }
  ]

  return (
    <div className="mt-[63px] px-16 overflow-x-hidden w-screen">
      <div className="w-[970px]">
        <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end ">
          Artikel
        </h1>
        <hr className="w-full border mt-6" />
      </div>
      <div className="my-[59px] flex justify-between gap-12">
        <ArticleCards/>
        <div className="flex flex-col gap-6">
          <SearchArticle />
          <div>
            <h1 className="text-lg font-montserrat mb-3">Rekomendasi Topik</h1>
            <div className="flex flex-wrap gap-3">
              {articleCategory.map((article, index) => (
                <ChipCategoryArticle key={index} {...article} />
              ))};
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
