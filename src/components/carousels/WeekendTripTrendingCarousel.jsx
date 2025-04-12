"use client";
import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";

const API_URL =
  "https://admiredashboard.theholistay.in/public-weekend-trip-trending-destinations";

const TrendingDestination = () => {
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);
  const autoSlideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
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
        slides: { perView: 1, spacing: 16 },
        breakpoints: {
          "(min-width: 768px)": { slides: { perView: 2, spacing: 16 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
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
      <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto mb-6">
          <h2 className="text-center text-[#261F43] md:text-5xl text-3xl font-bold sm:mb-0 flex-grow">
            Weekend Trip Trending Packages
          </h2>
        </div>

        <div className="relative">
          <div ref={sliderContainer} className="keen-slider">
            {destinations.map((item) => (
              <div
                className="keen-slider__slide p-2"
                key={item.id}
              >
                <a
                  className="block bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  href={`weekenddetail/${item.destination}`}
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={`https://admiredashboard.theholistay.in/${item.public_images[0]}`}
                      alt={item.destination}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-[#261F43]">
                      {item.destination}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.domestic_or_international}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestination;
