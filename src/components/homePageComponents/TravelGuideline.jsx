"use client";
import React from "react";

const SectionsWithVideoPlay = () => {
  const sections = [
    {
      title: "Pack Smart",
      description:
        "Avoid overpacking by bringing only the essentials for a comfortable trip. Focus on versatile items to maximize space and reduce stress.",
      videoSrc: "/Smartpack.mp4",
    },
    {
      title: "Plan Ahead",
      description:
        "Do some research on your destination and make any necessary reservations ahead of time. Planning helps avoid last-minute hassles.",
      videoSrc: "/Planahed.mp4",
    },
    {
      title: "Stay Safe",
      description:
        "Be mindful of safety guidelines, especially when traveling to unfamiliar places. Always know the emergency numbers of your destination.",
      videoSrc: "/Travelinsurance.mp4",
    },
    {
      title: "Travel Insurance",
      description:
        "Secure travel insurance to cover unexpected issues that may arise during your trip, such as cancellations or medical emergencies.",
      videoSrc: "/Packlight.mp4",
    },
    {
      title: "Stay Healthy",
      description:
        "Always pack a first aid kit, stay hydrated, and follow proper health precautions. It’s important to stay in top condition while traveling.",
      videoSrc: "/stayhealthy.mp4",
    },
    {
      title: "Pack Light",
      description:
        "Keep your luggage light and easy to manage by packing only what you need. Less is more, and a lighter bag means more freedom.",
      videoSrc: "/Travelinsurance.mp4",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-[#fdf9f9] to-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 drop-shadow-xl">
            Ready to Be Guided to Your Next Adventure?
          </h1>
          <p className="text-xl text-[#B91C1C] mt-6 max-w-2xl mx-auto">
            Discover breathtaking locations and plan your next great journey with confidence.
          </p>
        </div>

        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-20 group`}
          >
            <div className="w-full md:w-1/2 relative animate-fade-in-up">
              <video
                controls
                autoPlay
                muted
                loop
                className="w-full rounded-2xl shadow-2xl ring-4 ring-yellow-500/30"
              >
                <source src={sec.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="w-full md:w-1/2 px-2 animate-fade-in-up delay-200">
              <h2 className="text-4xl font-bold text-[#CF1E27] mb-5">
                {sec.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {sec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionsWithVideoPlay;
