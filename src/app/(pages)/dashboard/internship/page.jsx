"use client";
import React from "react";
import Image from "next/image";
import { coursesWork, decorationBox } from "@/app/lib/utils/images";
import InternshipCard from "./components/card-internship";

export default function InternshipPage() {
    const posts = [
      {
        id: 1,
        title: "Digital Marketing Nuri",
        company: "PT Nuri Gaya Citra",
        department: "Digital Marketing",
        imageUrl: coursesWork,
        presentase: 50,
      },
      {
        id: 2,
        title: "Digital Marketing Gojek",
        company: "PT Gojek",
        department: "Digital Marketing",
        imageUrl: coursesWork,
        presentase: 100,
      },
      // Add more posts as needed
    ];
  
    return (
      <main className="w-full h-full">
        <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-16 gap-2 overflow-auto px-6 lg:px-8 pt-12 lg:pt-16">
          {posts.map((post) => (
            <InternshipCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    );
  }
