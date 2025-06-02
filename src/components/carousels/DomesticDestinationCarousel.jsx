"use client";

import React, { useEffect, useRef, useState } from "react";
import { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const API_URL = "https://admiredashboard.theholistay.in/public-domestic-destinations-images";
const BASE_URL = "https://admiredashboard.theholistay.in/";

const TrendingDestination = () => {
  const sliderRef = useRef(null);
  const keenRef = useRef(null);
  const autoSlideInterval = useRef(null);
  const [destinations, setDestinations] = useState([]);

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(API_URL);
        setDestinations(res.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    }
    fetchData();
  }, []);

  // Main carousel
  useEffect(() => {
    if (sliderRef.current && destinations.length > 0 && !keenRef.current) {
      const KeenSlider = require("keen-slider").default;

      keenRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: { perView: 1, spacing: 15 },
        breakpoints: {
          "(min-width: 640px)": { slides: { perView: 1.5, spacing: 20 } },
          "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        keenRef.current?.next();
      }, 8000);
    }

    return () => {
      keenRef.current?.destroy();
      keenRef.current = null;
      clearInterval(autoSlideInterval.current);
    };
  }, [destinations]);

  return (
    <section className="mt-28">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-[#261F43] md:text-5xl text-3xl font-bold">Domestic Package</h2>
          <p className="text-[15px] mt-2 text-red-600">Budget packages in India</p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {destinations.map((item, index) => (
            <div className="keen-slider__slide" key={index}>
              <Link href={`trending-destination/${item.destination}`} className="block h-full">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                  
                  {/* Rotating Image Carousel */}
                  <div className="w-full h-64 overflow-hidden relative">
                    <AutoImageSlider images={item.public_images} />
                  </div>

                  {/* Info section */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#4D456B]">{item.destination}</h3>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {item.public_images.slice(0, 3).map((img, i) => (
                          <Image
                            key={i}
                            src={`${BASE_URL}${img}`}
                            alt={`Image ${i + 1}`}
                            width={100}
                            height={100}
                            className="object-cover w-full h-20 rounded"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                      <span className="text-xl">📞</span>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#CF1E27" }}
                        className="flex-1 px-4 py-2 bg-[#E69233] text-white font-semibold rounded-md"
                      >
                        Know More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;

// ✅ Autoplay image rotator for top section
const AutoImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <Image
      src={`https://admiredashboard.theholistay.in/${images[current]}`}
      alt="Rotating Destination"
      fill
      className="object-cover  w-full h-full transition-all duration-1000"
    />
  );
};
