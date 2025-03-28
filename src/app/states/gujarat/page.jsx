"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function GujaratItinerary() {
  const [loading, setLoading] = useState(true);
  const [stateData, setStateData] = useState([]);
  const [error, setError] = useState(null);
  const [videoUrl, setVideoUrl] = useState(""); // State for banner video

  useEffect(() => {
    fetchStateData("gujarat");
    fetchVideoUrl("gujarat");
  }, []);

  // Fetch itinerary data
  const fetchStateData = async (state) => {
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
    } finally {
      setLoading(false);
    }
  };

  // Fetch banner video URL dynamically
  const fetchVideoUrl = async (state) => {
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-destination-video/${state}`
      );

      if (response.data.video_url) {
        setVideoUrl(response.data.video_url);
        console.log("Video URL:", response.data.video_url); // Debugging
      } else {
        console.warn("No video URL found for", state);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      setVideoUrl(""); // Default to empty if error occurs
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section with Video Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        {videoUrl ? (
          <video
            className="absolute inset-0 w-full h-full object-cover z-0" // Ensure the video is layered behind the text
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            controls // TEMP: Add controls for debugging
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/india-bg.jpg')" }}
          ></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover Gujarat
        </h1>
      </div>

      {/* Debugging Output */}
      {!videoUrl && (
        <p className="text-center text-red-600 mt-4">
          Video not available for Gujarat
        </p>
      )}

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Gujarat Itinerary
        </h2>

        {/* Loading & Error Handling */}
        {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {/* Itinerary Cards */}
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
                  className="rounded-lg object-cover"
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>

                {/* Details */}
                <p className="text-gray-600 mt-1">
                  <strong>Type:</strong> {item.domestic_or_international === "domestic" ? "Domestic" : "International"}
                </p>
                <p className="text-gray-600">
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p className="text-gray-600">
                  <strong>Pricing:</strong> {item.pricing}
                </p>
                <p className="text-gray-600">
                  <strong>Destination:</strong> {item.selected_destination}
                </p>

                {/* Additional Images */}
                {item.destination_images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {item.destination_images.map((img, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={`https://admiredashboard.theholistay.in/${img}`}
                        alt={`Additional Image ${imgIndex + 1}`}
                        width={120}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    ))}
                    <div className="mt-4 text-center">
                  <Link href={`/destination/${item.slug}`}>
                    <button className="px-4 py-2 bg-blue-600 w-full text-white rounded-lg hover:bg-blue-700">
                      Explore Destination
                    </button>
                  </Link>
                </div>
                  </div>
                  
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
