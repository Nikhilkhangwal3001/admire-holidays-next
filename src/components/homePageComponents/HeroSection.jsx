"use client";
import React from "react";

import DestinationMaker from "./DestinationMaker";
const HeroSection = () => {
  return (
    <section
      className=" relative top-0 pb-12 w-full  h-fit  bg-[#def5ff]  bg-cover"
      style={{
        backgroundImage: "url('/heroSectionBanner5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex pt-32 items-center lg:gap-4 gap-10 lg:flex-row flex-col justify-start">
        <div className="flex flex-col gap-10 py-10 lg:pl-32 px-5">
          <p className="text-white white text-xl  font-LaBelle  ">
            Travel Around The World
          </p>
          <h1 className="lg:text-6xl text-white md:text-5xl text-4xl font-bold">
            Discover the <br /> most engaging <br /> places
          </h1>
          <p className="text-xl text-white font-normal">
            Less planning 50,000 trips are ready for you.
          </p>
          <DestinationMaker />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
