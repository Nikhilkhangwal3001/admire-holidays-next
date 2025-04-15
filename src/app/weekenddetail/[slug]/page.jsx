"use client";  // 📌 Mark the component as a Client Component

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 📌 Import router

export default function ItineraryPage() {
  const router = useRouter();
  
  // Destructure 'destination' safely, providing a fallback value if undefined
  const { destination } = router.query || {}; // Fallback to an empty object if router.query is undefined

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BASE_IMAGE_URL = "https://admiredashboard.theholistay.in/";

  useEffect(() => {
    // Early return if destination is not available yet
    if (!destination) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://admiredashboard.theholistay.in/public-weekend-trip-trending-itineraries/${destination}`
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load itinerary data.");
      }
      setLoading(false);
    };

    fetchData();
  }, [destination]);

  // If destination is undefined, show a loading message
  if (!destination) {
    return (
      <div className="bg-gray-100">
        <Navbar />
        <p className="text-center text-lg font-semibold">Destination is loading...</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* 👇 Video or Header */}
      <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden mb-8">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/kashmir-banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="px-4 md:px-10 lg:px-20 pb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 capitalize">
          {destination} Itinerary
        </h1>

        {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <Link href={`/destination/${item.slug}`} key={index}>
              <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-xl transition-all duration-300 text-sm">
                <div className="relative w-full h-32 md:h-40 rounded-md overflow-hidden mb-2">
                  <Image
                    src={`${BASE_IMAGE_URL}${item.destination_thumbnail}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-base font-semibold capitalize mb-1">
                  {item.title}
                </h3>
                <p><strong>Destination:</strong> {item.selected_destination}</p>
                <p><strong>Duration:</strong> {item.duration}</p>
                <p><strong>Pricing:</strong> {item.pricing}</p>
                <p><strong>Type:</strong> {item.domestic_or_international}</p>

                <div className="grid grid-cols-3 gap-1 mt-3">
                  {(item.destination_images || []).slice(0, 3).map((img, i) => (
                    <div key={i} className="relative w-full aspect-[4/3] rounded overflow-hidden">
                      <Image
                        src={`${BASE_IMAGE_URL}${img}`}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full bg-red-600 text-white py-1.5 rounded hover:bg-yellow-600 text-sm">
                  Explore Destination
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
