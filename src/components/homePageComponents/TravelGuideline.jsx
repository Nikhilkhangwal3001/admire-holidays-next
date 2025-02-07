import React from "react";
import { TiTick } from "react-icons/ti";
const TravelGuideline = () => {
  return (
    <section
      className="py-10  bg-cover mb-10"
      style={{
        backgroundImage: "url('overlayTheme1.png')",
      }}
    >
      <div className="max-w-7xl md:flex-row flex-col flex gap-10 justify-between items-center px-5 mx-auto sm:py-20 py-5   ">
        <div className="flex flex-col gap-5 ">
          <img src="dial.png" alt="" className="h-32 w-24" />
          <p className="font-light">Take a Hour</p>
          <h5 className="lg:text-4xl text-2xl font-bold">
            Discover Our Travel <br /> Guideline With
          </h5>
          <p className="font-light">Admire Holidays</p>
          <p className="flex font-light items-center gap-3">
            <TiTick size={30} color="#00BB98" />
            Gift an Experience
          </p>
          <p className="flex font-light  items-center gap-3">
            <TiTick size={30} color="#00BB98" />
            Latest Travel Trends
          </p>
          <p className="flex font-light  items-center gap-3">
            <TiTick size={30} color="#00BB98" />
            Destinations Near You
          </p>
        </div>
        <div className="flex  items-center md:flex-row flex-col md:gap-0 gap-10 relative">
          <div className="flex md:absolute static lg:left-[-300px] md:left-[-100px] border-[2px] justify-center items-center h-fit w-fit border-white md:rounded-[190px]  rounded-[80px]">
            <img
              src="destination-03-306x306.jpg"
              alt=""
              className="md:rounded-[180px] rounded-[80px] h-full w-full  lg:w-[360px] md:w-[200px] md:h-[300px] lg:h-[470px]"
            />
          </div>
          <div className="border-[10px] h-fit w-fit border-white md:rounded-[190px] rounded-[80px]">
            <img
              src="destination-02-306x306.jpg"
              alt=""
              className="md:rounded-[180px] rounded-[70px] lg:w-[450px] lg:h-[650px] md:w-[350px] h-full w-full md:h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuideline;
