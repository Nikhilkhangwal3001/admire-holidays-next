"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import conf from "../../../conf/conf";
const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [exclusivePackages, setExclusivePackages] = useState([]);

  useEffect(() => {
    async function getExclusiveItineraries() {
      try {
        const { data } = await axios.get(
          `${conf.laravelBaseUrl}/public-itineraries-exclusive`
        );


        console.log("Exclusivecarousel", data);

        setExclusivePackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getExclusiveItineraries();
  }, []);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": { slides: { origin: "auto", perView: 1, spacing: 8 } },
          "(min-width: 768px)": { slides: { origin: "auto", perView: 2, spacing: 8 } },
          "(min-width: 1024px)": { slides: { origin: "auto", perView: 4, spacing: 8 } },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        if (keenSlider.current) {
          keenSlider.current.next();
        }
      }, 10000);
    }

    return () => {
      if (keenSlider.current) {
        keenSlider.current.destroy();
        keenSlider.current = null;
      }
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [exclusivePackages]);

  return (
    <section className="mb-6 py-10">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Exclusive Package
          </h2>
        </div>

        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {exclusivePackages.map((itinerary, i) => (
             <div className="keen-slider__slide h-full" key={i}>
             <div className="w-[250px] h-[300px] flex flex-col rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 items-center relative">
               <div className="relative w-full h-40 rounded-lg overflow-hidden">
                 <div className="absolute top-8 left-1 bg-yellow-300 text-black font-bold px-2 py-1 rounded-md text-xs z-10">
                   Discount: {itinerary.discount}
                 </div>
                 <Image
                   src={conf.laravelBaseUrl + "/" + itinerary?.destination_thumbnail}
                   alt={itinerary.title}
                   fill
                   className="object-cover"
                 />
               </div>
           
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="p-2 bg-white rounded-lg shadow-md border flex-grow flex flex-col justify-between w-full"
               >
                 <div className="relative z-10">
                   <motion.h2
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     className="text-sm font-bold text-[#4D456B] line-clamp-2"
                   >
                     {itinerary.title}
                   </motion.h2>
                   <p className="text-xs line-clamp-1 font-semibold text-[#CF1E27]">
                     {itinerary.feedback}
                   </p>
                   <p className="text-xs text-gray-700">{itinerary.duration}</p>
                 </div>
           
                 <div className="flex gap-2 items-center mt-2">
                   <button className="text-lg">📞</button>
                   {itinerary.link ? (
                     <Link className="w-full" href={itinerary.link}>
                       <motion.button
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                         className="w-full px-4 py-1 text-white rounded-md text-xs transition-all"
                         initial={{ scale: 1 }}
                         animate={{
                           backgroundColor: isHovered ? "#CF1E27" : "#E69233",
                           scale: isHovered ? 1.05 : 1,
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         Know More
                       </motion.button>
                     </Link>
                   ) : (
                     <button
                       disabled
                       className="w-full px-4 py-1 bg-gray-400 text-white rounded-md text-xs cursor-pointer"
                     >
                       See More
                     </button>
                   )}
                 </div>
               </motion.div>
             </div>
           </div>
           
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;
