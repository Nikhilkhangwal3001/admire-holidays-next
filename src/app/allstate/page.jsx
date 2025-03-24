"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const states = [
  "andhra-pradesh", "arunachal-pradesh", "assam", "bihar", "chhattisgarh",
  "goa", "gujarat", "himachal-pradesh", "jharkhand", "karnataka",
  "kerala", "madhya-pradesh", "maharashtra", "meghalaya",
  "nagaland", "odisha", "punjab", "rajasthan", "sikkim",
  "tamil-nadu", "tripura", "uttar-pradesh", "uttarakhand", "west-bengal"
];

export default function DomesticDestinations() {
  const [loading, setLoading] = useState(true);
  const [stateImages, setStateImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRequests = states.map(async (state) => {
          try {
            const response = await axios.get(
              `https://admiredashboard.theholistay.in/public-destination-images/${state}`
            );

            console.log(`Fetching data for ${state}:`, response.data);

            const imageUrl = response.data?.destinationImages?.images?.[0];
            return { [state]: imageUrl ? `https://admiredashboard.theholistay.in/${imageUrl}` : null };
          } catch (error) {
            console.error(`Error fetching data for ${state}:`, error);
            return { [state]: null };
          }
        });

        const imageResults = await Promise.all(imageRequests);
        setStateImages(Object.assign({}, ...imageResults));
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" src="/domesticvideo.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10">Discover Indias States</h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Select a State</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {states.map((state) => (
            <div key={state} className="relative group flex flex-col items-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all cursor-pointer">
              {stateImages[state] ? (
                <Image 
                  src={stateImages[state]} 
                  alt={state} 
                  width={100}  // Set explicit width
                  height={100} // Set explicit height
                  className="w-24 h-24 mb-3 transition-transform transform group-hover:scale-110 rounded-lg object-cover"
                />
              ) : (
                <>
                  <p className="text-red-500">Image not available</p>
                  {console.log(`No image found for: ${state}`)}
                </>
              )}
              <Link href={`/states/${state}`}>
                <p className="text-lg font-semibold text-gray-800 hover:underline">{state.replace("-", " ").toUpperCase()}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
