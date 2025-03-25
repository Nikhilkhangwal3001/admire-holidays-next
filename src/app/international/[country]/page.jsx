"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";

export default function CountryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const country = router?.query?.country; // Get country name from URL
    if (!country) return; // Ensure country is available before fetching

    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://admiredashboard.theholistay.in/public-destination-images/${country}`
        );
        // Set country data from the correct part of the response
        setCountryData(response.data?.destinationImages);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [router?.query?.country]); // Ensure effect runs when country changes

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${countryData?.images?.[0] ? `https://admiredashboard.theholistay.in/${countryData?.images?.[0]}` : '/default-banner.jpg'})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 capitalize">
          {countryData?.destination || router?.query?.country?.replace(/-/g, " ")}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Explore {countryData?.destination || router?.query?.country?.replace(/-/g, " ")}
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">Total Itineraries: {countryData?.itineraryCount || 0}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {countryData?.images?.map((img, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
              <Image 
                src={`https://admiredashboard.theholistay.in/${img}`} 
                alt={countryData?.destination} 
                width={400} 
                height={300} 
                className="rounded-lg object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
