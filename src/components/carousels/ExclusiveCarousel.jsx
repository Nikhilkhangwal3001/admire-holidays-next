"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import exclusivePackage from "@/data/exclusivePackage";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Image index state for all itineraries
  const [imageIndexes, setImageIndexes] = useState(
    Array(exclusivePackage.length).fill(0)
  );

  // Initialize KeenSlider
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

      // Set up auto slide every 3 seconds
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
  }, []);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) =>
          index === exclusivePackage[i].imageUrl.length - 1 ? 0 : index + 1
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-6 py-10">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Exclusive Package
          </h2>

          {/* Mobile Slide Controls */}
          <div className="flex  justify-center gap-4 mt-8">
            <button
              aria-label="Previous slide"
              onClick={() => keenSlider.current?.prev()}
              className="rounded-full bg-[#E69233] p-4 text-white"
            >
              ◀
            </button>
            <button
              aria-label="Next slide"
              onClick={() => keenSlider.current?.next()}
              className="rounded-full bg-[#E69233] p-4 text-white"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {exclusivePackage.length > 0 &&
              exclusivePackage.map((itinerary, i) => (
                <div className="keen-slider__slide" key={i}>
                  <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 items-center min-h-[220px]">
                    {/* Right Side */}
                    <div className="w-full h-full md:w-full md:h-full overflow-hidden rounded-lg">
                      <div className="relative w-full h-64">
                        <Image
                          src={itinerary.imageUrl[imageIndexes[i]]}
                          alt={itinerary.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 relative flex-1 pr-4 bg-white rounded-lg shadow-lg overflow-hidden border-2 "
                    >
                      {/* Content */}
                      <div className="relative z-10 ">
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-[13px] font-semibold text-[#CF1E27]">
                            {itinerary.feedback}
                          </p>
                          <p>{itinerary.days}</p>
                        </div>
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-lg font-bold text-[#4D456B]"
                        >
                          {itinerary.title}
                        </motion.h2>
                        <p className="text-[13px] font-semibold ">
                          Discount {itinerary.discount}
                        </p>

                        <a href="tel:1800-121-4252">
                          <div className="flex gap-4 items-center mt-4">
                            <button className="text-xl">📞</button>

                            <Link className="w-full" href={itinerary.link}>
                              <motion.button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="w-full md:px-8 py-2 text-white rounded-lg transition-all"
                                initial={{ scale: 1 }}
                                animate={{
                                  backgroundColor: isHovered
                                    ? "#CF1E27"
                                    : "#E69233",
                                  scale: isHovered ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                Know More
                              </motion.button>
                            </Link>
                          </div>
                        </a>
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
