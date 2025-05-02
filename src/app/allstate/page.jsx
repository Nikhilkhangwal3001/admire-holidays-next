"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function DomesticDestinations() {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-domestic-destinations-images"
        );

        const formattedDestinations = response.data.map((destination) => ({
          id: destination.id,
          name: destination.destination || "Unnamed",
          public_images: destination.public_images || [],
        }));

        setDestinations(formattedDestinations);
      } catch (error) {
        console.error("Error fetching destination images:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBannerVideo = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-hero-section-videos/domestic"
        );

        if (response.data.length > 0 && response.data[0].video_url) {
          setVideoUrl(
            `https://admiredashboard.theholistay.in/${response.data[0].video_url}`
          );
        }
      } catch (error) {
        console.error("Error fetching banner video:", error);
      }
    };

    fetchDestinations();
    fetchBannerVideo();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        {videoUrl ? (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <p className="text-white text-xl">Video not available</p>
          </div>
        )}
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover Domestic Destinations
        </h1>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
          Select a Destination
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {destinations.map((destination) => (
            <Link
              href={`/trending-destination/${destination.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={destination.id}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition hover:-translate-y-1 overflow-hidden group cursor-pointer">
                <div className="w-full h-48 relative">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    pagination={{ clickable: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {destination.public_images.length > 0 ? (
                      destination.public_images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative w-full h-48">
                            <Image
                              src={`https://admiredashboard.theholistay.in/${img}`}
                              alt={destination.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-red-500 bg-gray-100">
                        No images
                      </div>
                    )}
                  </Swiper>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
                    {destination.name}
                  </h3>
                  <div className="mt-1 h-1 w-10 bg-blue-500 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
