"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResortDetail({ params }) {
  const [resort, setResort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function fetchResort() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://admiredashboard.theholistay.in/public/api/public-resort/${params.id}`
        );
        setResort(res.data);
      } catch (err) {
        setError("Failed to load resort details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchResort();
  }, [params.id]);

  if (loading) return <div className="p-8 text-center">Loading resort details...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!resort) return <div className="p-8 text-center">Resort not found</div>;

  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative w-full h-[500px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(https://admiredashboard.theholistay.in/${resort.public_images[0]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{resort.title}</h1>
          {/* <p className="text-lg md:text-xl italic text-gray-200 mb-2">
            Experience comfort, serenity, and adventure — all in one place.
          </p> */}
          <p className="text-lg md:text-xl">
            {resort.city}, {resort.state}, {resort.country}
          </p>
          {/* <div className="mt-3 flex justify-center items-center text-yellow-400 gap-2">
            <span className="text-xl">★</span>
            <span className="text-white">
              {resort.average_rating} ({resort.review_count.toLocaleString()} reviews)
            </span>
          </div> */}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
         <h1 className="text-4xl md:text-5xl font-bold mb-2">{resort.title}</h1>
          <p className="text-lg md:text-xl italic text-gray-800 mb-2">
            Experience comfort, serenity, and adventure — all in one place.
          </p>
          <p className="text-lg md:text-xl">
            {resort.city}, {resort.state}, {resort.country}
          </p>
          <div className="mt-3 flex mb-4 text-yellow-400 gap-2">
            <span className="text-xl">★</span>
            <span className="text-black">
              {resort.average_rating} ({resort.review_count.toLocaleString()} reviews)
            </span>
          </div>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3">
            <Image
              src={`https://admiredashboard.theholistay.in/${resort.public_images[activeImageIndex]}`}
              alt={resort.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {resort.public_images.map((img, index) => (
              <Image
                key={index}
                src={`https://admiredashboard.theholistay.in/${img}`}
                alt={`${resort.title} ${index + 1}`}
                width={300}
                height={100}
                className={`w-full h-28 object-cover rounded-lg cursor-pointer transition-opacity ${
                  activeImageIndex === index
                    ? "ring-2 ring-indigo-500"
                    : "opacity-80 hover:opacity-100"
                }`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Description & Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About {resort.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{resort.description}</p>
            </section>

            {/* Amenities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {resort.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2 text-indigo-500">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            {resort.activities && resort.activities.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Activities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resort.activities.map((activity, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium">{activity}</h3>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Policies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Policies</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Check-in/Check-out</h3>
                    <p>Check-in: {resort.check_in_time}</p>
                    <p>Check-out: {resort.check_out_time}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p>Email: {resort.contact_email}</p>
                    <p>Phone: {resort.contact_phone}</p>
                  </div>
                </div>
                <div className="whitespace-pre-line text-gray-700">
                  {resort.policies}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="sticky top-4 border border-gray-200 rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">
                  ₹{resort.price_per_night.toLocaleString()}
                </span>
                <span className="text-gray-600">per night</span>
              </div>

              {resort.discount && (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-6">
                  <p className="font-medium">
                    Special Offer: {resort.discount}% discount available
                  </p>
                </div>
              )}

              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Book Now
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                You would not be charged yet
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span>
                    ₹{resort.price_per_night.toLocaleString()} x 1 night
                  </span>
                  <span>₹{resort.price_per_night.toLocaleString()}</span>
                </div>
                {resort.discount && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Discount ({resort.discount}%)</span>
                    <span>
                      -₹
                      {(
                        resort.price_per_night *
                        (resort.discount / 100)
                      ).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between font-semibold mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>
                    ₹
                    {resort.discount
                      ? (
                          resort.price_per_night -
                          resort.price_per_night * (resort.discount / 100)
                        ).toLocaleString()
                      : resort.price_per_night.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
