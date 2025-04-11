"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

export default function InternationalDestinations() {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-international-destinations-images"
        );

        const formattedDestinations = response.data.map((destination) => {
          const lastImage =
            destination.public_images?.[destination.public_images.length - 1] || null;

          return {
            id: destination.id,
            name: destination.destination || "Unnamed",
            image: lastImage
              ? `https://admiredashboard.theholistay.in/${lastImage}`
              : null,
          };
        });

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
          "https://admiredashboard.theholistay.in/public-hero-section-videos/international"
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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
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
          Discover International Destinations
        </h1>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a Destination
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {destinations.map((destination) => (
            <Link
              href={`/trending-destination/${destination.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={destination.id}
            >
              <div className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer h-full">
                {destination.image ? (
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 mb-3 bg-gray-300 rounded-lg flex items-center justify-center text-sm text-red-600 text-center">
                    Image not available
                  </div>
                )}

                <p className="text-lg font-semibold text-gray-800 hover:underline text-center">
                  {destination.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
