"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticDestination from "@/data/weekendTripStateData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    domesticDestination.map(() => 0)
  );

  useEffect(() => {
    console.log("Initializing KeenSlider...");
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 8,
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: { origin: "auto", perView: 1, spacing: 8 },
          },
          "(min-width: 768px)": {
            slides: { origin: "auto", perView: 2, spacing: 8 },
          },
          "(min-width: 1024px)": {
            slides: { origin: "auto", perView: 3, spacing: 12 },
          },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        console.log("Auto sliding to next slide");
        keenSlider.current?.next();
      }, 10000);
    }

    return () => {
      console.log("Destroying KeenSlider and clearing intervals...");
      keenSlider.current?.destroy();
      keenSlider.current = null;
      clearInterval(autoSlideInterval.current);
    };
  }, []);

  useEffect(() => {
    console.log("Starting image slideshow...");
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => {
        console.log("Updating image indexes...", prevIndexes);
        return prevIndexes.map((index, i) =>
          index === domesticDestination[i].imageUrl.length - 1 ? 0 : index + 1
        );
      });
    }, 3000);

    return () => {
      console.log("Clearing image slideshow interval...");
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="mt-28">
      <div className="mx-auto relative max-w-[1340px] mt-36 mb-36 px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Weekend Trip Trending Packages
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <button
              aria-label="Previous slide"
              onClick={() => {
                console.log("Previous slide clicked");
                keenSlider.current?.prev();
              }}
              className="rounded-full bg-[#E69233] p-4 text-white"
            >
              ◀
            </button>
            <button
              aria-label="Next slide"
              onClick={() => {
                console.log("Next slide clicked");
                keenSlider.current?.next();
              }}
              className="rounded-full bg-[#E69233] p-4 text-white"
            >
              ▶
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {domesticDestination.map((item, i) => (
              <div className="keen-slider__slide" key={i}>
                <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 items-center min-h-[220px] relative">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <div className="absolute top-12 left-1 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm z-10">
                      Discount:{item.Discount}
                    </div>
                    <Image
                      src={item.imageUrl[currentImageIndexes[i]]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={300}
                      onError={(e) => console.error("Image failed to load:", e)}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 relative flex-1 pr-4 bg-white rounded-lg shadow-lg overflow-hidden border-2"
                  >
                    <div className="relative z-10">
                      <motion.h2
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg font-bold text-[#4D456B]"
                      >
                        {item.title}
                      </motion.h2>
                      <p className="text-[13px] font-semibold text-[#CF1E27]">
                        {item.feedback}
                      </p>
                      <p>{item.days}</p>
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
