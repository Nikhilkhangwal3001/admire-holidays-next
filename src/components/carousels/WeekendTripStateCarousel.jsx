"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import domesticDestination from "@/data/weekendTrip";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(domesticDestination.length).fill(0)
  );

  useEffect(() => {
    console.log("Initializing KeenSlider...");
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: { origin: "center", perView: 1, spacing: 8 },
        breakpoints: {
          "(min-width: 288px)": { slides: { perView: 1, spacing: 8 } },
          "(min-width: 768px)": { slides: { perView: 2, spacing: 8 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 12 } },
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
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Weekend Getaway Packages<br /><p className="text-[15px] mt-2 text-red-600 text-center">Cultural tours  in  India</p>
          </h2>
        </div>

        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {domesticDestination.map((item, i) => {
              const imageUrl = item.imageUrl[currentImageIndexes[i]];
              const validImageUrl = typeof imageUrl === "string" ? (imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`) : "/placeholder.jpg";

              return (
                <div className="keen-slider__slide" key={i}>
                  <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 items-center min-h-[220px] relative">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <div className="absolute top-12 left-1 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm z-10">
                        Discount:{item.Discount}
                      </div>
                      <Image
                        src={validImageUrl}
                        alt={item.title || "Image"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={400}
                        height={250}
                        onError={(e) => console.error("Image failed to load:", e)}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 bg-white rounded-lg shadow-lg border-2"
                    >
                      <div className="relative z-10">
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-lg font-bold text-[#4D456B]"
                        >
                          {item.about}
                        </motion.h2>
                        <p className="text-[13px] font-semibold text-[#CF1E27]">
                          {item.feedback}
                        </p>
                        <p className="">{item.days}</p>
                        <div className="flex gap-4 items-center mt-4">
                          <a href="tel:1800-121-4252" className="text-xl">📞</a>
                          <Link className="w-full" href={item.url}>
                            <motion.button
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              className="w-full md:px-8 py-2 text-white rounded-lg transition-all"
                              initial={{ scale: 1 }}
                              animate={{
                                backgroundColor: isHovered ? "#CF1E27" : "#E69233",
                                scale: isHovered ? 1.05 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                              onClick={() => console.log("Know More clicked for:", item.title)}
                            >
                              Know More
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;
