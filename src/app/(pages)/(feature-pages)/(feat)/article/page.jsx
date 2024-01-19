import React from "react";
import ArticleCards from "./components/ArticleCards";
import SearchArticle from "./components/SearchArticle";
import ChipCategoryArticle from "./components/ChipCategoryArticle";
import article from "@/app/lib/services/endpoint/api/article";

 export default async function ArticlePage({searchParams}) {
     const search =
         typeof searchParams.search === 'string' ? searchParams.search : "";

     const category = typeof searchParams.category === 'string' ? searchParams.category : "";

     const articles = await article(search, category);

  return (
    <div className="mt-[63px] px-16 overflow-x-hidden w-screen">
      <div className="w-[970px]">
        <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end ">
          Artikel
        </h1>
        <hr className="w-full border mt-6" />
      </div>
      <div className="my-[59px] flex justify-between gap-12">
        <ArticleCards data={articles}/>
        <div className="flex flex-col gap-6">
          <SearchArticle />
          <div>
            <h1 className="text-lg font-montserrat mb-3">Rekomendasi Topik</h1>
            <ChipCategoryArticle/>
          </div>
        </div>
      </div>
    </div>
  );
}
