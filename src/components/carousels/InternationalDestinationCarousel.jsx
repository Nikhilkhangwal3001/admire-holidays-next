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
    <section className="relative py-24 bg-gradient-to-b from-white to-yellow-600 md:mt-20 mt-6">
      <div className="relative z-10 mx-auto max-w-[1340px] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-red-600 drop-shadow-lg">
            Explore International Destinations
          </h1>
          <p className="text-lg text-red-600 mt-4 max-w-2xl mx-auto">
            Discover breathtaking locations and plan your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
      <div className="overflow-hidden rounded-xl shadow-lg transition-transform transform group-hover:scale-105 duration-300 bg-white w-full lg:w-[400px]">
        <div className="relative">
          <Image
            className="object-cover w-full h-72 sm:h-80 md:h-96 rounded-t-xl transition-opacity duration-1000"
            src={
              item.imageUrl && item.imageUrl.length > 0
                ? item.imageUrl[currentImageIndex].startsWith("http")
                  ? item.imageUrl[currentImageIndex] 
                  : `/${item.imageUrl[currentImageIndex]}`.replace(/^\/+/, "/") 
                : "/placeholder.jpg"
            }
            alt={item.title}
            width={500}
            height={300}
            priority
            // loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold tracking-wide">
              {item.title}
            </h3>
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-2">
            Click to explore this amazing destination.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InternationalDestinationGrid;
