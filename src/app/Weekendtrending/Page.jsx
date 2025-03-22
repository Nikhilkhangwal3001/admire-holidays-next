"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import conf from "../../../conf/conf";
import Link from "next/link";
import axios from "axios";

async function fetchDestinationData(slug) {
  try {
    const res = await fetch(`${conf.laravelBaseUrl}/public-itinerary/${slug}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching destination data:", error);
    return null;
  }
}

export default function DestinationDetail() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      const data = await fetchDestinationData(slug);
      setDestination(data);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!destination) return <p className="text-center text-red-500">Destination not found.</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{destination.title}</h1>
      <Image
        src={`${conf.laravelBaseUrl}/${destination.destination_thumbnail}`}
        alt={destination.title}
        width={800}
        height={400}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">{destination.destination_detail}</p>

      <h2 className="text-2xl font-semibold mt-6">Pricing</h2>
      <p className="text-gray-600">{destination.pricing || "Contact for details"}</p>

      <h2 className="text-2xl font-semibold mt-6">Duration</h2>
      <p className="text-gray-600">{destination.duration}</p>

      <h2 className="text-2xl font-semibold mt-6">Selected Destination</h2>
      <p className="text-gray-600">{destination.selected_destination}</p>
    </section>
  );
}
