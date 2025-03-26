"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";

export default function CountryPage() {
  const { country } = useParams();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [bannerVideo, setBannerVideo] = useState(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!country) return;

    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://admiredashboard.theholistay.in/public-itineraries/${country}`
        );

        if (response.data.length > 0) {
          setCountryData(response.data);
        } else {
          setError("No data available for this country.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again.");
      }
      setLoading(false);
    };

    // ✅ Fetch banner video dynamically
    const fetchBannerVideo = async () => {
      try {
        const response = await axios.get(
          `https://admiredashboard.theholistay.in/public-destination-video/${country}`
        );

        if (response.data && response.data.video_url) {
          const fullVideoUrl = `https://admiredashboard.theholistay.in/${response.data.video_url}`;
          setBannerVideo(fullVideoUrl);
          setVideoError(false); // Reset video error on successful fetch
        } else {
          setBannerVideo(null);
        }
      } catch (error) {
        console.error("Error loading video:", error);
        setBannerVideo(null);
      }
    };

    fetchCountryData();
    fetchBannerVideo();
  }, [country]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* ✅ Video Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        {bannerVideo && !videoError ? (
          <video
            key={bannerVideo} // ✅ Ensures video updates when country changes
            className="absolute inset-0 w-full h-full object-cover"
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)} // ✅ Handle video loading errors
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/default-banner.jpg')` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 capitalize">
          Discover {country?.replace(/-/g, " ")}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Explore {country?.replace(/-/g, " ")}
        </h2>

        {countryData && countryData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.map((item, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src={`https://admiredashboard.theholistay.in/${item.destination_thumbnail}`}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
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
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
