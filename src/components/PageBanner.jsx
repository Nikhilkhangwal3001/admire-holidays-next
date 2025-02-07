import React from "react";

const PageBanner = ({ heading, text }) => {
  return (
    <section
      className="h-96  relative bg-cover bg-center"
      style={{
        backgroundImage: `url(
          "/productCategoryBanner.jpg"
        )`,
      }}
    >
      <div className="absolute bg-black flex justify-center items-center flex-col gap-4 bg-opacity-50 w-full h-full">
        <h1 className="text-xl font-semibold  text-white text-center">
          {heading}
        </h1>
        <p className="text-base  text-white text-center">{text}</p>
      </div>
    </section>
  );
};

export default PageBanner;
