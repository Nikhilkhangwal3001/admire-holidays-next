"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TrendingDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentImages, setCurrentImages] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [itineraryCounts, setItineraryCounts] = useState({});

  // Keen Slider initialization
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 2, spacing: 12 },
        },
        "(max-width: 768px)": {
          slides: { perView: 1, spacing: 10 },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        const autoplay = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        };
        slider.on("created", autoplay);
        slider.on("dragStarted", () => clearTimeout(timeout));
        slider.on("animationEnded", autoplay);
        slider.on("updated", autoplay);
      },
    ]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://admiredashboard.theholistay.in/public-domestic-destinations-images"
        );
        setDestinations(res.data);
        
        // Fetch counts for all destinations in parallel
        const countPromises = res.data.map(item => 
          axios.get(`https://admiredashboard.theholistay.in/public-itineraries/${item.destination}`)
            .then(res => ({
              [item.destination]: res.data.length
            }))
            .catch(() => ({
              [item.destination]: item.itineraries_count // Fallback to original count
            }))
        );
        
        const counts = await Promise.all(countPromises);
        setItineraryCounts(Object.assign({}, ...counts));
        
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervals = destinations.map((item, index) => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % item.public_images.length;
        setCurrentImages((prev) => ({
          ...prev,
          [index]: currentIndex,
        }));
      }, 2000);
      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, [destinations]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-32">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#261F43]">
        Weekend Gateway Destinations
      </h2>

      {destinations.length > 0 ? (
        <div ref={sliderRef} className="keen-slider">
          {destinations.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <Link href={`trending-destination/${item.destination}`}>
                <div 
                  className="bg-white rounded-xl shadow-md overflow-hidden p-4 h-[400px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Image with itinerary count in center */}
                  <div className="relative w-full h-48 rounded-md overflow-hidden">
                    {item.public_images.length > 0 && (
                      <>
                        <Image
                          src={`https://admiredashboard.theholistay.in/${item.public_images[currentImages[index] || 0]}`}
                          alt={item.destination}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-black bg-opacity-50 text-white text-lg font-bold px-3 py-1 rounded-full">
                            {itineraryCounts[item.destination] ?? item.itineraries_count}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Centered title */}
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-lg text-[#261F43]">
                      {item.destination}
                    </h3>
                  </div>

                  {/* Call & Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-600 font-semibold text-2xl">
                      <FaPhoneAlt />
                    </div>
                    <button 
                      className={`w-full text-white ml-3 px-4 py-2 text-sm rounded-md transition-colors ${
                        isHovered ? 'bg-[#261F43]' : 'bg-red-600'
                      }`}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading destinations...</p>
      )}
    </div>
  );
};

export default TrendingDestination;