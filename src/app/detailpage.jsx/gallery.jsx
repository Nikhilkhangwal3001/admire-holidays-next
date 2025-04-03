import { useState, useEffect } from "react";
import Image from "next/image";

const titles = ["Destination", "Stay", "Activity", "Fun and Joy", "All Images", "Transport"];

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://admiredashboard.theholistay.in/public-gallery-images");
        const data = await response.json();
        if (data && Array.isArray(data.images)) {
          setImages(data.images.map(img => `https://admiredashboard.theholistay.in/${img}`));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedImageIndex(null);
    setShowPopup(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6">
      <div className="grid gap-4 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, 6).map((img, index) => (
          <div
            key={index}
            className={`relative bg-white p-4 rounded-xl shadow-xl cursor-pointer ${index === 5 ? 'block' : 'hidden sm:block'}`}
            onClick={() => openPopup(index)}
          >
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-lg text-sm">
              {titles[index] || "Gallery"}
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 ">
          <div className="relative bg-black rounded-lg w-full h-full mt-20 text-center p-4">
            <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={closePopup}>
              ✖
            </button>
            <h2 className="text-white text-2xl mb-4">{titles[selectedImageIndex]}</h2>
            <div className="flex items-center justify-center gap-4 p-4">
              <button className="text-white text-3xl" onClick={handlePrev}>⬅</button>
              <Image
                src={images[selectedImageIndex]}
                alt="Selected Image"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <button className="text-white text-3xl" onClick={handleNext}>➡</button>
            </div>
            {/* Thumbnail images below large image */}
            <div className="hidden sm:flex gap-2 mt-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg cursor-pointer ${selectedImageIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => openPopup(index)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={60}
                    className="w-20 h-14 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
