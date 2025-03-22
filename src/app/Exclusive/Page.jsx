"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import conf from "../../../conf/conf";

const DestinationDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return; // Prevent API call if slug is missing

    async function fetchDestination() {
      try {
        console.log("Fetching data for slug:", slug);
        const { data } = await axios.get(`${conf.laravelBaseUrl}/public-itinerary/${slug}`);
        
        if (!data) {
          setError("No data found.");
        } else {
          setDestination(data);
        }
      } catch (err) {
        setError("Failed to fetch destination details.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDestination();
  }, [slug]);

  if (loading) return <p className="text-center text-gray-600">Loading details...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!destination) return <p className="text-center text-red-500">Destination not found.</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-[#261F43] text-3xl md:text-5xl font-bold mb-6">
        {destination?.title}
      </h2>

      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
        <Image
          src={`${conf.laravelBaseUrl}/${destination?.destination_thumbnail}`}
          alt={destination?.title}
          width={800}
          height={400}
          className="object-cover"
        />
      </div>

      <p className="text-lg text-gray-700">{destination?.destination_detail}</p>

      <h3 className="text-2xl font-semibold mt-6">Pricing</h3>
      <p className="text-gray-600">{destination?.pricing || "Contact for details"}</p>

      <h3 className="text-2xl font-semibold mt-6">Duration</h3>
      <p className="text-gray-600">{destination?.duration}</p>

      <h3 className="text-2xl font-semibold mt-6">Selected Destination</h3>
      <p className="text-gray-600">{destination?.selected_destination}</p>
    </section>
  );
};

export default DestinationDetail;
