"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const ContactUsForm = () => {
  const [result, setResult] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const contactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    try {
      const response = await fetch("https://admiredashboard.theholistay.in/api/submit-form", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Submitted ✅");
        event.target.reset();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Auto-close after 3 seconds
      } else {
        console.error("Error", data);
        setResult(data.message || "Error ❌");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Error ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-gray-800">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We are here to help. Reach out to us for any inquiries, assistance, or collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl">
              <IoLocationOutline size={32} className="text-red-500 mt-1" />
              <p>
                <strong>Address:</strong><br />
                34, Sewak Park (1st floor), Dwarka More Metro,<br />
                Near Metro Pillar No-772, New Delhi - 110059
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl">
              <MdOutlineAddIcCall size={32} className="text-red-500 mt-1" />
              <p>
                <strong>Phone:</strong><br />
                1800-121-4252
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl">
              <MdOutlineMessage size={32} className="text-red-500 mt-1" />
              <p>
                <strong>Email:</strong><br />
                info@admireholidays.com
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white shadow-md p-6 rounded-xl">
              <FaClock size={28} className="text-red-500 mt-1" />
              <p>
                <strong>Working Hours:</strong><br />
                Mon - Sat: 10 AM - 6 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={contactSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Leave a Message</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-md px-4 py-3"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-3"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-300"
            >
              {result}
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-6">Find Us On Map</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7004.845431704971!2d77.0258597434756!3d28.61709035269247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s34%2C%20Sewak%20Park%20(1st%20floor)%2C%20Dwarka%20More%20Metro%2C%20Near%20Metro%20Pillar%20No-772%2C%20New%20Delhi%20-%20110059!5e0!3m2!1sen!2sin!4v1744116126291!5m2!1sen!2sin" 
            className="w-full" 
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4 relative animate-scaleIn">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              aria-label="Close popup"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We will contact you soon.
              </p>
              <button
                onClick={closePopup}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;