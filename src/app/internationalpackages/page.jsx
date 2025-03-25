"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import conf from "../../../conf/conf";

const countries = [
  "indonesia", "spain", "uae", "thailand", "maldives",
  "saudi-arabia", "malaysia", "usa", "israel", "france",
  "china", "vietnam", "uk", "tunisia", "sri-lanka",
  "russia", "japan", "britain", "italy", "estonia",
  "australia", "turkey"
];

export default function InternationalDestinations() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [countryImages, setCountryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://admiredashboard.theholistay.in/public-international-destinations-images`
        );
        console.log(`Response for page.jsx internationalpackage`, response.data);
        setCountryImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleCloseModal = (e) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setSelectedVideo(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Internationaladmireholidays.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover International Locations
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a Country to Explore
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {countryImages.map((country) => (
            <div
              key={country?.destination}
              className="relative group cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all"
              onClick={() => router.push(`/international/${country?.destination.toLowerCase().replace(/ /g, "-")}`)}
            >
              <Image
                src={conf.laravelBaseUrl + "/" + country?.images[0]}
                width={96}
                height={96}
                className="mb-3 transition-transform transform group-hover:scale-110 rounded-lg object-cover"
              />
              <p className="text-lg font-semibold text-gray-800 cursor-pointer">
                {country?.destination}
              </p>
            </div>
          ))}
        </div>
      </div>

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
