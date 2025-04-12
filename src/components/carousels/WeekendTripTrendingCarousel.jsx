"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const API_URL =
  "https://admiredashboard.theholistay.in/public-weekend-trip-trending-destinations";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const { data } = await axios.get(API_URL);
        if (data && Array.isArray(data) && data.length > 0) {
          setDestinations(data);
        } else {
          setError("No destinations found.");
        }
      } catch (err) {
        setError("Failed to load destinations.");
      } finally {
        setLoading(false);
      }
    }
    fetchDestinations();
  }, []);

  useEffect(() => {
    if (
      sliderContainer.current &&
      !keenSlider.current &&
      destinations.length > 0
    ) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: { perView: 3, spacing: 16 },
        breakpoints: {
          "(max-width: 1024px)": { slides: { perView: 2, spacing: 12 } },
          "(max-width: 768px)": { slides: { perView: 1, spacing: 10 } },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        keenSlider.current?.next();
      }, 8000);
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
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#261F43]">
          Weekend Trip Trending Packages
        </h2>

        <div ref={sliderContainer} className="keen-slider">
          {destinations.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <Link href={`weekenddetail/${item.selected_destination}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 h-[400px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer">

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                    <Image
                      src={`https://admiredashboard.theholistay.in/${item.public_images[0]}`}
                      alt={item.destination}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="mt-4 space-y-1">
                    <h3 className="font-bold text-lg text-[#261F43] truncate">{item.destination}</h3>
                    <p className="text-sm text-gray-700 capitalize">Type: {item.domestic_or_international}</p>
                    {item.duration && <p className="text-sm text-gray-700">Duration: {item.duration}</p>}
                    {item.pricing && <p className="text-sm text-red-600 font-semibold">{item.pricing}</p>}
                  </div>

                  {/* Action Row */}
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
      </div>
    </section>
  );
};

export default TrendingDestination;
