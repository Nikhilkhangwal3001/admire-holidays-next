"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";

export default function KarnatakaItinerary() {
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStateData("karnataka"); // Fetch Karnataka data on page load
  }, []);

  const fetchStateData = async (state) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-itineraries/${state}`
      );
      if (response.data.length > 0) {
        setStateData(response.data);
      } else {
        setStateData([]);
        setError("No data available for this state.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again.");
      setStateData([]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/india-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover Karnataka
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Karnataka Itinerary
        </h2>

        {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        
        {stateData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.map((item, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                {/* Thumbnail Image */}
                <Image
                  src={`https://admiredashboard.theholistay.in/${item.destination_thumbnail}`}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>

                {/* Destination Type */}
                <p className="text-gray-600 mt-1">
                  <strong>Type:</strong> {item.domestic_or_international === "domestic" ? "Domestic" : "International"}
                </p>

                {/* Duration */}
                <p className="text-gray-600">
                  <strong>Duration:</strong> {item.duration}
                </p>

                {/* Pricing */}
                <p className="text-gray-600">
                  <strong>Pricing:</strong> {item.pricing}
                </p>

                {/* Destination */}
                <p className="text-gray-600">
                  <strong>Destination:</strong> {item.selected_destination}
                </p>

                {/* Additional Images */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {item.destination_images.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={`https://admiredashboard.theholistay.in/${img}`}
                      alt={`Additional Image ${imgIndex + 1}`}
                      width={120}
                      height={80}
                      className="rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
