'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/1.png', title: 'Destination' },
  { src: '/2.png', title: 'Hotels' },
  { src: '/3.png', title: 'Transport' },
  { src: '/4.png', title: 'Food' },
  { src: '/5.png', title: 'Culture' },
  { src: '/6.png', title: 'Adventure' },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function GalleryWithModal() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
    setSelectedCategory(null); // Reset filter on open
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filtered = shuffledImages.filter((img) => img.title === category);
    if (filtered.length > 0) {
      const firstMatchIndex = shuffledImages.findIndex((img) => img.title === category);
      setSelectedIndex(firstMatchIndex);
    }
  };

  const filteredImages = selectedCategory
    ? shuffledImages.filter((img) => img.title === selectedCategory)
    : shuffledImages;

  const showPrev = () => {
    const current = filteredImages.findIndex((img) => img.src === shuffledImages[selectedIndex].src);
    const prev = (current === 0 ? filteredImages.length - 1 : current - 1);
    const actualIndex = shuffledImages.findIndex((img) => img.src === filteredImages[prev].src);
    setSelectedIndex(actualIndex);
  };

  const showNext = () => {
    const current = filteredImages.findIndex((img) => img.src === shuffledImages[selectedIndex].src);
    const next = (current === filteredImages.length - 1 ? 0 : current + 1);
    const actualIndex = shuffledImages.findIndex((img) => img.src === filteredImages[next].src);
    setSelectedIndex(actualIndex);
  };

  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mt-12 mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
        <p className="text-gray-600 text-lg">Click to view in full screen</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shuffledImages.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <div className="bg-white text-center py-2 font-semibold text-gray-700">{item.title}</div>
            <Image
              src={item.src}
              alt={`Gallery Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 mt-20 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center px-4">
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
          >
            &times;
          </button>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {['Destination', 'Hotels', 'Transport', 'Food', 'Culture', 'Adventure'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow'
                    : 'bg-gray-200 text-gray-700 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="relative max-w-4xl w-full">
            <button
              onClick={showPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-110 z-10"
            >
              &#8592;
            </button>

            <Image
              src={shuffledImages[selectedIndex].src}
              alt="Full Image"
              width={1000}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg"
            />

            <button
              onClick={showNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold hover:scale-110 z-10"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
