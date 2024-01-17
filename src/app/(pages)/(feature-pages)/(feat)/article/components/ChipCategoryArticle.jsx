"use client"

import { useState } from "react";
import React from "react";


const ChipCategoryArticle = () => {
  const articleCategory = [
    { title: "Job" },
    { title: "Technology" },
    { title: "Money" },
    { title: "Art" },
    { title: "Data" },
    { title: "Development" },
    { title: "Business" },
    { title: "Healthcare" },
  ];

  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (index) => {
    setSelectedChip(index === selectedChip ? null : index);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {articleCategory.map((article, index) => (
          <div
            key={index}
            className={`px-4 py-2 border font-montserrat text-base rounded-full ${
              index === selectedChip ? "bg-gray-200" : "border-gray-300"
            }`}
            onClick={() => handleChipClick(index)}
          >
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipCategoryArticle;
