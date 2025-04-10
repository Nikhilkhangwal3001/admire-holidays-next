'use client';
import Image from 'next/image';
import { useState } from 'react';

const imageData = {
  Destination: ['/1.png', '/2.png'],
  Resort: ['/3.png', '/4.png'],
  Adventure: ['/5.png', '/6.png'],
  Culture: ['/7.png'],
  Activity: ['/8.png', '/9.png'],
};

const topics = Object.keys(imageData);

export default function GalleryWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const openModal = (topic) => {
    setSelectedTopic(topic === 'All Images' ? topics[0] : topic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  return (
    <section className="px-4 py-16 mt-14 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
        <p className="text-gray-600 text-lg">Click on a topic to explore images</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...topics, 'All Images'].map((topic, index) => (
          <div
            key={index}
            onClick={() => openModal(topic)}
            className="relative h-52 bg-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center group"
          >
            <Image
              src="/default.jpg" // common image for all (you can use separate if needed)
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
        <div className="fixed mt-20 inset-0 z-50 bg-black bg-opacity-80 flex flex-col px-4 py-8">
          <button
            onClick={closeModal}
            className="text-white text-3xl absolute top-6 right-6 font-bold hover:text-red-400"
          >
            &times;
          </button>

          {/* Horizontal Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 mt-10">
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

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {imageData[selectedTopic]?.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`${selectedTopic} Image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
