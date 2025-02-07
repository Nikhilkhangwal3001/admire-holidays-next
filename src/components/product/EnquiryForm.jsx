import React, { useState, useEffect } from "react";

const EnquiryForm = ({ openModalFunc }) => {
  const [result, setResult] = useState(" Request a Quote");

  const requestQuote = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-8 w-full ">
      <form action="" onSubmit={requestQuote} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className=" font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" Your Name"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className=" font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className=" font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className=" font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter Destination"
            className="mt-2 py-2  px-5 w-full border rounded-md"
            required
          />
        </div>

        <button className="py-4 border-[#FD4A4C] border-2 mt-5 w-full px-5  text-base  rounded-lg text-[#FD4A4C] flex justify-center items-center">
          {result}
        </button>
      </form>
      <p className="text-center text-lg my-5 text-gray-600">or</p>
      <button className="py-4  bg-[#3a2f5b]  mb-5 w-full px-5  text-sm text-white rounded-lg  flex justify-center items-center">
        Add to Cart
      </button>

      <p
        className="tex-sm text-red-600 mt-5  cursor-pointer hover:text-[#3a2f5b] text-center"
        onClick={openModalFunc}
      >
        Download as pdf
      </p>
    </div>
  );
};

export default EnquiryForm;
