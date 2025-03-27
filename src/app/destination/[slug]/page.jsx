"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Get dynamic slug
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import conf from "../../../../conf/conf";

export default function ItineraryPage() {
  const { slug } = useParams(); // ✅ Get slug from URL
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      console.error("Slug is missing!"); // ✅ Log if slug is undefined
      return;
    }
    console.log("Fetching data for slug:", slug); // ✅ Debugging Log
    fetchStateData(slug);
    fetchVideo(slug);
  }, [slug]);
  console.log("irritation", slug);
  

  // ✅ Fetch Itinerary Data
  const fetchStateData = async (slug) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-itinerary/${slug}?timestamp=${new Date().getTime()}`
      );

      console.log("API Response:", response.data); // ✅ Log full API response

      if (response.data && response.data.length > 0) {
        setStateData(response.data);
      } else {
        setError("No data available for this destination.");
      }
    } catch (error) {
      console.error("Error fetching data:", error); // ✅ Log full error
      if (error.response) {
        console.error("Error Response Data:", error.response.data); // ✅ Log detailed API error
      }
      setError("Failed to load data. Please try again.");
    }
    setLoading(false);
  };

  // ✅ Fetch Video Data
  const fetchVideo = async (slug) => {
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-destination-video/${slug}`
      );
      if (response.data && response.data.video_url) {
        setVideoUrl(`https://admiredashboard.theholistay.in/${response.data.video_url}`);
      } else {
        setVideoUrl(null);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
      setVideoUrl(null);
    }
  };



  // useEffect(()=>{
  //  (
  //   async function(){
  //     try {
  //       console.log("page.jsx raam raam bhai saarya ne", slug);

  //       const response = await axios.get(`${conf.laravelBaseUrl}/public-itinerary/-sri-lankan-honeymoon-tour`);

  //       console.log("response.data gaadi rokega", response.data);
  //     } catch (error) {
  //      console.log("ke dikkat hai", error); 
  //     }
   

  //   }
  //  )()
  // }, [slug]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* ✅ Video Banner */}
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
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 capitalize">
          Discover {slug ? slug.replace("-", " ") : "Destination"}
        </h1>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8 capitalize">
          {slug ? slug.replace("-", " ") : "Destination"} Itinerary
        </h2>

        {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {stateData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.map((item, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                {/* ✅ Thumbnail Image */}
                <Image
                  src={`https://admiredashboard.theholistay.in/${item.destination_thumbnail}`}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />

                {/* ✅ Title */}
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>

                {/* ✅ Destination Type */}
                <p className="text-gray-600 mt-1">
                  <strong>Type:</strong>{" "}
                  {item.domestic_or_international === "domestic" ? "Domestic" : "International"}
                </p>

                {/* ✅ Duration */}
                <p className="text-gray-600">
                  <strong>Duration:</strong> {item.duration}
                </p>

                {/* ✅ Pricing */}
                <p className="text-gray-600">
                  <strong>Pricing:</strong> {item.pricing}
                </p>

                {/* ✅ Destination */}
                <p className="text-gray-600">
                  <strong>Destination:</strong> {item.selected_destination}
                </p>

                {/* ✅ Additional Images */}
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

                <div className="mt-4 text-center">
                  <Link href={`/destination/${item.selected_destination}`}>
                    <button className="px-4 py-2 bg-blue-600 w-full text-white rounded-lg hover:bg-blue-700">
                      Explore Destination
                    </button>
                  </Link>
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
