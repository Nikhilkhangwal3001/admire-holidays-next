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
    icon: <GrUserExpert size={24} />,
    title: "Unparalleled Experience",
    desc: "Over 8 years of crafting unforgettable vacations.",
    color: "bg-yellow-400",
  },
  {
    icon: <FaPlaceOfWorship size={24} />,
    title: "Wide Range of Destinations",
    desc: "1000+ domestic & international locations.",
    color: "bg-green-400",
  },
  {
    icon: <MdSentimentVerySatisfied size={24} />,
    title: "Customer Satisfaction",
    desc: "Rated 4.9 stars by our travelers.",
    color: "bg-blue-400",
  },
  {
    icon: <MdModeOfTravel size={24} />,
    title: "Seamless Travel",
    desc: "Stress-free & smooth experiences guaranteed.",
    color: "bg-red-400",
  },
  {
    icon: <FaMountain size={24} />,
    title: "Serenity in Nature",
    desc: "Experience the beauty of Horsley Hills.",
    color: "bg-purple-500",
  },
  {
    icon: <FaRegSmileBeam size={24} />,
    title: "Unforgettable Memories",
    desc: "Exclusive packages for unique experiences.",
    color: "bg-pink-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
      >
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-20"
        >
          Why Choose <span className="text-yellow-400">Admire Holidays?</span>
        </motion.h1>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-pink-500 animate-pulse rounded-full z-0" />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 w-full flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16 md:pr-8" : "md:pl-8 md:pr-16"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-200">{feature.desc}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 rounded-full shadow-lg p-3 backdrop-blur-xl z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-white/20 animate-glow-slow ${feature.color}`}
                >
                  {feature.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
