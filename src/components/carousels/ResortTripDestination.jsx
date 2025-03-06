"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const dummyData = [
  { imageUrl: ["/dummy1.jpg"], title: "Resort 1", discount: "10%" },
  { imageUrl: ["/dummy2.jpg"], title: "Resort 2", discount: "15%" },
  { imageUrl: ["/dummy3.jpg"], title: "Resort 3", discount: "20%" },
];

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    dummyData.map(() => 0)
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

  return (
    <section>
      <div className="mx-auto max-w-[1340px] mt-36 mb-36 px-4">
        <h2 className="text-center text-3xl font-bold">Your Perfect Resort</h2>
        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider mt-8">
            {dummyData.map((item, i) => (
              <div className="keen-slider__slide" key={i}>
                <div className="max-w-sm rounded-lg shadow-lg p-2 relative">
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm z-10">
                    Discount:{item.discount}
                  </div>
                  <Image
                    src={item.imageUrl[currentImageIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={300}
                    onError={(e) => console.error("Image failed to load:", e)}
                  />
                  <motion.div className="p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p>Discount {item.discount}</p>
                    <Link href="#">
                      <motion.button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-full py-2 text-white rounded-lg"
                        animate={{ backgroundColor: isHovered ? "#CF1E27" : "#E69233" }}
                        transition={{ duration: 0.3 }}
                      >
                        Know More
                      </motion.button>
                    </Link>
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
