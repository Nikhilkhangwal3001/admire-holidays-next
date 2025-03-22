"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

const API_URL = "https://admiredashboard.theholistay.in/public-itineraries";

export default function InternationalDestinationDetail() {
  const { destination } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDestination() {
      try {
        const { data } = await axios.get(`${API_URL}/${destination}`);
        console.log("API Response:", data);
        setItineraries(data.itineraries || []); // Ensure it's an array
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDestination();
  }, [destination]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!itineraries.length) return <p className="text-center text-red-600">No itineraries found.</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraries.map((itinerary, i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={`https://admiredashboard.theholistay.in/${itinerary.destination_thumbnail}`}
                alt={itinerary.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{itinerary.title}</h2>
              <p className="text-gray-600">{itinerary.duration}</p>
              <p className="text-gray-700 font-medium">{itinerary.pricing}</p>
              <a
                href={`/destination/${itinerary.slug}`}
                className="block text-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
