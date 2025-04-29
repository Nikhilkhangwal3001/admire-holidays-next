"use client";
import React, { useState } from "react";
import Image from "next/image";
import Andaman from "../../../public/Andaman12.jpg";

const QueryForm = () => {
  const [isQuery, setIsQuery] = useState(true);
  const [result, setResult] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    if (!message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setResult("Sending...");
      const formData = new FormData(event.target);
      formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setResult("Submitted");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        } else {
          setResult("Error");
        }
      } catch (error) {
        setResult("Error");
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-2">
        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-auto">
          <Image
            src={Andaman}
            alt="Support"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="p-8 flex flex-col justify-center">
          {/* Toggle Buttons */}
          <div className="flex bg-gray-200 rounded-full p-1 mb-6">
            <button
              onClick={() => setIsQuery(true)}
              className={`flex-1 py-2 text-sm rounded-full transition ${
                isQuery
                  ? "bg-red-500 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Suggestions or Complaints
            </button>
            <button
              onClick={() => setIsQuery(false)}
              className={`flex-1 py-2 text-sm rounded-full transition ${
                !isQuery
                  ? "bg-red-500 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Not Getting Response
            </button>
          </div>

          {/* Form */}
          {isQuery ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 w-full px-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-red-400 focus:outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 w-full px-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-red-400 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`mt-1 w-full px-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-red-400 focus:outline-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
              >
                {result}
              </button>
            </form>
          ) : (
            <div className="text-center px-4">
              <p className="text-gray-600 text-sm mb-2">
                If you're not getting a response, please email us at:
              </p>
              <a
                href="mailto:info@admireholidays.com"
                className="text-red-500 underline font-medium"
              >
                info@admireholidays.com
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
