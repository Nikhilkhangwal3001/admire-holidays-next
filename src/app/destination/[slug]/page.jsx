"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

export default function ItineraryPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardHolder, setCardHolder] = useState("");

  useEffect(() => {
    if (!slug) {
      console.error("Slug is missing!");
      return;
    }
    fetchStateData(slug);
    fetchVideo(slug);
  }, [slug]);

  const fetchStateData = async (slug) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-itinerary/${slug}`
      );
      console.log("API Response:", response.data);
      setStateData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data.");
    }
    setLoading(false);
  };

  const fetchVideo = async (slug) => {
    try {
      const response = await axios.get(
        `https://admiredashboard.theholistay.in/public-destination-video/${slug}`
      );
      if (response.data?.video_url) {
        setVideoUrl(
          `https://admiredashboard.theholistay.in/${response.data.video_url}`
        );
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  // Ensure stateData is defined and destination_images is an array
  const images = stateData?.destination_images ?? [];
  const defaultImage = "/placeholder.jpg"; // Replace with your actual default image

  // Ensure at least 6 images are displayed
  const filledImages =
    images.length >= 6
      ? images
      : [...images, ...Array(6 - images.length).fill(defaultImage)];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
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
        <h1 className="text-white .md:text-3xl text-xl  font-bold z-10 capitalize">
          Discover {slug?.replace("-", " ") || "Destination"}
        </h1>
      </div>

      <div className="max-w-8xl mx-auto py-12 px-6">
        {loading && (
          <p className="text-center text-lg font-semibold">Loading...</p>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}

        {stateData ? (
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="md:text-2xl  text-xl font-bold text-gray-900 capitalize mb-6 tracking-wide relative before:absolute before:-left-4 before:top-1/2 before:w-2 before:h-10 before:bg-red-600 before:-translate-y-1/2">
              {stateData.title || "No Title Available"}
            </h2>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center capitalize mb-8 tracking-wide relative">
              <span className="text-red-600">Explore the Beauty of</span>
              <br />
              <span className="block mt-2 w-24 h-1 bg-yellow-600 mx-auto"></span>
            </h2>

            <div className="mt-10">
              {Array.isArray(stateData.destination_images) &&
              stateData.destination_images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                  spaceBetween={30}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  effect="coverflow"
                  centeredSlides={true}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                  }}
                  className="w-full max-w-5xl mx-auto"
                >
                  {stateData.destination_images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center">
                        <Image
                          src={`https://admiredashboard.theholistay.in/${img}`}
                          alt={`Image ${index + 1}`}
                          width={500}
                          height={350}
                          className="rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="text-gray-500 text-center mt-6 text-lg">
                  No Additional Images Available
                </p>
              )}
            </div>

            <div className="bg-white border-l-4 mt-10 border-blue-500 shadow-lg p-5 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🌍 Destination Overview
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {stateData.destination_detail ? (
                  <span
                    className="text-gray-800"
                    dangerouslySetInnerHTML={{
                      __html: stateData.destination_detail,
                    }}
                  />
                ) : (
                  <span className="text-gray-500 italic">
                    No description available
                  </span>
                )}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 capitalize mb-6">
                Trip Itinerary
              </h2>

              {stateData.days_information &&
              stateData.days_information.length > 0 ? (
                stateData.days_information.map((day, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-700 mt-2">
                      <strong>Destination:</strong>{" "}
                      {day.detail ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: day.detail,
                          }}
                        />
                      ) : (
                        "No description available"
                      )}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No itinerary available</p>
              )}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                📸 Destination Gallery
              </h2>

              {filledImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filledImages.map((img, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <Image
                        src={
                          img.startsWith("http")
                            ? img
                            : `https://admiredashboard.theholistay.in/${img}`
                        }
                        alt={`Destination ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105"
                        onClick={() => setSelectedImage(img)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-4">
                  No images available
                </p>
              )}

              {/* Fullscreen Image Popup */}
              {selectedImage && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
                  onClick={() => setSelectedImage(null)}
                >
                  <div className="relative">
                    <button
                      className="absolute top-4 right-4 text-white text-3xl font-bold"
                      onClick={() => setSelectedImage(null)}
                    >
                      ✖
                    </button>
                    <Image
                      src={
                        selectedImage.startsWith("http")
                          ? selectedImage
                          : `https://admiredashboard.theholistay.in/${selectedImage}`
                      }
                      alt="Selected Image"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📌 Tour Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Duration */}
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 text-lg font-semibold">
                    ⏳ Duration:
                  </span>
                  <span className="text-gray-700">
                    {stateData.duration || "N/A"}
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 text-lg font-semibold">
                    💰 Pricing:
                  </span>
                  <span className="text-gray-700">
                    {stateData.pricing || "N/A"}
                  </span>
                </div>

                {/* Type (Domestic/International) */}
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600 text-lg font-semibold">
                    🌍 Type:
                  </span>
                  <span className="text-gray-700">
                    {stateData.domestic_or_international || "N/A"}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 p-4 bg-white rounded-md shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  📝 Description
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.destination_detail ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.destination_detail,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📌 Tour Inclusions & Exclusions
              </h3>

              {/* Inclusion Section */}
              <div className="p-4 bg-white rounded-md shadow mb-4">
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  ✅ Inclusion
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.inclusion ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: stateData.inclusion }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>

              {/* Additional Inclusion Section */}
              <div className="p-4 bg-white rounded-md shadow mb-4">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  ➕ Additional Inclusion
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.additional_inclusion ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.additional_inclusion,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>

              {/* Exclusion Section */}
              <div className="p-4 bg-white rounded-md shadow">
                <h4 className="text-xl font-semibold text-red-600 mb-2">
                  ❌ Exclusion
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.exclusion ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: stateData.exclusion }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📜 Important Information
              </h3>

              {/* Terms & Conditions */}
              <div className="p-4 bg-white rounded-md shadow mb-4">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  📑 Terms & Conditions
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.terms_and_conditions ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.terms_and_conditions,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>

              {/* Special Note */}
              <div className="p-4 bg-white rounded-md shadow mb-4">
                <h4 className="text-xl font-semibold text-yellow-600 mb-2">
                  📝 Special Note
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.special_note ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.special_note,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>

              {/* Payment Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
                {/* Payment Mode Info */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                    💳 Payment Mode
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {stateData.payment_mode ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: stateData.payment_mode,
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 italic">
                        No payment information available.
                      </span>
                    )}
                  </p>
                </div>

                {/* Payment Form */}
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                    🛒 Complete Your Payment
                  </h4>
                  <form className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="text-gray-600 font-medium">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="**** **** **** ****"
                        className="w-full p-3 mt-2 border rounded-lg focus:ring focus:ring-green-300"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>

                    {/* Expiry & CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-600 font-medium">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-3 mt-2 border rounded-lg focus:ring focus:ring-green-300"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-gray-600 font-medium">CVV</label>
                        <input
                          type="password"
                          placeholder="***"
                          className="w-full p-3 mt-2 border rounded-lg focus:ring focus:ring-green-300"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                      <label className="text-gray-600 font-medium">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mt-2 border rounded-lg focus:ring focus:ring-red-300"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                      />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-red-600 text-white py-3 mt-4 rounded-lg font-semibold hover:bg-green-700 transition">
                      💸 Pay Now
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏨 Accommodation Information
              </h3>

              {/* Hotel Details */}
              <div className="p-4 bg-gray-100 rounded-md shadow mb-4">
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                  🏢 Hotel Details
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.hotel_details ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.hotel_details,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>

              {/* Status Flag */}
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h4 className="text-xl font-semibold text-green-600 mb-2">
                  🚩 Status Flag
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {stateData.status_flags ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stateData.status_flags,
                      }}
                    />
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">
                🌍 Explore the Destination
              </h3>

              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.slice(0, 6).map((img, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      onClick={() =>
                        setSelectedImage(
                          `https://admiredashboard.theholistay.in/${img}`
                        )
                      }
                    >
                      <Image
                        src={`https://admiredashboard.theholistay.in/${img}`}
                        alt={`Image ${index + 1}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <p className="text-white text-lg font-semibold">
                          🔍 View Image
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-6 italic">
                  No Additional Images Available
                </p>
              )}
            </div>
            {/* Cancellation Policy */}
            <div className="p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-lg shadow-lg border border-red-300">
              {/* Cancellation Policy Heading */}
              <div className="flex items-center mb-3">
                <span className="text-red-600 text-2xl">❌</span>
                <h4 className="text-2xl font-bold text-red-700 ml-2">
                  Cancellation Policy
                </h4>
              </div>

              {/* Policy Description */}
              <p className="text-gray-700 leading-relaxed">
                {stateData.cancellation_policy ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: stateData.cancellation_policy,
                    }}
                  />
                ) : (
                  <span className="text-gray-500 italic">
                    No cancellation policy available.
                  </span>
                )}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={`/destination/${stateData.selected_destination || ""}`}
              >
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No itinerary data available.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
