"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import conf from "../../../conf/conf";

// Updated API URL
const API_URL = "https://admiredashboard.theholistay.in/public-international-destinations-images";

const InternationalDestinationGrid = () => {
  const [destinations, setDestinations] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleDestinations, setVisibleDestinations] = useState(9); // Initial limit to 9

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchDestinations = async () => {
      try {
        const { data } = await axios.get(API_URL);
        console.log("Fetched Destinations:", data);

        // Ensure data.data exists and is an array before setting state
        if (Array.isArray(data)) {
          setDestinations(data);
        } else {
          setError("Data is not in the expected format");
        }
      } catch (err) {
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleExploreMore = () => {
    setVisibleDestinations((prevVisible) => prevVisible + 9); // Show 9 more cards
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-yellow-600 md:mt-16 mt-6">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-red-600 drop-shadow-lg">
            Explore International Destinations
          </h1>
          <p className="text-md text-red-600 mt-3 max-w-2xl mx-auto">
            Affordable international tours
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading destinations...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.slice(0, visibleDestinations).map((item, i) => (
                <DestinationCard key={i} item={item} />
              ))}
            </div>

            {visibleDestinations < destinations.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleExploreMore}
                  className="px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300"
                >
                  Explore More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const DestinationCard = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!item.public_images || item.public_images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.public_images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [item.public_images]);

  return (
    <Link
      key={item.id}
      href={`trending-destination/${item.destination}` || "#"}
      className="group relative"
      data-aos="fade-up"
    >
      <div className="overflow-hidden rounded-lg shadow-md transition-transform transform group-hover:scale-105 duration-300 bg-white w-full lg:w-[320px]">
        <div className="relative">
          <Image
            className="object-cover w-full h-56 sm:h-64 md:h-72 rounded-t-lg transition-opacity duration-1000"
            src={`${conf.laravelBaseUrl}/${item.public_images[currentImageIndex]}`}
            alt={item.destination || "Destination"}
            width={300}
            height={150}
            priority
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center  transition-opacity duration-300">
            <h3 className="text-white text-lg font-bold tracking-wide">{item.destination}</h3>
          </div>
        </div>
        <div className="p-3 text-center">
          <p className="text-sm text-gray-600 mt-1">
            Click to explore this amazing destination.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InternationalDestinationGrid;
