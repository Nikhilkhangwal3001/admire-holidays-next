"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TrendingDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentImages, setCurrentImages] = useState({});

  // Initialize Keen Slider with autoplay functionality
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    // Autoplay configuration
    autoplay: {
      delay: 3000,  // Delay of 3 seconds between slides
      pauseOnHover: true,  // Pause autoplay when hovered
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://admiredashboard.theholistay.in/public-domestic-destinations-images"
      )
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  // Auto-reflect images one at a time
  useEffect(() => {
    const intervals = destinations.map((item, index) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % item.public_images.length;
        setCurrentImages((prev) => ({
          ...prev,
          [index]: currentIndex,
        }));
      }, 2000); // Change image every 2 seconds
      return interval;
    });

    return () => {
      intervals.forEach(clearInterval); // Cleanup intervals on unmount
    };
  }, [destinations]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-32">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#261F43]">
        Weekend Gateway Destinations
      </h2>

      {destinations.length > 0 ? (
        <div ref={sliderRef} className="keen-slider">
          {destinations.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <Link href={`trending-destination/${item.destination}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 h-[400px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer">
                  
                  {/* Auto-reflecting image (one at a time) */}
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                    {item.public_images.length > 0 && (
                      <Image
                        src={`https://admiredashboard.theholistay.in/${item.public_images[currentImages[index] || 0]}`}
                        alt={item.destination}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Destination Info */}
                  <div className="mt-4 space-y-1">
                    <h3 className="font-bold text-lg text-[#261F43] truncate">
                      {item.destination}
                    </h3>
                    <p className="text-sm text-gray-700">
                      Category: {item.domestic_or_international}
                    </p>
                    <p className="text-sm text-gray-500">
                      Itineraries: {item.itineraries_count}
                    </p>
                  </div>

                  {/* Call & Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-600 font-semibold text-2xl">
                      <FaPhoneAlt />
                    </div>
                    <button className="bg-red-600 w-full text-white ml-3 px-4 py-2 text-sm rounded-md">
                      Know More
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading destinations...</p>
      )}
    </div>
  );
};

export default TrendingDestination;
