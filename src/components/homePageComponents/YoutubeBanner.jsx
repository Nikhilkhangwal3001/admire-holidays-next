"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Videotest from '@/app/Videotestimonial/Videotest';

export default function Testimonials() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://admiredashboard.theholistay.in/public-gallery-images")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGalleryImages(
            data.map((img) =>
              img.startsWith("http") ? img : `https://admiredashboard.theholistay.in/${img}`
            )
          );
        } else if (data && Array.isArray(data.images)) {
          setGalleryImages(
            data.images.map((img) =>
              img.startsWith("http") ? img : `https://admiredashboard.theholistay.in/${img}`
            )
          );
        } else {
          console.error("Unexpected API response format:", data);
          setGalleryImages([]);
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="px-6 min-h-screen mt-32">
      <h2 className="text-4xl font-semibold text-[#CF1E27] text-center">
        Your trusted partner in travel and tour experiences.
      </h2>

      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-100">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#CF1E27] mb-8">
          Explore Our Gallery
        </h3>

        <div className="grid grid-cols-4 gap-4">
          {galleryImages.slice(0, 7).map((image, index) => (
            <div
              key={index}
              className="relative w-full h-32 md:h-40 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}

          {galleryImages.length > 7 && (
            <div
              className="relative w-full h-32 md:h-40 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg rounded-lg cursor-pointer"
              onClick={() => openModal(7)}
            >
              +{galleryImages.length - 7} More
            </div>
          )}
        </div>

        {isModalOpen && selectedIndex !== null && (
          <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            <div className="relative flex flex-col items-center">
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
              <Image
                src={galleryImages[selectedIndex]}
                alt="Selected Image"
                width={400}
                height={400}
                className="object-contain rounded-lg"
              />
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  className="bg-white text-black px-3 py-2 rounded-full text-lg"
                  onClick={handlePrev}
                >
                  ◀
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  className="bg-white text-black px-3 py-2 rounded-full text-lg"
                  onClick={handleNext}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Videotest />
    </section>
  );
}
