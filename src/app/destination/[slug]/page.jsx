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
import TripHiglights from "@/components/itenary_details/TripHiglights";
import { ItenaryDetailContextProvider } from "@/context/itenary-details/ItenaryDetailsContext";
import TripHiglightsRightSection from "@/components/itenary_details/TripHiglightsRightSection";
import TripHiglightsLeftSection from "@/components/itenary_details/TripHiglightsLeftSection";

export default function ItineraryPage() {
  const { slug } = useParams();
  const [selected, setSelected] = useState(null);
  const handleClose = () => setSelected(null);
  const [loading, setLoading] = useState(false);
  const [stateData, setStateData] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [destination, setDestination] = useState("Delhi");
  const [selectedImages, setSelectedImages] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [openIndex, setOpenIndex] = useState([]);
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
        `https://admiredashboard.theholistay.in/api/public-itinerary/${slug}`
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
    if (openIndex.includes(index)) {
      let newArr = [...openIndex];
      let indexToRemove = newArr.indexOf(index);

      newArr.splice(indexToRemove, 1);

      setOpenIndex(newArr);
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

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
    <ItenaryDetailContextProvider itenaryDetails={stateData} setItenaryDetails={setStateData}>
      <div className="min-h-screen ">
        <Navbar />
        <Gallery destination={stateData?.selected_destination || "no data"} />

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
                    modules={[
                      Navigation,
                      Pagination,
                      Autoplay,
                      EffectCoverflow,
                    ]}
                    spaceBetween={20}
                    slidesPerView={1} // Def9ault to 1 for mobile
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
                <div className="flex flex-col md:flex-row">
                  {/* Left Side */}
                 <TripHiglightsLeftSection />

                  {/* Right Side - Sticky Inquiry Form */}
                  <TripHiglightsRightSection />
                </div>
              </div>
              <section className="py-10  bg-white">
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
                      <h3 className="text-xl font-bold mb-2">
                        {selected.title}
                      </h3>
                      <p className="text-gray-600">{selected.desc}</p>
                    </div>
                  </div>
                )}
              </section>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No itinerary data available.
            </p>
          )}
        </div>
        {/* <Itinary/> */}
        <div class="flex justify-center gap-4 mt-2">
          <button class="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300">
            Review
          </button>
          <button class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-300">
            Share
          </button>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </ItenaryDetailContextProvider>
  );
}
