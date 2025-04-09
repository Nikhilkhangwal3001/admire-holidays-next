"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import conf from "../../../conf/conf";

export default function InternationalDestinations() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [countryImages, setCountryImages] = useState([]);
  const [bannerVideo, setBannerVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-international-destinations-images"
        );
        console.log("Images:", response.data);
        setCountryImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchBannerVideo = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-hero-section-videos/international"
        );
        console.log("Banner video:", response.data);
        if (response.data.length > 0) {
          setBannerVideo(`${conf.laravelBaseUrl}/${response.data[0].video_url}`);
        }
      } catch (error) {
        console.error("Error fetching banner video:", error);
      }
    };

    fetchImages();
    fetchBannerVideo();
  }, []);

  const handleCloseModal = (e) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setSelectedVideo(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Video Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        {bannerVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center text-white text-xl">
            Loading Banner...
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover International Locations
        </h1>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a Country to Explore
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {countryImages.map((country) => (
            <Link
              href={`/trending-destination/${country.destination
                ?.toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={country.id}
              className="relative group cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all min-h-[220px] h-full"
            >
              <div className="w-24 h-24 mb-3 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
                {country?.images?.[0] ? (
                  <Image
                    src={`${conf.laravelBaseUrl}/${country.images[0]}`}
                    width={96}
                    height={96}
                    className="transition-transform transform group-hover:scale-110 object-cover"
                    alt={country.destination || "Country Image"}
                  />
                ) : (
                  <span className="text-sm text-gray-500">No Image</span>
                )}
              </div>
              <p className="text-lg font-semibold text-gray-800 text-center min-h-[48px] flex items-center justify-center">
                {country.destination || "Unnamed"}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-md transition-all"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={28} />
          </button>
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-11/12 max-w-4xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div>
      )}

      <Footer />
    </div>
  );
}
