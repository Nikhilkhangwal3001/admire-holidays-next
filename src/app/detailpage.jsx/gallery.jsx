import { useState, useEffect } from "react";
import Image from "next/image";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

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

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  const openFullscreen = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setShowAll(true);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
    setShowAll(false);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="p-6">
      <div className="grid gap-4 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(showAll ? images : images.slice(0, 6)).map((img, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-xl cursor-pointer"
            onClick={() => openFullscreen(index)}
          >
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50">
          <div className="relative bg-black rounded-lg w-full h-full text-center">
            <button className="absolute mt-20 top-4 right-4 text-white text-3xl font-bold" onClick={closeFullscreen}>
              ✖
            </button>
            <div className="flex justify-between items-center mb-4">
              <button className="text-2xl text-white font-bold px-4 py-2" onClick={handlePrev}>
                ⬅
              </button>
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={500}
                height={400}
                className="rounded-lg mt-28 shadow-lg"
              />
              <button className="text-2xl font-bold px-4 text-white py-2" onClick={handleNext}>
                ➡
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg cursor-pointer ${currentIndex === index ? 'border-blue-500 scale-100 duration-150' : 'border-gray-300'}`}
                  onClick={() => openFullscreen(index)}
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
