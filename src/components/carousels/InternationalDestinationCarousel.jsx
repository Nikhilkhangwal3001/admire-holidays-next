"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import conf from "../../../conf/conf";

const API_URL = `${conf.laravelBaseUrl}/public-itineraries-international`;

const InternationalDestinationGrid = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchDestinations = async () => {
      try {
        const { data } = await axios.get(API_URL);
        console.log("Fetched Destinations:", data);
        setDestinations(data.data); // ✅ Store the fetched data
      } catch (err) {
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
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

        {loading ? (
          <p className="text-center text-gray-600">Loading destinations...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((item, i) => (
              <DestinationCard key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const DestinationCard = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!item.destination_thumbnail) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % item.destination_thumbnail.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [item.destination_thumbnail]);

  return (
    <Link href={`itinerary-detail/${item.slug}` || "#"} className="group relative" data-aos="fade-up">
      <div className="overflow-hidden rounded-lg shadow-md transition-transform transform group-hover:scale-105 duration-300 bg-white w-full lg:w-[320px]">
        <div className="relative">
          <Image
            className="object-cover w-full h-56 sm:h-64 md:h-72 rounded-t-lg transition-opacity duration-1000"
            src={`${conf.laravelBaseUrl}/${item.destination_thumbnail}`} // ✅ Fixed Image Path
            alt={item.title || "Destination"}
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
          <h3 className="text-md font-semibold text-gray-800">
            {item.title || "Unknown Destination"}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Click to explore this amazing destination.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InternationalDestinationGrid;
