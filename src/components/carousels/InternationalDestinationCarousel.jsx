"use client";

import React, { useEffect } from "react";
import internationalDestinations from "@/data/internationalDestination";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const InternationalDestinationGrid = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Only animate once when scrolled into view
    });
  }, []);
  // anadmaan,goa,kerala,rajasthan,utimyzon,megalia
  return (
    <section className="relative py-20 bg-gray-100 md:mt-20 mt-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="/InternationVideo3.mp4" // Replace this with your video file or URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            International Destinations
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {internationalDestinations.map((item, i) => (
            <Link href={item.link} key={i} className="group relative" data-aos="fade-up">
              <div className="overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-all">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-64 sm:h-80 md:h-96"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalDestinationGrid;
