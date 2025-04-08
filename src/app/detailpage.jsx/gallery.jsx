import { useState, useEffect } from "react";
import Image from "next/image";

const titles = [
  "Destination",
  "Stay",
  "Activity",
  "Fun and Joy",
  "All Images",
  "Transport",
];

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Images");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholis9876tay.in/public-gallery-images"
        );
        const data = await response.json();
        if (data && Array.isArray(data.images)) {
          // Assign a fake category for demo. You may replace it with real data if available.
          const imagesWithCategory = data.images.map((img, index) => ({
            url: `https://admiredashboard.theholis78tay.in/${img}`,
            category: titles[index % titles.length],
          }));
          setImages(imagesWithCategory);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const filteredImages =
    selectedFilter === "All Images"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedImageIndex(null);
    setShowPopup(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {titles.map((title, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full border ${
              selectedFilter === title ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => setSelectedFilter(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-xl shadow-xl cursor-pointer"
            onClick={() => openPopup(index)}
          >
            <Image
              src={img.url}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-lg text-sm">
              {img.category}
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50">
          <div className="relative bg-black rounded-lg w-full h-full mt-20 text-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closePopup}
            >
              ✖
            </button>
            <h2 className="text-white text-2xl mb-4">
              {filteredImages[selectedImageIndex]?.category}
            </h2>

            <div className="hidden sm:flex gap-2 mt-4 justify-center overflow-x-auto">
              {filteredImages.map((img, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg cursor-pointer ${
                    selectedImageIndex === index ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => openPopup(index)}
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button onClick={handlePrev} className="bg-white px-4 py-2 rounded text-black">Prev</button>
              <button onClick={handleNext} className="bg-white px-4 py-2 rounded text-black">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
