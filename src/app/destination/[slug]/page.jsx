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
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ItineraryPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

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
        <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 capitalize">
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
            <h2 className="text-3xl font-semibold text-gray-800 capitalize mb-6">
              {stateData.title || "No Title Available"}
            </h2>

            {stateData.destination_thumbnail && (
              <Image
                src={`https://admiredashboard.theholistay.in/${stateData.destination_thumbnail}`}
                alt="Thumbnail"
                width={600}
                height={400}
                className="rounded-lg mb-6"
              />
            )}
            <div className="mt-6">
              {Array.isArray(stateData.destination_images) &&
              stateData.destination_images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3} // Display 3 images at a time
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  breakpoints={{
                    1024: { slidesPerView: 3 }, // Large screens
                    768: { slidesPerView: 2 }, // Medium screens (Tablets)
                    480: { slidesPerView: 1 }, // Small screens (Mobile)
                  }}
                  className="w-full max-w-5xl mx-auto"
                >
                  {stateData.destination_images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center">
                        <Image
                          src={`https://admiredashboard.theholistay.in/${img}`}
                          alt={`Image ${index + 1}`}
                          width={400}
                          height={300}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="text-gray-500 text-center mt-4">
                  No Additional Images
                </p>
              )}
            </div>

            <p className="text-gray-600">
              <strong>Destination</strong>{" "}
              {stateData.destination_detail ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: stateData.destination_detail,
                  }}
                />
              ) : (
                "No description available"
              )}
            </p>
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

            <p className="text-gray-600">
              <strong>Duration:</strong> {stateData.duration || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Pricing:</strong> {stateData.pricing || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Type:</strong>{" "}
              {stateData.domestic_or_international || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Description:</strong>{" "}
              {stateData.destination_detail ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: stateData.destination_detail,
                  }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Inclusion:</strong>{" "}
              {stateData.inclusion ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.inclusion }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Additional Inclusion:</strong>{" "}
              {stateData.additional_inclusion ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: stateData.additional_inclusion,
                  }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Exclusion</strong>{" "}
              {stateData.exclusion ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.exclusion }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Terms and Conditions</strong>{" "}
              {stateData.terms_and_conditions ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: stateData.terms_and_conditions,
                  }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Special Note</strong>{" "}
              {stateData.special_note ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.special_note }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Cancellation Policy</strong>{" "}
              {stateData.cancellation_policy ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: stateData.cancellation_policy,
                  }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Payment Mode</strong>{" "}
              {stateData.payment_mode ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.payment_mode }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Hotel Details</strong>{" "}
              {stateData.hotel_details ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.hotel_details }}
                />
              ) : (
                "No description available"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Status Flag</strong>{" "}
              {stateData.status_flags ? (
                <span
                  dangerouslySetInnerHTML={{ __html: stateData.status_flags }}
                />
              ) : (
                "No description available"
              )}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {Array.isArray(stateData.destination_images) &&
              stateData.destination_images.length > 0 ? (
                stateData.destination_images.map((img, index) => (
                  <Image
                    key={index}
                    src={`https://admiredashboard.theholistay.in/${img}`}
                    alt={`Image ${index + 1}`}
                    width={200}
                    height={150}
                    className="rounded-md"
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-3">No Additional Images</p>
              )}
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
