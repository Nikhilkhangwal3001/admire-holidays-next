"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3s autoplay

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[200px] w-full relative rounded-lg overflow-hidden">
      <Image
        src={`https://admiredashboard.theholistay.in/${images[current]}`}
        alt="Resort Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

const TrendingDestination = () => {
  const mainSliderRef = useRef(null);
  const keenMainSlider = useRef(null);
  const mainAutoSlideInterval = useRef(null);
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://admiredashboard.theholistay.in/public-resorts");
        const data = await res.json();
        setResorts(data);
      } catch (error) {
        console.error("Error fetching resort data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (mainSliderRef.current && resorts.length > 0 && !keenMainSlider.current) {
      keenMainSlider.current = new KeenSlider(mainSliderRef.current, {
        loop: true,
        slides: { origin: "center", perView: 1, spacing: 8 },
        breakpoints: {
          "(min-width: 768px)": { slides: { perView: 2, spacing: 8 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 12 } },
        },
      });

      mainAutoSlideInterval.current = setInterval(() => {
        keenMainSlider.current?.next();
      }, 10000);
    }

    return () => {
      keenMainSlider.current?.destroy();
      keenMainSlider.current = null;
      clearInterval(mainAutoSlideInterval.current);
    };
  }, [resorts]);

  return (
    <section>
      <div className="mx-auto max-w-[1340px] mt-36 mb-36 px-4">
        <h2 className="text-center text-3xl font-bold">Explore Our Resorts</h2>
        <div className="relative lg:col-span-2 lg:mx-0">
          <div ref={mainSliderRef} className="keen-slider mt-8">
            {resorts.map((destination) => (
              <div className="keen-slider__slide" key={destination.id}>
                <Link
                  className="w-full block h-full"
                  href={`destination/${destination.selected_destination || destination.id}`}
                >
                  <div className="h-[420px] max-w-sm flex flex-col justify-between rounded-lg shadow-lg p-2 relative bg-white transition-transform duration-300 hover:scale-105">
                    <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md text-sm z-10">
                      Discount: {destination.discount}%
                    </div>

                    {/* Card Image Slider (Autoplay) */}
                    <ImageSlider images={destination.images} />

                    {/* Card Content */}
                    <motion.div className="p-4 flex flex-col justify-between flex-grow">
                      <h2 className="text-lg font-bold">{destination.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">
                        Discount: {destination.discount}%
                      </p>
                      <motion.button
                        className="w-full py-2 text-white rounded-lg mt-auto"
                        animate={{ backgroundColor: "#E69233" }}
                        whileHover={{ backgroundColor: "#CF1E27" }}
                        transition={{ duration: 0.3 }}
                      >
                        Know More
                      </motion.button>
                    </motion.div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;
