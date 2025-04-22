"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const TrendingDestination = () => {
  const [destinations, setDestinations] = useState([]);

  // Initialize Keen Slider
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
    // Autoplay every 5 minutes
    autoplay: true,
    autoplayInterval: 300000, // 5 minutes
  });

  // Fetch data from API on component mount
  useEffect(() => {
    axios
      .get("https://admiredashboard.theholistay.in/public-itineraries-trending")
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#261F43]">
        Weekend Trending Destinations
      </h2>

      {destinations.length > 0 ? (
        <div ref={sliderRef} className="keen-slider">
          {destinations.map((item, index) => (
            <div key={item.slug || index} className="keen-slider__slide">
              <Link href={`destination/${item.selected_destination}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 h-[400px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                    <Image
                      src={`https://admiredashboard.theholistay.in/${item.destination_thumbnail}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-4 space-y-1">
                    <h3 className="font-bold text-lg text-[#261F43] truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {item.domestic_or_international.charAt(0).toUpperCase() +
                        item.domestic_or_international.slice(1)}
                    </p>
                    <p className="text-sm text-gray-700">
                      Duration: {item.duration}
                    </p>
                    <p className="text-sm text-gray-700">
                      Pricing: {item.pricing}
                    </p>
                  </div>

                  {/* Know More Button */}
                  {/* Phone icon + Know More */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex  items-center gap-2 text-red-600 font-semibold text-2xl">
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
