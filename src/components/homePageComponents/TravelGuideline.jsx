"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SectionsWithScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing effect
     
    });
  }, []);

  return (
    <div className="container">
      <section className="py-16 px-6 mt-14">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-red-600 drop-shadow-lg">
            Ready to Be Guided to Your Next Adventure?
          </h1>
          <p className="text-lg text-[#CF1E27] mt-4 max-w-2xl mx-auto">
            Discover breathtaking locations and plan your next adventure.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-24 mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right" // Left image
          >
            <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/Smartpack.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="w-full md:w-1/2 md:pl-12 text-center md:text-left"
            data-aos="fade-left" // Right content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27]  mb-4">
              Pack Smart
            </h4>
            <p className="text-gray-700">
              Avoid overpacking by bringing only the essentials for a
              comfortable trip. Focus on versatile items to maximize space and
              reduce stress.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-left"
            data-aos="fade-left" // Left content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27] mb-4">
              Plan Ahead
            </h4>
            <p className="text-gray-700">
              Do some research on your destination and make any necessary
              reservations ahead of time. Planning helps avoid last-minute
              hassles.
            </p>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right" // Right image
          >
            <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/Planahed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right" // Left image
          >
             <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/Travelinsurance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="w-full md:w-1/2 md:pl-12 text-center md:text-left"
            data-aos="fade-left" // Right content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27] mb-4">
              Stay Safe
            </h4>
            <p className="text-gray-700">
              Be mindful of safety guidelines, especially when traveling to
              unfamiliar places. Always know the emergency numbers of your
              destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-left"
            data-aos="fade-left" // Left content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27] mb-4">
              Travel Insurance
            </h4>
            <p className="text-gray-700">
              Secure travel insurance to cover unexpected issues that may arise
              during your trip, such as cancellations or medical emergencies.
            </p>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right" // Right image
          >
           <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/Packlight.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right" // Left image
          >
           <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/stayhealthy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="w-full md:w-1/2 md:pl-12 text-center md:text-left"
            data-aos="fade-left" // Right content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27] mb-4">
              Stay Healthy
            </h4>
            <p className="text-gray-700">
              Always pack a first aid kit, stay hydrated, and follow proper
              health precautions. It’s important to stay in top condition while
              traveling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-left"
            data-aos="fade-left" // Left content
          >
            <h4 className="text-3xl font-semibold text-[#CF1E27] mb-4">
              Pack Light
            </h4>
            <p className="text-gray-700">
              Keep your luggage light and easy to manage by packing only what
              you need. Less is more, and a lighter bag means more freedom.
            </p>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right" // Right image
          >
            <video controls width="100%" height="auto" autoPlay muted loop className="rounded-md border border-10xl border-yellow-600">
              <source src="/Travelinsurance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionsWithScrollAnimation;
