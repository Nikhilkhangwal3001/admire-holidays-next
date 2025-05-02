import React, { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const VideoTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholistay.in/public-video-testimonials"
        );
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const visibleVideos = testimonials.slice(0, 7);
  const remainingCount = testimonials.length - 7;

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CF1E27] via-[#f1a7a6] to-[#CF1E27] drop-shadow-lg">
          Hear From Our Happy Travelers
        </h2>
        <p className="text-xl text-gray-600 mt-3">
          Real journeys, real stories. Watch what our travelers have to say!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {visibleVideos.map((testimonial, index) => (
          <div
            key={testimonial.id}
            onClick={() => openModal(index)}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                src={`https://admiredashboard.theholistay.in/${testimonial.video_url}`}
              ></video>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            <div className="p-5 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-center">
              <p className="text-white font-semibold text-lg">{testimonial.title}</p>
            </div>
          </div>
        ))}

        {remainingCount > 0 && (
          <div className="bg-[#CF1E27] text-white rounded-xl shadow-lg flex items-center justify-center aspect-video cursor-pointer hover:bg-[#b71c1c] transition-all">
            <span className="text-3xl font-semibold">+{remainingCount} More</span>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white bg-[#CF1E27] rounded-full p-2 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Video Player */}
            <video
              src={`https://admiredashboard.theholistay.in/${testimonials[selectedIndex].video_url}`}
              className="w-full aspect-video object-contain"
              controls
              autoPlay
              muted
            />

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#CF1E27] text-white rounded-full p-3 shadow-lg hover:bg-[#b71c1c] transition-all"
              onClick={handlePrev}
            >
              <ArrowLeft size={30} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#CF1E27] text-white rounded-full p-3 shadow-lg hover:bg-[#b71c1c] transition-all"
              onClick={handleNext}
            >
              <ArrowRight size={30} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
