"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import conf from "../../../conf/conf"; // Ensure correct path

async function fetchStateData(stateName) {
  try {
    const res = await fetch(`${conf.laravelBaseUrl}/public-itineraries/${stateName}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching state data:", error);
    return null;
  }
}

export default function StateDetail() {
  const { stateName } = useParams(); // Get state name from URL
  const router = useRouter();
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!stateName) {
      router.push("/404"); // Redirect if no stateName
      return;
    }

    async function fetchData() {
      const data = await fetchStateData(stateName);
      setStateData(data);
      setLoading(false);
    }

    fetchData();
  }, [stateName]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!stateData) return <p className="text-center text-red-500">State details not found.</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{stateData.title}</h1>
      <Image
        src={`${conf.laravelBaseUrl}/${stateData.image}`}
        alt={stateData.title}
        width={800}
        height={400}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">{stateData.description}</p>

      <h2 className="text-2xl font-semibold mt-6">Tourist Attractions</h2>
      <p className="text-gray-600">{stateData.attractions || "Details coming soon"}</p>
    </section>
  );
}
