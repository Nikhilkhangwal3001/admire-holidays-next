"use client";
import React from "react";
// import DestinationMaker from "./DestinationMaker";
const HeroSection = () => {
  return (
    <section className="relative w-full md:h-[611px] overflow-hidden">
    {/* Background Video Container */}
    <div className="absolute inset-0 w-full h-full z-[-1">
      <video
        className="absolute w-full h-full object-cover"
        src="/Video1.mp4"
        autoPlay
        loop
        muted
      />
      
    </div>
  
    {/* Content Section */}
    <div className="relative flex pt-32 items-center lg:gap-4 gap-10 lg:flex-row flex-col justify-start">
      <div className="flex flex-col gap-10 py-10 lg:pl-32 px-5">
        <p className="text-white text-xl font-LaBelle">Travel Around The World</p>
        <h1 className="lg:text-6xl  text-white md:text-5xl sm:block text-2xl font-bold">
          Discover the <br /> most engaging <br /> places
        </h1>
        {/* <p className="text-xl text-white font-normal">
          Less planning, 50,000 trips are ready for you.
        </p> */}
        {/* <DestinationMaker /> */}
      </div>
    </div>
  </section>
  

  );
};

export default HeroSection;
