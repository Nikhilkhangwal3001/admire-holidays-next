import React from "react";

const whyChoosePoints = [
    "Expert Team with Years of Experience",
    "Customer Satisfaction is Our Priority",
    "Affordable Pricing with Quality Service",
    "24/7 Customer Support Available",
    "Trusted by Thousands of Happy Clients",
    "Fast and Secure Processing",
    "100% Transparency in Work",
  ];

function TripHiglightsRightSection() {
  return (
    <div className="md:sticky  md:top-24 h-fit w-full md:w-80 space-y-6">
      {/* Inquiry Form Box */}
      <div className="bg-white shadow p-4 rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">
          Inquiry Form
        </h2>
        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="1234567890"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Message
            </label>
            <textarea
              rows="3"
              className="w-full p-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-red-600 text-white py-1.5 rounded-md text-sm transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Why Choose Us Box */}
      <div className="bg-white shadow p-4 rounded-lg border border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">
          Why Choose Us
        </h2>
        <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm">
          {whyChoosePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TripHiglightsRightSection;
