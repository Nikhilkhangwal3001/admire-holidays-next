"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const countries = [
  {
    name: "Indonesia",
    icon: "/icons/indonesia.png",
    video: "/videos/indonesia.mp4",
  },
  { name: "Spain", icon: "/icons/spain.png", video: "/videos/spain.mp4" },
  { name: "UAE", icon: "/icons/uae.png", video: "/videos/uae.mp4" },
  {
    name: "Thailand",
    icon: "/icons/thailand.png",
    video: "/videos/thailand.mp4",
  },
  {
    name: "Maldives",
    icon: "/icons/maldives.png",
    video: "/videos/maldives.mp4",
  },
  {
    name: "Saudi Arabia",
    icon: "/icons/saudi.png",
    video: "/videos/saudi.mp4",
  },
  {
    name: "Malaysia",
    icon: "/icons/malaysia.png",
    video: "/videos/malaysia.mp4",
  },
  { name: "USA", icon: "/icons/usa.png", video: "/videos/usa.mp4" },
  { name: "Israel", icon: "/icons/israel.png", video: "/videos/israel.mp4" },
  { name: "France", icon: "/icons/france.png", video: "/videos/france.mp4" },
  { name: "China", icon: "/icons/china.png", video: "/videos/china.mp4" },
  { name: "Vietnam", icon: "/icons/vietnam.png", video: "/videos/vietnam.mp4" },
  { name: "UK", icon: "/icons/uk.png", video: "/videos/uk.mp4" },
  { name: "Tunisia", icon: "/icons/tunisia.png", video: "/videos/tunisia.mp4" },
  {
    name: "Sri Lanka",
    icon: "/icons/srilanka.png",
    video: "/videos/srilanka.mp4",
  },
  { name: "Russia", icon: "/icons/russia.png", video: "/videos/russia.mp4" },
  { name: "Japan", icon: "/icons/japan.png", video: "/videos/japan.mp4" },
  { name: "Britain", icon: "/icons/britain.png", video: "/videos/britain.mp4" },
  { name: "Italy", icon: "/icons/italy.png", video: "/videos/italy.mp4" },
  { name: "Estonia", icon: "/icons/estonia.png", video: "/videos/estonia.mp4" },
  {
    name: "Australia",
    icon: "/icons/australia.png",
    video: "/videos/australia.mp4",
  },
  { name: "Turkey", icon: "/icons/turkey.png", video: "/videos/turkey.mp4" },
];

export default function InternationalDestinations() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const router = useRouter();

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
          Discover International Location
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Select a Country to Explore
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative group cursor-pointer flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all"
            >
              <img
                src={country.icon}
                alt={country.name}
                className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110"
              />
              <p
                className="text-lg font-semibold text-gray-800 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/internationalpackages/${country.name.toLowerCase()}`
                  )
                }
              >
                {country.name}
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
