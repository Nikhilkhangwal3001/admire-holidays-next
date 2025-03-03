"use client";
import React, { useState, useEffect } from "react";
import Accordian from "./Accordian";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaCarSide, FaHome, FaPlane, FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import PackageOptions from "./PackageOptions";
import reviewData from "@/data/reviewData";
import { motion } from "framer-motion";

const ProductDetailLeft = ({ overview, itinerary, inclusions, mapSrc, reviewHeading, exclusions, packageOptions, overView }) => {
  const [openOverview, setOpenOverview] = useState(false);

  const handleOverview = () => {
    setOpenOverview(!openOverview);
  };

  useEffect(() => {
    console.log(overview);
  }, [overview]); // Fixed missing dependency issue

  return (
    <div className="flex my-10 lg:w-[100%] rounded-lg w-full flex-col gap-6">
      <div className="py-20 px-6 bg-gradient-to-b from-[#FFf] to-[#EA9125] text-white rounded-xl shadow-lg">
        <motion.h5
          className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-red-600 tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Overview
        </motion.h5>

        {overView && (
          <div className="flex flex-col gap-14 max-w-6xl mx-auto">
            {overView.slice(0, openOverview ? overView.length : 2).map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col p-6 bg-white text-gray-900 rounded-lg shadow-md transform hover:scale-105 transition duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-2xl font-semibold text-[#E69326]">{item.heading}</p>
                <p className="text-md font-light mt-2">{item.text}</p>
              </motion.div>
            ))}

            <motion.div className="flex justify-center mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <button onClick={handleOverview} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-[#E04A4A] transition duration-300">
                {openOverview ? "Read Less ⬆" : "Read More ⬇"}
              </button>
            </motion.div>
          </div>
        )}
      </div>
      {overview && <p>{overview}</p>}
    </div>
  );
};

export default ProductDetailLeft;
