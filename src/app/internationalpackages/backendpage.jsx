"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const API_BASE_URL = "https://admiredashboard.theholistay.in/public-itineraries";

export default function InternationalDestinationDetail() {
  const { slug } = useParams(); // Get country name from URL
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Invalid request. Destination not found.");
      setLoading(false);
      return;
    }

    async function fetchDestination() {
      try {
        const formattedSlug = slug.toLowerCase().replace(/\s+/g, "-"); // Convert to API-friendly format
        console.log("Fetching data for:", formattedSlug);

        const response = await axios.get(`${API_BASE_URL}/${formattedSlug}`);
        console.log("API Response:", response.data); // Debugging

        if (!response.data || Object.keys(response.data).length === 0) {
          setError("No itineraries found.");
          setDestination(null);
        } else {
          setDestination(response.data);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch destination.");
      } finally {
        setLoading(false);
      }
    }

    fetchDestination();
  }, [slug]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-600">nikhil</p>;
  if (!destination) return <p className="text-center text-red-600">No itineraries found.</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center">{destination.title}</h1>

        {/* Image Carousel */}
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop={true} className="w-full h-full">
            {destination.destination_images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`https://admiredashboard.theholistay.in/${image}`}
                  alt={destination.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="text-lg text-gray-700 mt-4">{destination.description}</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="text-gray-600">{destination.pricing || "Contact for details"}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold">Duration</h2>
            <p className="text-gray-600">{destination.duration}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
