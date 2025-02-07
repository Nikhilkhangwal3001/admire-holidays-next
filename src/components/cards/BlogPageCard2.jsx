"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogPageCard2 = ({ imageUrl, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex shadow-lg rounded-xl flex-col gap-1 border border-gray-200 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-48 rounded-t-xl  transition-transform duration-1000 ${
            isHovered ? "scale-110 filter grayscale" : ""
          }`}
        />
        <div
          className={`absolute h-48 inset-0 top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-end p-5 transition-opacity duration-1000 ${
            isHovered
              ? "bg-black bg-opacity-60 opacity-100 scale-110"
              : "opacity-0"
          }`}
        ></div>
      </div>
      <div className="flex flex-col py-5 px-5 gap-4">
        <p
          className={`sm:text-base text-lg font-medium transition-colors text-black duration-1000 `}
        >
          {title}
        </p>
        {link && ( // Check if link is not undefined
          <Link
            className={`flex items-center text-base gap-5 transition-colors duration-1000 text-black`}
            href={link}
          >
            Read More <FaLongArrowAltRight size={25} color={"black"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPageCard2;
