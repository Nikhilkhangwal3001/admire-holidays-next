"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const ContactUsForm = () => {
  const [result, setResult] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Error ❌");
    }

    setIsSubmitting(false);
  };

  return (
    <div className=" text-gray-800">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're here to help. Reach out to us for any inquiries, assistance, or collaboration.
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7004.845431704971!2d77.0258597434756!3d28.61709035269247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s34%2C%20Sewak%20Park%20(1st%20floor)%2C%20Dwarka%20More%20Metro%2C%20Near%20Metro%20Pillar%20No-772%2C%20New%20Delhi%20-%20110059!5e0!3m2!1sen!2sin!4v1744116126291!5m2!1sen!2sin" className="w-full" height="450" ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
