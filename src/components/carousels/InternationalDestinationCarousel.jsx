"use client";

import React, { useEffect, useState } from "react";
import internationalDestinations from "@/data/internationalDestination";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const InternationalDestinationGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-yellow-600 md:mt-16 mt-6">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-red-600 drop-shadow-lg">
            Explore International Destinations
          </h1>
          <p className="text-md text-red-600 mt-3 max-w-2xl mx-auto">
            Discover breathtaking locations and plan your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalDestinations.map((item, i) => (
            <DestinationCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!item.imageUrl || item.imageUrl.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % item.imageUrl.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [item.imageUrl]);

  return (
    <Link href={item.link} className="group relative" data-aos="fade-up">
      <div className="overflow-hidden rounded-lg shadow-md transition-transform transform group-hover:scale-105 duration-300 bg-white w-full lg:w-[320px]">
        <div className="relative">
          <Image
            className="object-cover w-full h-56 sm:h-64 md:h-72 rounded-t-lg transition-opacity duration-1000"
            src={
              item.imageUrl && item.imageUrl.length > 0
                ? item.imageUrl[currentImageIndex].startsWith("http")
                  ? item.imageUrl[currentImageIndex]
                  : `/${item.imageUrl[currentImageIndex]}`.replace(/^\/+/, "/")
                : "/placeholder.jpg"
            }
            alt={item.title}
            width={400}
            height={250}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold tracking-wide">
              {item.title}
            </h3>
          </div>
        </div>
        <div className="p-3 text-center">
          <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Click to explore this amazing destination.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InternationalDestinationGrid;
