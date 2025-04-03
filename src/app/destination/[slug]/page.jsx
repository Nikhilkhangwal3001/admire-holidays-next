"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Gallery from "@/app/detailpage.jsx/gallery";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import { CheckCircleIcon } from "@heroicons/react/solid";
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
  const [openIndex, setOpenIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const baseUrl = "https://admiredashboard.theholistay.in/";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholistay.in/public-gallery-image"
        );
        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        if (data && data.images && Array.isArray(data.images)) {
          const fullImagePaths = data.images.map((img) => baseUrl + img);
          setGalleryImages(fullImagePaths);
        } else {
          console.error("Invalid image data format", data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
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
  const VideoBanner = ({ slug }) => {
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
      const fetchVideoUrl = async () => {
        try {
          const response = await fetch(
            "https://admiredashboard.theholistay.in/public-gallery-image"
          );
          const data = await response.json();

          // Assuming the response contains a field like "videoUrl"
          if (data && data.videoUrl) {
            setVideoUrl(data.videoUrl);
          } else {
            console.error("Video URL not found in response:", data);
          }
        } catch (error) {
          console.error("Error fetching video URL:", error);
        }
      };

      fetchVideoUrl();
    }, []);
  };
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const whyChoosePoints = [
    "Expert Team with Years of Experience",
    "Customer Satisfaction is Our Priority",
    "Affordable Pricing with Quality Service",
    "24/7 Customer Support Available",
    "Trusted by Thousands of Happy Clients",
    "Fast and Secure Processing",
    "100% Transparency in Work",
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <Gallery />

      <div className="max-w-8xl mx-auto py-12 px-6">
        {loading && (
          <p className="text-center text-lg font-semibold">Loading...</p>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}

        {stateData ? (
          <div className="">
            <h2 className="md:text-2xl  text-xl font-bold text-gray-900 capitalize mb-6 tracking-wide relative before:absolute before:-left-4 before:top-1/2 before:w-2 before:h-10 before:bg-red-600 before:-translate-y-1/2">
              {stateData.title || "No Title Available"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4 text-gray-900">
              {/* Duration */}
              <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg transition transform hover:scale-105">
                <span className="text-red-600 md:text-xl text-md font-bold">
                  ⏳ Duration
                </span>
                <span className="text-xl mt-3">
                  {stateData.duration || "N/A"}
                </span>
              </div>

              {/* Pricing */}
              <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg transition transform hover:scale-105">
                <span className="text-yellow-600 text-md md:text-xl font-bold">
                  💰 Pricing
                </span>
                <span className="text-xl text-center mt-3">
                  {stateData.pricing || "N/A"}
                </span>
              </div>

              {/* Type (Domestic/International) */}
              <div className="flex flex-col items-center p-6  rounded-2xl shadow-lg transition transform hover:scale-105">
                <span className="text-red-600 text-md md:text-xl font-bold">
                🌍Type
                </span>
                <span className="text-xl mt-3">
                  {stateData.domestic_or_international || "N/A"}
                </span>
              </div>
            </div><br /><br />
            <h2 className="md:text-2xl text-xl   font-extrabold text-gray-900 text-center capitalize mb-8 tracking-wide relative">
              <span className="text-red-600">
                Explore the Beauty of Destination
              </span>
              <br />
              <span className="block mt-2 w-24 h-1 bg-yellow-600 mx-auto"></span>
            </h2>

            <div className="mt-10 px-4">
              {Array.isArray(stateData.destination_images) &&
              stateData.destination_images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                  spaceBetween={20}
                  slidesPerView={1} // Default to 1 for mobile
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  effect="coverflow"
                  centeredSlides={true}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  breakpoints={{
                    480: { slidesPerView: 1 }, // Mobile
                    768: { slidesPerView: 2 }, // Tablets
                    1024: { slidesPerView: 3 }, // Desktops
                  }}
                  className="w-full max-w-6xl mx-auto"
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
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2  max-w-9xl">
              {/* Left Side - Trip Details */}
              <div className="w-full">
                <div className="bg-white w-full border-l-4 mt-10 border-blue-500 shadow-lg p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    🌍 Destination Overview
                  </h3>
                  <p className="md:text-lg text-sm text-gray-700 leading-relaxed">
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
                <br />
                <br />
                <h2 className="md:text-2xl text-xl font-semibold text-gray-800 capitalize mb-6">
                  Trip Itinerary
                </h2>
                {stateData.days_information &&
                stateData.days_information.length > 0 ? (
                  stateData.days_information.map((day, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left flex justify-between items-center py-3 px-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none"
                      >
                        <h6 className="text-[12px] md:text-xl  font-bold text-gray-900">
                          <span className="bg-red-600 p-2 rounded-lg text-white">
                            Day{day.day}
                          </span>{" "}
                          : {day.title}
                        </h6>
                        <span className="text-gray-600">
                          {openIndex === index ? "▲" : "▼"}
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow-md mt-2">
                          <p className="text-gray-700">
                            <strong>Destination:</strong>{" "}
                            {day.detail ? (
                              <span
                                dangerouslySetInnerHTML={{ __html: day.detail }}
                              />
                            ) : (
                              "No description available"
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No itinerary available</p>
                )}
              </div>

              {/* Right Side - Inquiry Form */}
              <div className="bg-white shadow-lg mt-10 p-6 w-full md:w-96 mx-auto rounded-lg border border-gray-300">
                <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
                  Inquiry Form
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Message
                    </label>
                    <textarea
                      className="w-full p-2 border rounded-lg"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-red-600"
                  >
                    Submit
                  </button>
                </form>
                {/* Why Choose Us Section */}
                <section
                  id="why-choose-us"
                  className="mt-10 flex flex-col items-center justify-center  p-6"
                >
                  <h2 className="md:text-2xl text-xl font-bold mb-6 text-center">
                    Why Choose Us
                  </h2>
                  <ul className="max-w-2xl w-full bg-white shadow-lg p-6 rounded-lg">
                    {whyChoosePoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-lg text-gray-700 py-2 border-b last:border-b-0"
                      >
                        {/* <CheckCircleIcon className="w-6 h-6 text-green-500" /> */}
                        {/* <span>{point}</span> */}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Horizontal Filter */}
              <div className="flex flex-wrap justify-between items-center p-4 ">
                <div className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <button
                    onClick={() => scrollToSection("itinerary")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Itinerary Detail
                  </button>
                  <button
                    onClick={() => scrollToSection("meals")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Meals
                  </button>
                  <button
                    onClick={() => scrollToSection("inclusion")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Inclusion
                  </button>
                  <button
                    onClick={() => scrollToSection("exclusion")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Exclusion
                  </button>
                  <button
                    onClick={() => scrollToSection("accommodation")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Accommodation Info
                  </button>
                  <button
                    onClick={() => scrollToSection("payment")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Payment Mode
                  </button>
                  <button
                    onClick={() => scrollToSection("cancellation")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                  >
                    Cancellation Policy
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">
                  🌍 Explore the Destination
                </h3>
                {images.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="text-gray-500 text-center mt-6 italic">
                    No Additional Images Available
                  </p>
                )}
              </div>

              {/* Sections */}
              <section
                id="itinerary"
                className="flex justify-center items-center p-10 "
              >
                <div className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-yellow-500 ">
                  <h3 className="md:text-2xl text-xl font-extrabold text-gray-900 mb-8 flex items-center gap-4 border-b-4 pb-4 border-yellow-300">
                    📌 <span>Tour Details</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
                    {/* Duration */}
                    <div className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow-lg transition transform hover:scale-105">
                      <span className="text-red-600 md:text-xl text-md font-bold">
                        ⏳ Duration
                      </span>
                      <span className="text-xl mt-3">
                        {stateData.duration || "N/A"}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow-lg transition transform hover:scale-105">
                      <span className="text-yellow-600 text-md md:text-xl font-bold">
                        💰 Pricing
                      </span>
                      <span className="text-xl text-center mt-3">
                        {stateData.pricing || "N/A"}
                      </span>
                    </div>

                    {/* Type (Domestic/International) */}
                    <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl shadow-lg transition transform hover:scale-105">
                      <span className="text-red-600 text-md md:text-xl font-bold">
                        🌍 Type
                      </span>
                      <span className="text-xl mt-3">
                        {stateData.domestic_or_international || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-8 p-8 bg-gray-50 rounded-2xl shadow-lg border-l-8 border-gray-400 transition transform hover:scale-105">
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 flex items-center gap-3 border-b-2 pb-3 border-gray-300">
                      📝 <span>Description</span>
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
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
              </section>

              <section className=" flex flex-col   p-6 sm:p-10">
                <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border-t-8 border-yellow-500 ">
                  <h3 className="md:text-2xl text-xl font-extrabold text-gray-900 mb-6 sm:mb-8 flex items-center gap-4 border-b-4 pb-4 border-red-300">
                    📜 <span>Important Information</span>
                  </h3>

                  {/* Terms & Conditions */}
                  <div className="p-6 sm:p-8  rounded-2xl shadow-lg border-l-8 border-red-400 transition transform hover:scale-105 mb-6">
                    <h4 className="md:text-2xl text-xl font-semibold text-red-700 mb-4 flex items-center gap-3 border-b-2 pb-3 border-red-300">
                      📑 <span>Terms & Conditions</span>
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-lg">
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
                  <div className="p-6 sm:p-8 bg-yellow-50 rounded-2xl shadow-lg border-l-8 border-yellow-400 transition transform hover:scale-105">
                    <h4 className="md:text-2xl text-xl font-semibold text-yellow-700 mb-4 flex items-center gap-3 border-b-2 pb-3 border-yellow-300">
                      📝 <span>Special Note</span>
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
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
                </div>
              </section>
              <section
                id="inclusion"
                className=" flex flex-col items-center px-4 py-10 bg-gray-50"
              >
                <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6 text-center">
                  📌 Tour Inclusions & Exclusions
                </h3>

                <div className="w-full  space-y-6">
                  {/* Inclusion Section */}
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h4 className="text-2xl font-semibold text-red-600 mb-3">
                      ✅ Inclusion
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {stateData.inclusion ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: stateData.inclusion,
                          }}
                        />
                      ) : (
                        <span className="text-gray-500 italic">
                          No description available
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Additional Inclusion Section */}
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h4 className="md:text-2xl text-xl font-semibold text-yellow-600 mb-3">
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
                </div>
              </section>

              {/* Exclusion Section */}
              <section id="exclusion" className=" flex flex-col  px-4 py-10 ">
                <div className=" p-6 bg-white rounded-lg shadow-lg">
                  <h4 className="md:text-2xl text-xl font-semibold text-red-600 mb-3">
                    ❌ Exclusion
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {stateData.exclusion ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: stateData.exclusion,
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 italic">
                        No description available
                      </span>
                    )}
                  </p>
                </div>
              </section>
              {/* Accommodation Section */}
              <section
                id="accommodation"
                className=" flex flex-col px-4 py-10 "
              >
                <div className=" p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-500">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6 text-center">
                    🏨 Accommodation Information
                  </h3>

                  <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-6">
                    <h4 className="text-2xl font-semibold text-yellow-600 mb-3">
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

                  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="md:text-2xl text-xl font-semibold text-red-600 mb-3">
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
              </section>

              {/* Payment Section */}
              <section id="payment" className=" flex flex-col  px-4 py-10 ">
                <div className=" p-6 bg-white rounded-lg shadow-lg border-l-4 border-red-500">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6 text-center">
                    💳 Payment Information
                  </h3>

                  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h4 className="md:text-2xl text-xl font-semibold text-red-600 mb-3">
                      💰 Payment Mode
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
                </div>
              </section>

              <section id="cancellation" className=" flex">
                {/* Cancellation Policy */}
                <div className="p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-lg shadow-lg border border-red-300">
                  {/* Cancellation Policy Heading */}
                  <div className="flex items-center mb-3">
                    <span className="text-red-600 text-2xl">❌</span>
                    <h2 className="md:text-2xl text-xl font-bold text-red-700 ml-2">
                      Cancellation Policy
                    </h2>
                  </div>

                  {/* Policy Description */}
                  <p className="text-gray-700 text-lg leading-relaxed">
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
              </section>
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
