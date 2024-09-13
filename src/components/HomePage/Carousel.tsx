"use client";

import React, { useState } from "react";
import ArrowRightSlider from "../../../public/icons/arrow-right-slider.svg";
import { Button } from "../shared/Button";
import { CaseCard, CaseCardItem } from "./CaseCard";

export const Carousel = ({ items }: { items: CaseCardItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const totalItems = items.length;

  // Function to get the index of an item with looping (infinite scroll)
  const getIndex = (index: number) => {
    return (index + totalItems) % totalItems;
  };

  // Move to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
  };

  // Move to the previous card
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Cards wrapper */}
      <div className="relative flex items-center justify-center mb-[40px]">
        {/* Cards (3 visible) */}
        <div className="flex justify-between gap-[40px]">
          <div className="my-auto transform transition-transform duration-300">
            <CaseCard
              isActive={false}
              item={items[getIndex(currentIndex - 1)]}
            />
            {/* <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
              {items[getIndex(currentIndex - 1)]}
            </div> */}
          </div>

          <div className="my-auto transition-transform duration-300">
            {/* <div className="p-6 bg-blue-500 shadow-xl rounded-lg text-white">
              {items[getIndex(currentIndex)]}
            </div> */}
            <CaseCard isActive item={items[getIndex(currentIndex)]} />
          </div>

          <div className="my-auto transform transition-transform duration-300">
            <CaseCard
              isActive={false}
              item={items[getIndex(currentIndex + 1)]}
            />
            {/* <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
              {items[getIndex(currentIndex + 1)]}
            </div> */}
          </div>
        </div>
      </div>
      <div className="slider flex gap-[30px]">
        <Button variant="round" onClick={handlePrev}>
          <ArrowRightSlider className=" rotate-180" />
        </Button>
        <Button variant="round" onClick={handleNext}>
          <ArrowRightSlider />
        </Button>
      </div>
    </div>
  );
};
