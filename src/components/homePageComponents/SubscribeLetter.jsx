"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Mail, User, Phone } from "lucide-react";

const SubscribeLetter = () => {
  const [result, setResult] = useState("Subscribe");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Subscribing...");

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed ✅");
      event.target.reset();
      setFormData({ name: "", phone: "", email: "" });
    } else {
      console.error("Error:", data);
      setResult(data.message || "Subscription Failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0">
        <Image
          src="/Andaman11.jpg"
          alt="Newsletter Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      <div className="z-10 w-full max-w-3xl bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Stay in the Loop</h2>
        <p className="text-center text-gray-600 mb-8">
          Subscribe to receive updates, offers, and more!
        </p>

        <form onSubmit={submitForm} className="space-y-6">
          {/* Name */}
          <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400">
            <Phone className="text-gray-400 mr-3" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400">
            <Mail className="text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full outline-none bg-transparent text-gray-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg transition duration-300 shadow-md"
          >
            {result}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeLetter;
