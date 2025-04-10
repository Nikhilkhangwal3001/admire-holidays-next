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
import triphighlight from "@/app/detailpage.jsx/triphighlight";
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
  const [selected, setSelected] = useState(null);
  const handleClose = () => setSelected(null);
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
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [charLimit] = useState(300); // Adjust limit as needed
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
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Fallback if stateData is null or undefined
  const fullContent = stateData?.destination_detail || "";
  const shortContent = fullContent.slice(0, charLimit);
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

  const highlights = [
    {
      title: "Mountains",
      img: "/images/mountain.jpg",
      desc: "Adventure in the snowy mountains.",
    },
    {
      title: "Beach",
      img: "/images/beach.jpg",
      desc: "Relaxing vibes by the sea.",
    },
    {
      title: "City",
      img: "/images/city.jpg",
      desc: "Nightlife and skyscrapers.",
    },
    {
      title: "Forest",
      img: "/images/forest.jpg",
      desc: "Green peaceful escape.",
    },
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
              <h2 className="md:text-3xl max-w-6xl m-5 text-2xl font-semibold mt-14 text-gray-900 capitalize  mb-8 tracking-wide relative before:absolute before:-left-4 before:top-1/2 before:w-2 before:h-10 before:bg-red-600 before:-translate-y-1/2">
                {stateData.title || "No Title Available"}
              </h2>
              <div className="bg-white  border-l-4 mt-10 border-red-500 shadow-lg p-5 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  🌍 Destination Overview
                </h3>
                <p className="md:text-lg text-sm text-gray-700 leading-relaxed">
                  {fullContent ? (
                    <>
                      <span
                        className="text-gray-800"
                        dangerouslySetInnerHTML={{
                          __html: isExpanded
                            ? fullContent
                            : `${shortContent}...`,
                        }}
                      />
                      {fullContent.length > charLimit && (
                        <button
                          onClick={toggleExpand}
                          className="ml-2 text-red-600 border-2  border-gray-600 rounded-lg p-1 mt-2 font-semibold hover:underline focus:outline-none"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </>
                  ) : (
                    <span className="text-gray-500 italic">
                      No description available
                    </span>
                  )}
                </p>
              </div>
            </div>
            <section className="py-10  bg-white">
              <div className=" mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold  text-blue-900-600 mb-6 border-b-4 border-blue-900 inline-block">
                  Trip Highlights
                </h2>

                <ul className="list-disc list-inside text-red-800 space-y-2 text-lg">
                  <li>Explore breathtaking landscapes and scenic routes</li>
                  <li>Enjoy local cuisine and cultural experiences</li>
                  <li>Stay in top-rated accommodations</li>
                  <li>Guided tours by experienced professionals</li>
                  <li>Memorable activities and fun-filled adventures</li>
                </ul>
              </div>

              {/* <div className="flex gap-6 mt-10 text-gray-800"> */}
              {/* Duration */}
              {/* <div>
                  <span className="text-sm font-semibold text-gray-600 border-b-2 border-red-500 pb-1 inline-block">
                    Duration
                  </span>
                  <div className="mt-2 text-lg font-medium">
                    {stateData.duration || "N/A"}
                  </div>
                </div> */}

              {/* Pricing */}
              {/* <div>
                  <span className="text-sm font-semibold text-gray-600 border-b-2 border-yellow-500 pb-1 inline-block">
                    Pricing
                  </span>
                  <div className="mt-2 text-lg font-medium">
                    {stateData.pricing || "N/A"}
                  </div>
                </div> */}

              {/* Type */}
              {/* <div>
                  <span className="text-sm font-semibold text-gray-600 border-b-2 border-blue-500 pb-1 inline-block">
                    Type
                  </span>
                  <div className="mt-2 text-lg font-medium">
                    {stateData.domestic_or_international || "N/A"}
                  </div>
                </div>
              </div> */}
              {/* Modal */}
              {selected && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                  onClick={handleClose}
                >
                  <div
                    className="bg-white rounded-xl max-w-md p-6 text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-full h-64 relative mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={selected.img}
                        alt={selected.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
                    <p className="text-gray-600">{selected.desc}</p>
                  </div>
                </div>
              )}
            </section>
            {/* Horizontal Filter */}
            <div className="flex mt-14 flex-wrap justify-between items-center p-4 ">
              <div className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button
                  onClick={() => setShow(!show)}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                >
                  {show ? "Hide" : "Tour"} Details
                </button>
                <button
                  onClick={() => scrollToSection("itinerary")}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                >
                  Itinerary Detail
                </button>
                <button
                  onClick={() => scrollToSection("inclusion")}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                >
                  Inclusion/Exclusion
                </button>
                {/* <button
                  onClick={() => scrollToSection("exclusion")}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                >
                  
                </button> */}
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
                <button
                  onClick={() => scrollToSection("term")}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-red-600 transition"
                >
                  Term & Conditions
                </button>
              </div>
            </div>
            {show && (
              <section
                id="meals"
                className="flex justify-center items-center px-4 py-16 bg-white"
              >
                <div className="w-full max-w-9xl border-l-4 border-yellow-500 pl-6">
                  {/* Heading */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-12 border-b pb-4 border-gray-200">
                    Tour Details
                  </h3>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 mb-12">
                    {/* Duration */}
                    <div>
                      <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                        Duration
                      </h4>
                      <p className="text-base">{stateData.duration || "N/A"}</p>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                        Pricing
                      </h4>
                      <p
                        onClick={() => setShowModal(true)}
                        className="text-base border-2 border-red-600 text-center text-white cursor-pointer p-1 rounded-lg bg-yellow-600"
                      >
                        {stateData.pricing || "N/A"}
                      </p>
                    </div>
                    {/* Modal */}
                    {showModal && (
                      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
                          {/* Close Button */}
                          <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500"
                          >
                            &times;
                          </button>

                          {/* Form Heading */}
                          <h2 className="text-xl font-semibold mb-4 text-center">
                            Enquiry Form
                          </h2>

                          {/* Form */}
                          <form className="space-y-4">
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <textarea
                              placeholder="Your Message"
                              className="w-full border border-gray-300 rounded px-3 py-2"
                              rows="4"
                            ></textarea>

                            <button
                              type="submit"
                              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    )}

                    {/* Type */}
                    <div>
                      <h4 className="text-lg font-semibold border-b-2 border-yellow-400 mb-2 pb-1">
                        Type
                      </h4>
                      <p className="text-base">
                        {stateData.domestic_or_international || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  {/* <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                    Description
                  </h4>
                  <div className="text-gray-700 leading-relaxed text-base md:text-lg">
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
                  </div>
                </div> */}
                </div>
              </section>
            )}
            <div
              id="itinerary"
              className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Left Side - Trip Details */}
              <div className="md:col-span-2 w-full">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  Trip Itinerary
                </h2>

                {stateData.days_information?.length > 0 ? (
                  stateData.days_information.map((day, index) => (
                    <div
                      key={index}
                      className="mb-6 border-b border-gray-300 pb-4"
                    >
                      {/* Accordion Button */}
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left flex justify-between items-center py-3 px-4 bg-gray-100 rounded-md shadow hover:bg-gray-200"
                      >
                        <h6 className="text-sm md:text-xl text-gray-900 font-medium">
                          <span className="bg-red-600 p-2 rounded-lg text-white">
                            Day {day.day}
                          </span>{" "}
                          : {day.title}
                        </h6>
                        <span className="text-gray-600 text-sm">
                          {openIndex === index ? "▲" : "▼"}
                        </span>
                      </button>

                      {/* Show Detail + Images only when open */}
                      {openIndex === index && (
                        <>
                          {/* Detail Text */}
                          <div className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow mt-4">
                            <p className="text-gray-700">
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

                          {/* Image Slider */}
                          <div className="rounded-lg shadow-lg mt-4">
                            {images.length > 0 ? (
                              <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation
                                autoplay={{
                                  delay: 3000,
                                  disableOnInteraction: false,
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                className="w-full"
                              >
                                {images.map((img, imgIndex) => (
                                  <SwiperSlide key={imgIndex}>
                                    <div
                                      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                                      onClick={() =>
                                        setSelectedImage(
                                          `https://admiredashboard.theholistay.in/${img}`
                                        )
                                      }
                                    >
                                      <Image
                                        src={`https://admiredashboard.theholistay.in/${img}`}
                                        alt={`Image ${imgIndex + 1}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
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
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No itinerary available</p>
                )}
              </div>

              {/* Right Side - Sticky Inquiry Form */}
              <div className="md:sticky md:top-24 h-fit w-full md:w-80 space-y-6">
                {/* Inquiry Form Box */}
                <div className="bg-white shadow p-4 rounded-lg border border-gray-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    Inquiry Form
                  </h2>
                  <form className="space-y-3">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="1234567890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        rows="3"
                        className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Your message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-600 hover:bg-red-600 text-white py-1.5 rounded-md text-sm transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {/* Why Choose Us Box */}
                <div className="bg-white shadow p-4 rounded-lg border border-gray-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    Why Choose Us
                  </h2>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm">
                    {whyChoosePoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <section id="tour-info" className="px-4 py-16 bg-gray-100">
                <section
                  id="inclusion"
                  className="px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
                    Tour Inclusions & Exclusions
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Inclusion Card */}
                    <div className="relative bg-white border-l-8 border-green-500 rounded-2xl shadow-md hover:shadow-xl transition p-6">
                      <div className="absolute -top-5 left-5 bg-green-500 text-white px-3 py-1 rounded-md text-xs font-semibold shadow">
                        Included
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-green-600 text-3xl mr-3">✅</span>
                        <h3 className="text-xl font-semibold text-gray-800">
                          What’s Included
                        </h3>
                      </div>
                      <div className="text-gray-700 text-sm leading-relaxed text-justify">
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
                      </div>
                    </div>

                    {/* Exclusion Card */}
                    <div className="relative bg-white border-l-8 border-red-500 rounded-2xl shadow-md hover:shadow-xl transition p-6">
                      <div className="absolute -top-5 left-5 bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold shadow">
                        Exclusion
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-red-600 text-3xl mr-3">❌</span>
                        <h3 className="text-xl font-semibold text-gray-800">
                          What’s Exclusion
                        </h3>
                      </div>
                      <div className="text-gray-700 text-sm leading-relaxed text-justify">
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
                      </div>
                    </div>
                  </div>
                </section>

                {/* Additional Inclusion */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8 transition hover:shadow-lg max-w-9xl mx-auto">
                  <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
                    Additional Inclusion
                  </h3>
                  <div className="text-gray-700 leading-relaxed text-justify text-base">
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
                  </div>
                </div>

                {/* Additional Details */}
                {/* <div className="bg-white rounded-xl shadow-md p-8 transition hover:shadow-lg max-w-9xl mx-auto">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                    Additional Details
                  </h3>
                  <div className="text-gray-700 leading-relaxed text-justify text-base">
                    {stateData.additional_details ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: stateData.additional_details,
                        }}
                      />
                    ) : (
                      <span className="text-gray-500 italic">
                        No additional details provided
                      </span>
                    )}
                  </div>
                </div> */}
              </section>

              <section
                id="accommodation"
                className="flex flex-col px-4 py-10 bg-gray-50"
              >
                <div className="p-6 sm:p-10 bg-white rounded-3xl shadow-2xl border-l-8 border-indigo-500">
                  {/* Section Heading */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b-4 pb-4 border-indigo-300">
                    Accommodation Information
                  </h3>

                  {/* Hotel Details */}
                  <div className="p-6 sm:p-8 bg-gray-100 rounded-2xl shadow-lg mb-8 border-l-8 border-yellow-400 transition-transform hover:scale-[1.02]">
                    <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                      Hotel Details
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-base">
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
                </div>
              </section>

              {/* Payment Section */}
              <section
                id="payment"
                className="flex flex-col px-4 py-10 bg-gray-50"
              >
                <div className="p-6 sm:p-10 bg-white rounded-3xl shadow-2xl border-l-8 border-red-500">
                  {/* Section Heading */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b-4 pb-4 border-red-300">
                    Payment Information
                  </h3>

                  {/* Payment Mode Block */}
                  <div className="p-6 sm:p-8 bg-gray-100 rounded-2xl shadow-lg border-l-8 border-yellow-500 transition-transform hover:scale-[1.02]">
                    <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                      Payment Mode
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-base">
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

              <section
                id="cancellation"
                className="flex flex-col px-4 py-10 bg-gray-50"
              >
                <div className="p-6 sm:p-10 bg-gradient-to-br from-red-100 to-white rounded-3xl shadow-2xl border-l-8 border-red-500 w-full max-w-9xl mx-auto">
                  {/* Heading */}
                  <h2 className="text-xl md:text-2xl font-extrabold text-red-700 mb-6 border-b-4 border-red-300 pb-4 text-center">
                    Cancellation Policy
                  </h2>

                  {/* Policy Description */}
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
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
              <section
                id="term"
                className="flex flex-col p-6 sm:p-10 bg-gray-100"
              >
                <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border-t-8 border-yellow-500">
                  {/* Main Heading */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-8 border-b-4 pb-4 border-red-300">
                    Important Information
                  </h3>

                  {/* Terms & Conditions */}
                  <div className="p-6 sm:p-8 rounded-2xl shadow-lg border-l-8 border-red-400 transition-transform hover:scale-[1.02] mb-8 bg-white">
                    <h4 className="text-xl md:text-2xl font-semibold text-red-700 mb-4 border-b-2 pb-3 border-red-300">
                      Terms & Conditions
                    </h4>
                    <p className="text-gray-800 leading-relaxed text-sm md:text-base">
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

                  {stateData.special_note && (
                    <div className="p-6 sm:p-8 bg-yellow-50 rounded-2xl shadow-lg border-l-8 border-yellow-400 transition-transform hover:scale-[1.02]">
                      <h4 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-4 border-b-2 pb-3 border-yellow-300">
                        Special Note
                      </h4>
                      <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: stateData.special_note,
                          }}
                        />
                      </p>
                    </div>
                  )}
                </div>
              </section>
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
