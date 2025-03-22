"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import conf from "../../../conf/conf";

// Updated API URL
const API_URL = "https://admiredashboard.theholistay.in/public-itineraries-weekend";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data from API
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(API_URL);
        console.log("Fetched Destinations:", data);

        if (data && Array.isArray(data) && data.length > 0) {
          setDestinations(data);
        } else {
          setError("No destinations found.");
        }
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Failed to load destinations.");
      } finally {
        setLoading(false);
      }
    }
    fetchDestinations();
  }, []);

  // Initialize KeenSlider
  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current && destinations.length > 0) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: { perView: 1, spacing: 8 },
        breakpoints: {
          "(min-width: 768px)": { slides: { perView: 2 } },
          "(min-width: 1024px)": { slides: { perView: 3 } },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        keenSlider.current?.next();
      }, 10000);
    }

    return () => {
      keenSlider.current?.destroy();
      keenSlider.current = null;
      clearInterval(autoSlideInterval.current);
    };
  }, [destinations]);

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-28">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-4">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Weekend Trip Trending Packages
          </h2>
        </div>

        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {destinations.map((item, i) => {
              const imageUrl = `${conf.laravelBaseUrl}/${item.destination_thumbnail}`;
              console.log("Image URL:", imageUrl);

              return (
                <div className="keen-slider__slide" key={i}>
                  <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 items-center min-h-[220px] relative">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={item.title || "Destination"}
                        width={500}
                        height={300}
                        className="rounded-lg"
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
                          {item.title || "Unknown Destination"}
                        </motion.h2>
                        <p className="text-[13px] font-semibold text-[#CF1E27]">
                          {item.feedback || "No feedback available"}
                        </p>
                        <p>{item.days || "Duration not specified"}</p>
                        <div className="flex gap-4 items-center mt-4">
                          <a href="tel:1800-121-4252" className="text-xl">📞</a>
                          <Link className="w-full" href={`/destination/${item.slug}`}>
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
