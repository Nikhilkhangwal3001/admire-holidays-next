"use client";
import React from "react";
import { CgBox } from "react-icons/cg";

const EmptyProductCategory = () => {
  return (
    <div className="max-w-7xl flex-col flex gap-5 mx-auto px-5 my-20">
      <div className="h-[2px] w-full bg-red-500"></div>
      <div className="flex gap-5 items-center">
        <CgBox size={30} />
        <p>No products were found matching your selection.</p>
      </div>
    </div>
  );
};

export default EmptyProductCategory;
