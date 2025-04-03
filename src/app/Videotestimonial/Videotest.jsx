import React, { useEffect, useState } from "react";

const VideoTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

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

  return (
    <section className=" py-16 px-4 text-center text-white">
      <h2 className="text-4xl font-bold mb-8 text-red-600">
        Video Testimonial
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" p-4 rounded-lg shadow-lg">
              <video
                className="w-full h-48 rounded-md mb-4"
                controls
                autoPlay
                muted
                loop
                src={`https://admiredashboard.theholistay.in/${testimonial.video_url}`}
              ></video>
              {/* <p className="text-red-700 font-semibold">Testimonial ID: {testimonial.id}</p> */}
            </div>
          ))
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
