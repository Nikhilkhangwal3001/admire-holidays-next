"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

export default function DomesticDestinations() {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-domestic-destinations-images"
        );

        console.log("API Response:", response.data);

        // Filter and format destinations
        const formattedDestinations = response.data.map((destination) => ({
          id: destination.id,
          name: destination.destination,
          image: destination.public_images.length
            ? `https://admiredashboard.theholistay.in/${destination.public_images[0]}`
            : null
        }));

        setDestinations(formattedDestinations);
      } catch (error) {
        console.error("Error fetching destination images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
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
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" src="/domesticvideo.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">Discover Domestic Destinations</h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Select a Destination</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer">
              {destination.image ? (
                <Image 
                  src={destination.image} 
                  alt={destination.name} 
                  width={100}
                  height={100}
                  className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110 rounded-lg object-cover"
                />
              ) : (
                <p className="text-red-500">Image not available</p>
              )}
              <Link href={`/trending-destination/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="text-lg font-semibold text-gray-800 hover:underline">{destination.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
