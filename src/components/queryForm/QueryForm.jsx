"use client";
import React, { useState } from "react";

const QueryForm = () => {
  const [isQuery, setIsQuery] = useState(true);
  const [result, setResult] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setIsQuery(!isQuery);
  };

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
          console.log("Error", data);
          setResult("Error");
        }
      } catch (error) {
        console.error("Error:", error);
        setResult("Error");
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="flex md:flex-row flex-col mt-32 max-w-7xl px-3 mx-auto overflow-hidden">
      <div className="md:w-1/2 h-fit w-full ">
        <img
          src="https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1c3RvbWVyJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-full h-full "
        />
      </div>
      <div className="md:w-1/2 flex flex-col w-full">
        <div className="flex ">
          <div
            className={`w-1/2 py-2 text-center sm:text-base text-sm flex justify-center items-center cursor-pointer ${
              isQuery ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={handleToggle}
          >
            Suggestions or Complaints
          </div>
          <div
            className={`w-1/2 py-4 text-center cursor-pointer sm:text-base text-sm ${
              isQuery ? "bg-gray-200 text-gray-700 " : "bg-red-500 text-white"
            }`}
            onClick={handleToggle}
          >
            Not getting response
          </div>
        </div>
        <div className="p-6">
          {isQuery ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="1"
                  placeholder="Enter your message"
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  {result}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-gray-700  mb-4">
                If you are not getting any response, please mail us at
              </p>
              <a
                href="mailto:info@admireholidays.com"
                className=" text-black underline"
              >
                mailto:info@admireholidays.com
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
