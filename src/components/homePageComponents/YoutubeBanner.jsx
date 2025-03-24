"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    feedback:
      "Admire Holidays made my trip unforgettable! The planning was top-notch, and every detail was carefully considered. The hotels they arranged were luxurious with excellent service, ensuring a comfortable stay. Highly recommend Admire Holidays for a hassle-free and memorable travel experience!",
    rating: 5,
    imageUrl: "/Goacllient1.jpeg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    feedback:
      "Booking my vacation with Admire Holidays was one of the best decisions I’ve made! The trip itself was extraordinary. The hotels were very comfortable and had amazing facilities that made the stay even more enjoyable. I can’t wait to travel with them again!",
    rating: 4,
    imageUrl: "/Goacllient3.jpeg",
  },
  {
    id: 3,
    name: "Sandeep Singh",
    feedback:
      "I had the best holiday experience thanks to Admire Holidays. The hotel stays were exceptional, offering great amenities and comfort, which really helped me relax. Every leg of the journey was seamless, and I didn’t have to worry about any logistics.",
    rating: 5,
    imageUrl: "/Goacllient2.jpeg",
  },
  {
    id: 4,
    name: "Anjali Patel",
    feedback:
      "Admire Holidays took care of everything from start to finish, making our family vacation absolutely perfect. The trip was well-organized with a great mix of sightseeing and leisure. The whole experience was smooth, and I’ll definitely be booking with them again!",
    rating: 4,
    imageUrl: "/Sikkimclient3.jpeg",
  },
];

export default function Testimonials() {
  const initialGalleryImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/3.png",
    "/7.png",
    "/5.png",
    "/6.png",
    "/4.png",
    "/1.png",
  ];
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Added this line

  // Function to open modal and set selected image
  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  // Function to navigate images
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
        Client Testimonials for Admire Holidays
        <p className="text-xl text-[#E69233] mt-2">
          Your trusted partner in travel and tour experiences.
        </p>
      </h2>

      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-100">
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#CF1E27] mb-8">
        Explore Our Gallery
      </h3>

      {/* Image Grid (Show Only 7 + More Images Box) */}
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
              className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}

        {/* More Images Box (8th Image) */}
        <div
          className="relative w-full h-32 md:h-40 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg rounded-lg cursor-pointer"
          onClick={() => openModal(7)}
        >
          +{galleryImages.length - 7} More
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Image Display */}
            <Image
              src={galleryImages[selectedIndex]}
              alt="Selected Image"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation Buttons */}
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


      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 mt-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {testimonial.name}
            </h4>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={testimonial.imageUrl}
                alt={`Testimonial from ${testimonial.name}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${
                    index < testimonial.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
