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
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl animate-pulse font-bold text-[#CF1E27]">
        Hear From Our Happy Travelers
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Real journeys, real stories. Watch what our travelers have to say!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {visibleVideos.map((testimonial, index) => (
          <div
            key={testimonial.id}
            onClick={() => openModal(index)}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                src={`https://admiredashboard.theholistay.in/${testimonial.video_url}`}
              ></video>
            </div>
            <div className="p-3 text-center">
              <p className="text-[#CF1E27] font-medium text-base">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}

        {remainingCount > 0 && (
          <div className="bg-[#CF1E27] text-white rounded-xl shadow-md flex items-center justify-center aspect-video cursor-pointer hover:bg-[#b71c1c] transition-all">
            <span className="text-2xl font-semibold">+{remainingCount} More</span>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white bg-black rounded-full p-1 z-50"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100"
              onClick={handlePrev}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100"
              onClick={handleNext}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
