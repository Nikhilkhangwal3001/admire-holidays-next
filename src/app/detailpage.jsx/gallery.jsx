'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const imageData = {
  Destination: [],
  Resort: [],
  Adventure: [],
  Culture: [],
  Activity: [],
};

const topics = Object.keys(imageData);

export default function GalleryWithModal({ destination }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('All Images');
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://admiredashboard.theholistay.in/public-destination-galleries/${destination}`
        );
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (destination) fetchData();
  }, [destination]);

  const openModal = (topic) => {
    setSelectedTopic(topic === 'All Images' ? topics[0] : topic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic('All Images');
  };

  const filteredData =
    selectedTopic && galleryData.length > 0
      ? galleryData.filter((item) => item.gallery_type === selectedTopic.toLowerCase())
      : galleryData;

  return (
    <section className="px-4 py-16 mt-14 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
        <p className="text-gray-600 text-lg">Click on a topic to explore images</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...topics, 'All Images'].map((topic, index) => (
          <div
            key={index}
            onClick={() => openModal(topic)}
            className="relative h-52 bg-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center group"
          >
            <Image
              src="/default.jpg"
              alt={topic}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">{topic}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col px-4 py-8 overflow-y-auto">
          <button
            onClick={closeModal}
            className="text-white text-4xl mt-28 absolute top-6 right-6 font-bold z-50 hover:text-red-400"
          >
            &times;
          </button>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 mt-20">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  selectedTopic === topic
                    ? 'bg-white text-black shadow'
                    : 'bg-gray-300 text-gray-800 hover:bg-white'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Grid Images in Modal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:max-w-6xl mx-auto">
            {filteredData.map((item, idx) =>
              item.public_images.map((img, imgIdx) => (
                <div
                  key={`${idx}-${imgIdx}`}
                  className="rounded-lg overflow-hidden shadow-sm bg-white"
                >
                  <Image
                    src={`https://admiredashboard.theholistay.in/${img}`}
                    alt={`Image ${imgIdx + 1}`}
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
}
