"use client";

import Image from "next/image";
import { useState } from "react";

const highlights = [
  {
    title: "Mountains",
    img: "/images/mountain.jpg",
    desc: "Adventure in the snowy mountains.",
  },
  {
    title: "Beach",
    img: "/images/beach.jpg",
    desc: "Relaxing vibes by the sea.",
  },
  {
    title: "City",
    img: "/images/city.jpg",
    desc: "Nightlife and skyscrapers.",
  },
  {
    title: "Forest",
    img: "/images/forest.jpg",
    desc: "Green peaceful escape.",
  },
];

export default function TripStories() {
  const [selected, setSelected] = useState(null);

  const handleClose = () => setSelected(null);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                onClick={() => setSelected(item)}
                className="w-24 h-24 relative rounded-full border-4 border-pink-500 p-1 cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-xl max-w-md p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-64 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-600">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
