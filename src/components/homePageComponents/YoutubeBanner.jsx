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

  useEffect(() => {
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
      .catch((error) => console.error("Error fetching images:", error));
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
    setShowAllImagesModal(false); // Close "All Images" modal if individual image is clicked
  };

  const openAllImagesModal = () => {
    setShowAllImagesModal(true);
    setIsModalOpen(false); // Close individual image modal if "All Images" is clicked
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
    <section className="px-6 min-h-screen mt-32">
      <h2 className="md:text-2xl text-xl font-semibold text-[#CF1E27] text-center">
        Your trusted partner in travel and tour experiences.
      </h2>

      <section className="py-2 px-4 md:px-16 lg:px-32">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-yellow-600 mb-8">
          Explore Our Gallery
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
          {shuffledImages.slice(0, 7).map((image, index) => (
            <div
              key={index}
              className="relative w-[85%] mx-auto aspect-square overflow-hidden rounded-md cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}

          {shuffledImages.length > 7 && (
            <div
              className="relative w-[85%] mx-auto aspect-square overflow-hidden rounded-md cursor-pointer group"
              onClick={openAllImagesModal} // This opens all images in a modal
            >
              <Image
                src={shuffledImages[7]}
                alt="More Images"
                fill
                className="object-cover brightness-50 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                +{shuffledImages.length - 7} More
              </div>
            </div>
          )}
        </div>

        {/* Modal for displaying a single image */}
        {isModalOpen && selectedIndex !== null && !showAllImagesModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 mt-20 flex justify-center items-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-4 right-4 text-white z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={32} />
              </button>

              <Image
                src={shuffledImages[selectedIndex]}
                alt="Selected Image"
                width={900}
                height={600}
                className="rounded-lg w-full max-h-[80vh] object-contain"
              />

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-md"
                onClick={handlePrev}
              >
                <ArrowLeft size={24} />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-md"
                onClick={handleNext}
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Modal for displaying all images */}
        {showAllImagesModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 mt-20 flex justify-center items-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-4 right-4 text-white z-50"
                onClick={() => setShowAllImagesModal(false)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-wrap justify-center space-x-4 space-y-4 overflow-y-auto max-h-[80vh]">
                {shuffledImages.map((image, index) => (
                  <div key={index} className="w-[300px]">
                    <Image
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      width={900}
                      height={600}
                      className="rounded-lg w-full max-h-[80vh] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <Videotest />
    </section>
  );
}

