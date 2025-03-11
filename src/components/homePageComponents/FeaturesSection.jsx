"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaMountain,
  FaPlaceOfWorship,
  FaRegSmileBeam,
} from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdModeOfTravel, MdSentimentVerySatisfied } from "react-icons/md";

const features = [
  {
    icon: <GrUserExpert size={40} className="text-yellow-400" />,
    text: "Unparalleled Experience - Over 8 years of crafting unforgettable vacations.",
  },
  {
    icon: <FaPlaceOfWorship size={40} className="text-green-400" />,
    text: "Wide Range of Destinations - 1000+ domestic & international locations.",
  },
  {
    icon: <MdSentimentVerySatisfied size={40} className="text-blue-400" />,
    text: "Customer Satisfaction - Rated 4.9 stars by our travelers.",
  },
  {
    icon: <MdModeOfTravel size={40} className="text-red-400" />,
    text: "Seamless Travel - Stress-free & smooth experiences guaranteed.",
  },
  {
    icon: <FaMountain size={40} className="text-purple-400" />,
    text: "Serenity in Nature - Experience the beauty of Horsley Hills.",
  },
  {
    icon: <FaRegSmileBeam size={40} className="text-pink-400" />,
    text: "Unforgettable Memories - Exclusive packages for unique experiences.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center text-white px-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  -z-10"></div>

      {/* Content */}
      <div className="relative max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-red-600"
        >
          Why Choose <span className="text-yellow-400">Admire Holidays?</span>
        </motion.h1>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              {feature.icon}
              <p className="text-black">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
