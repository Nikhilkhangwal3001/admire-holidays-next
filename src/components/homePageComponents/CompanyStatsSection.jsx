"use client";
import React, { useState, useEffect } from "react";
import companyStatsData from "@/data/comapanyStatsData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CompanyStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5, // Percentage of the element that needs to be visible for the animation to trigger
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <section
      className="bg-[#155146] bg-cover bg-center h-fit py-12"
      // style={{
      //   backgroundImage: "url('cmpnstats.jpg')",
      // }}
      ref={ref} // Attach the ref to the section
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-10 px-5 ">
        {companyStatsData.map((item, i) => (
          <div
            className="flex flex-col justify-center items-center gap-10 "
            key={i}
          >
            <div
              className="px-8 py-6 flex justify-center items-center bg-gray-800 bg-opacity-20 transform hover:scale-110 transition-transform duration-300"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              {item.icon}
            </div>
            <div className="text-5xl text-white font-medium">
              <CountUp
                start={isVisible ? 0 : null}
                end={item.numbers}
                duration={2.5}
              />
            </div>
            <div className="text-sm text-gray-200 -mt-8 font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStatsSection;
