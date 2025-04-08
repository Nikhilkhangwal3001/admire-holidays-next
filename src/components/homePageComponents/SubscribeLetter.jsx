"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Mail, User, Phone } from "lucide-react"; // Optional icons

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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="px-5 md:px-10 my-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="lg:w-1/2 lg:flex justify-center items-center  rounded-md">
          <Image
            src="/Andaman11.jpg" 
            alt="Newsletter"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center lg:text-left mb-6">
            Subscribe for Updates
          </h2>

          <form onSubmit={submitForm} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <Phone className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
            >
              {result}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeLetter;
