import React from "react";
import { FaMountain, FaPlaceOfWorship, FaRegSmileBeam } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdModeOfTravel, MdSentimentVerySatisfied } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <div className="">
      <section
        id="features"
        className="relative block px-6 py-20 sm:py-36 md:px-10 "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-center   md:text-5xl text-2xl  ">
            Why Choose Admire Holidays?
          </h1>
        </div>

        {/* New Section: Why Choose Admire Holidays */}
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 md:grid-cols-3">
          {/* First Point */}
          <div className="rounded-md  md:p-8 sm:p-4 p-3 text-center  border-2 border-red-500 bg-red-500 text-white ">
            <div className="flex justify-center w-full items-center">
              <GrUserExpert size={30} color="white" className="text-center" />
            </div>
            <h3 className="mt-6  font-bold text-lg">Unparalleled Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              With over 8 years in business, we have perfected the art of
              crafting unforgettable vacations.
            </p>
          </div>

          {/* Second Point */}
          <div className="rounded-md border bg-[#f2901c] md:p-8 sm:p-4 p-3 text-center shadow">
            <div className="flex justify-center w-full items-center">
              <FaPlaceOfWorship
                size={30}
                color="black"
                className="text-center"
              />
            </div>

            <h3 className="mt-6  font-bold text-lg">
              Wide Range of Destinations
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              Explore over 1000 destinations covered, both domestic and
              international.
            </p>
          </div>

          {/* Third Point */}
          <div className="rounded-md border md:p-8 sm:p-4 p-3 bg-[#3b2d5a] text-white text-center shadow">
            <div className="flex justify-center w-full items-center">
              <MdSentimentVerySatisfied
                size={30}
                color="white"
                className="text-center"
              />
            </div>

            <h3 className="mt-6  font-bold text-lg">Customer Satisfaction</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Rated 4.9 stars by our satisfied customers.
            </p>
          </div>

          {/* Fourth Point */}
          <div className="rounded-md border md:p-8 sm:p-4 p-3 text-center text-white bg-[#a21f23] shadow">
            <div className="flex justify-center w-full items-center">
              <MdModeOfTravel size={30} color="white" className="text-center" />
            </div>
            <h3 className="mt-6  font-bold text-lg">Seamless Travel</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
              Say goodbye to stress and hello to seamless travel experiences.
            </p>
          </div>

          <div className="rounded-md border md:p-8 sm:p-4 p-3 text-center text-white bg-[#3b2d5a] shadow">
            <div className="flex justify-center w-full items-center">
              <FaMountain size={30} color="white" className="text-center" />
            </div>
            <h3 className="mt-6 font-bold text-lg">Serenity in Nature</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              Immerse yourself in the serene beauty of Horsley Hills with
              picturesque landscapes and a tranquil environment.
            </p>
          </div>

          {/* Sixth Point - Update to match Horsley Hills */}
          <div className="rounded-md border md:p-8 sm:p-4 p-3 text-center text-white bg-red-500 shadow">
            <div className="flex justify-center w-full items-center">
              <FaRegSmileBeam size={30} color="white" className="text-center" />
            </div>
            <h3 className="mt-6 font-bold text-lg">Unforgettable Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              Create lasting memories with our exclusive Horsley Hills travel
              package, designed for an unforgettable experience.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default FeaturesSection;
