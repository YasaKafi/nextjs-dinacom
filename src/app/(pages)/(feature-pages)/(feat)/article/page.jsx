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

export default function ArticlePage() {
  const articlesData = [
    {
      category: "JOB",
      date: "AUGUST 13, 2021",
      title:
        "JOBFAIR 2024 TELAH TIBA, 100 JUTA LOWONGAN PEKERJAAN DIBUTUHKAN!!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam repellendus nulla expedita est exercitationem officia delectus ullam libero facere.",
      imageUrl:
        "https://www.investopedia.com/thmb/B-zS06NuMwi1uB3gv8mGTY01rP4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-656544055-19ddbae5e1e1448db35b3969022eb3d0.jpg",
    },
    {
      category: "JOB",
      date: "AUGUST 13, 2021",
      title:
        "JOBFAIR 2024 TELAH TIBA, 100 JUTA LOWONGAN PEKERJAAN DIBUTUHKAN!!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam repellendus nulla expedita est exercitationem officia delectus ullam libero facere.",
      imageUrl:
        "https://www.investopedia.com/thmb/B-zS06NuMwi1uB3gv8mGTY01rP4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-656544055-19ddbae5e1e1448db35b3969022eb3d0.jpg",
    },
    {
      category: "JOB",
      date: "AUGUST 13, 2021",
      title:
        "JOBFAIR 2024 TELAH TIBA, 100 JUTA LOWONGAN PEKERJAAN DIBUTUHKAN!!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam repellendus nulla expedita est exercitationem officia delectus ullam libero facere.",
      imageUrl:
        "https://www.investopedia.com/thmb/B-zS06NuMwi1uB3gv8mGTY01rP4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-656544055-19ddbae5e1e1448db35b3969022eb3d0.jpg",
    },
    {
      category: "JOB",
      date: "AUGUST 13, 2021",
      title:
        "JOBFAIR 2024 TELAH TIBA, 100 JUTA LOWONGAN PEKERJAAN DIBUTUHKAN!!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam repellendus nulla expedita est exercitationem officia delectus ullam libero facere.",
      imageUrl:
        "https://www.investopedia.com/thmb/B-zS06NuMwi1uB3gv8mGTY01rP4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-656544055-19ddbae5e1e1448db35b3969022eb3d0.jpg",
    },
  ];


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
    <div className="mt-[63px] mx-auto overflow-x-hidden w-[1335px]">
      <div className="w-[970px]">
        <h1 className="font-montserrat font-bold text-4xl text-textPrimary items-end ">
          Artikel
        </h1>
        <hr className="w-full border mt-6" />
      </div>
      <div className="my-[59px] flex gap-5">
        <div className="flex flex-col gap-4">
          {articlesData.map((article, index) => (
            <ArticleCards key={index} {...article} />
          ))}
        </div>
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
