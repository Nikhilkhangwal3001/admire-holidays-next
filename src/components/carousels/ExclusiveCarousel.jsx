"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { FaPhone } from "react-icons/fa";
import conf from "../../../conf/conf";

const TrendingDestination = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize the KeenSlider hook
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 15 } },
    },
  });

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(
          `${conf.laravelBaseUrl}/public-itineraries-exclusive`
        );
        setDestinations(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchDestinations();
  }, []);

  useEffect(() => {
    if (instanceRef.current) {
      const autoSlideInterval = setInterval(() => {
        instanceRef.current?.next();
      }, 5000);
      
      return () => clearInterval(autoSlideInterval); // Clean up interval on unmount
    }
  }, [instanceRef]);

  return (
    <section className="mb-6 py-10">
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:ps-8">
        <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold mb-4">
          Exclusive Packages
        </h2>

        {loading ? (
          <p className="text-lg text-gray-600 text-center">Loading destinations...</p>
        ) : error ? (
          <p className="text-lg text-red-600 text-center">{error}</p>
        ) : (
          <div className="relative lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {destinations.map((destination, i) => (
                <div className="keen-slider__slide" key={destination.slug || i}>
                  <div className="max-w-sm h-[500px] flex flex-col justify-between rounded-lg shadow-lg border border-gray-200 bg-gray-50 p-2 relative flex-grow">
                    <Link
                      className="w-full"
                      key={destination.slug}
                      href={`destination/${destination.slug}`}
                    >
                      <div className="relative w-full h-64 rounded-lg overflow-hidden">
                        <Image
                          src={`${conf.laravelBaseUrl.replace(
                            /\/$/,
                            ""
                          )}/${destination.destination_thumbnail.replace(
                            /^\//,
                            ""
                          )}`}
                          alt={destination.title || "Destination"}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </Link>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 bg-white rounded-lg shadow-lg border-2 flex-grow flex flex-col justify-between"
                    >
                      <Link
                        className="w-full"
                        key={destination.slug}
                        href={`destination/${destination.slug}`}
                      >
                        <motion.h2
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-sm font-bold text-[#4D456B]"
                        >
                          {destination.title}
                        </motion.h2>
                      </Link>

                      <p className="text-[13px] font-semibold text-[#CF1E27]">
                        {destination.feedback}
                      </p>
                      <p className="text-[13px] font-semibold text-[#CF1E27]">
                        {destination.domestic_or_international}
                      </p>
                      <p>{destination.duration}</p>

                      {/* Display Images */}
                      <div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          {destination.destination_images.slice(0, 3).map((img, i) => (
                            <div key={i} className="relative">
                              <Image
                                src={`${conf.laravelBaseUrl.replace(
                                  /\/$/,
                                  ""
                                )}/${img.replace(/^\//, "")}`}
                                alt={`Image ${i + 1}`}
                                width={100}
                                height={100}
                                className="object-cover w-full h-20 rounded"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <FaPhone className="text-[#E69233] text-lg" />
                        <Link
                          className="w-full"
                          key={destination.slug}
                          href={`destination/${destination.slug}`}
                        >
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
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingDestination;
