"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHeroVideo = async () => {
      try {
        const response = await axios.get(
          "https://admiredashboard.theholistay.in/public-hero-section-videos/home"
        );
        if (response.data.length > 0 && response.data[0].video_url) {
          setVideoUrl(
            `https://admiredashboard.theholistay.in/${response.data[0].video_url}`
          );
        }
      } catch (error) {
        console.error("Error fetching hero section video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroVideo();

    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="relative w-full md:h-[611px] overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute inset-0 w-full h-full z-[-1]">
          {loading ? (
            <p className="text-white text-center mt-10">Loading Video...</p>
          ) : videoUrl ? (
            <video
              className="absolute w-full h-full object-cover"
              src={videoUrl}
              autoPlay
              loop
              muted
            />
          ) : (
            <p className="text-white text-center mt-10">Video not available</p>
          )}
        </div>

        {/* Content Section */}
        <div className="relative flex pt-32 items-center lg:gap-4 gap-10 lg:flex-row flex-col justify-start">
          <div className="flex flex-col gap-10 py-10 lg:pl-32 px-5">
            <p className="text-white text-xl font-LaBelle">
              Travel Around The World
            </p>
            <h1 className="lg:text-6xl text-white md:text-5xl sm:block text-2xl font-bold">
              Discover the <br /> most engaging <br /> places
            </h1>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative border border-blue-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-700 hover:text-red-500 text-2xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-700">Plan Your Journey</h2>
            <p className="text-sm text-center mb-6 text-gray-600">
              Get in touch with us to explore the best travel experiences!
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                placeholder="Tell us your dream destination..."
                rows={4}
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-600 to-red-500 text-white rounded-md py-2 font-semibold hover:from-yellow-700 hover:to-red-600 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
