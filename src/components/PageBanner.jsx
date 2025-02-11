import React from "react";

const PageBanner = ({ heading, text }) => {
  return (
    <section className="h-[611px] relative">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video2.mp4" 
        autoPlay
        loop
        muted
      ></video>
      
      <div className="absolute  flex justify-center items-center flex-col gap-4 bg-opacity-50 w-full h-full">
        <h1 className="text-xl font-semibold text-white text-center">
          {heading}
        </h1>
        <p className="text-base text-white text-center">{text}</p>
      </div>
    </section>
  );
};

export default PageBanner;
