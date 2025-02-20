import React from "react";
import { FaMountain, FaPlaceOfWorship, FaRegSmileBeam } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdModeOfTravel, MdSentimentVerySatisfied } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center text-white">
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

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Why Choose Admire Holidays?
        </h1>

        {/* Features List */}
        <div className="flex flex-col space-y-8 text-lg md:text-xl">
          <div className="flex items-center space-x-3">
            <GrUserExpert size={30} />
            <p>Unparalleled Experience - Over 8 years of crafting unforgettable vacations.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPlaceOfWorship size={30} />
            <p>Wide Range of Destinations - 1000+ domestic & international locations.</p>
          </div>
          <div className="flex items-center space-x-3">
            <MdSentimentVerySatisfied size={30} />
            <p>Customer Satisfaction - Rated 4.9 stars by our travelers.</p>
          </div>
          <div className="flex items-center space-x-3">
            <MdModeOfTravel size={30} />
            <p>Seamless Travel - Stress-free & smooth experiences guaranteed.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMountain size={30} />
            <p>Serenity in Nature - Experience the beauty of Horsley Hills.</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaRegSmileBeam size={30} />
            <p>Unforgettable Memories - Exclusive packages for unique experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
