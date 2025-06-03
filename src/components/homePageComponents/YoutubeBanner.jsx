"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Videotest from "@/app/Videotestimonial/Videotest";

export default function Testimonials() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllImagesModal, setShowAllImagesModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://admiredashboard.theholistay.in/public-gallery-images")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const allImages = data.flatMap((item) =>
            item.images.map(
              (img) => `https://admiredashboard.theholistay.in/${img}`
            )
          );
          setGalleryImages(allImages);
        } else {
          console.error("Unexpected API response format:", data);
          setGalleryImages([]);
        }
      })
      .catch((error) => console.error("Error fetching images:", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (galleryImages.length === 0) return;

    const shuffle = () => {
      const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
      setShuffledImages(shuffled);
    };

    shuffle();
    const interval = setInterval(shuffle, 5000);

    return () => clearInterval(interval);
  }, [galleryImages]);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    setShowAllImagesModal(false);
    document.body.style.overflow = 'hidden';
  };

  const openAllImagesModal = () => {
    setShowAllImagesModal(true);
    setIsModalOpen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowAllImagesModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length
    );
  };

  return (
    <section className="px-6 min-h-screen mt-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#CF1E27] mb-4">
            Your trusted partner in travel and tour experiences.
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the unforgettable moments we havve created for our travelers.
          </p>
        </div>

        <section className="py-8 px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our Gallery
          </h3>

          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {shuffledImages.slice(0, 7).map((image, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 hover:shadow-xl hover:z-10 hover:scale-[1.02]"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}

              {shuffledImages.length > 7 && (
                <div
                  className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={openAllImagesModal}
                >
                  <Image
                    src={shuffledImages[7]}
                    alt="More Images"
                    fill
                    className="object-cover brightness-75 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-bold">+{shuffledImages.length - 7}</span>
                    <span className="text-lg">View All</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Single Image Modal */}
        {isModalOpen && selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
            <div className="relative max-w-5xl w-full mx-4">
              <button
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-200 z-50"
                onClick={closeModal}
              >
                <X size={36} />
              </button>

              <div className="relative aspect-video max-h-[80vh]">
                <Image
                  src={shuffledImages[selectedIndex]}
                  alt="Selected Image"
                  fill
                  className="rounded-lg object-contain"
                  priority
                />
              </div>

              <button
                className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
                onClick={handlePrev}
              >
                <ArrowLeft size={28} />
              </button>

              <button
                className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
                onClick={handleNext}
              >
                <ArrowRight size={28} />
              </button>
            </div>
          </div>
        )}

        {/* All Images Modal */}
        {showAllImagesModal && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-start z-50 p-4 pt-20 overflow-y-auto backdrop-blur-sm">
            <div className="relative max-w-7xl w-full">
              <button
                className="fixed top-8 right-8 text-white hover:text-yellow-400 transition-colors duration-200 z-50"
                onClick={closeModal}
              >
                <X size={36} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shuffledImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => {
                      setSelectedIndex(index);
                      setShowAllImagesModal(false);
                      setIsModalOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Videotest />
    </section>
  );
}