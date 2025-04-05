"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function Itinerary() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDestination(slug);
  }, [slug]);

  useEffect(() => {
    if (!destination) return;

    fetchStateData(destination);
    fetchVideo(destination);
  }, [destination]);

  // Fetch Itinerary Data
  const fetchStateData = async (destination) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-itineraries/${destination}`
      );

      if (response.data && response.data.length > 0) {
        setStateData(response.data);
      } else {
        setError("No itinerary data available.");
        setStateData([]);
      }
    } catch (error) {
      console.error("Error fetching itinerary data:", error);
      setError("Failed to load itinerary data.");
    }
    setLoading(false);
  };

  // Fetch Video Data
  const fetchVideo = async (destination) => {
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-destination-video/${destination}`
      );
      if (response.data?.video_url) {
        setVideoUrl(`https://admiredashboard.theholistay.in/${response.data.video_url}`);
      } else {
        setVideoUrl(null);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      setVideoUrl(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Video Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        {videoUrl ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-lg">Video not available</p>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">
          Discover {destination ? destination.charAt(0).toUpperCase() + destination.slice(1) : ""}
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          {destination ? destination.charAt(0).toUpperCase() + destination.slice(1) : ""} Itinerary
        </h2>

        {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {stateData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.map((item, index) => (
              <Link href={`/destination/${item.slug}`} key={index}>
                <div className="p-6 bg-white shadow-lg rounded-lg h-[550px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <div>
                    <Image
                      src={`https://admiredashboard.theholistay.in/${item.destination_thumbnail}`}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="rounded-lg"
                    />

                    <h3 className="text-2xl font-semibold mt-4 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">
                      <strong>Duration:</strong> {item.duration}
                    </p>

                    <p className="text-gray-600">
                      <strong>Destination:</strong> {item.selected_destination}
                    </p>

                    {/* Limited Image Gallery (Max 3 images) */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {item.destination_images.slice(0, 3).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative w-full aspect-[4/3] overflow-hidden rounded-md"
                        >
                          <Image
                            src={`https://admiredashboard.theholistay.in/${img}`}
                            alt={`Additional Image ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <button className="px-4 py-2 bg-red-600 w-full text-white rounded-lg hover:bg-yellow-700">
                      Explore Destination
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
