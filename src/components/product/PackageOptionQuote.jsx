
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const PackageOptionQuote = ({ openRequestQuotePopup, closeQuotepopup }) => {
  const [result, setResult] = useState("Submit");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Replace with your Google Form URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    const formData = new FormData();
    formData.append("entry.123456789", event.target.name.value); 
    formData.append("entry.987654321", event.target.phone.value);
    formData.append("entry.456789123", event.target.email.value); 

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setResult("Form Submitted Successfully");
        event.target.reset();
        // Close the popup after a short delay
        setTimeout(() => {
          closeQuotepopup();
        }, 1500); // 1.5 seconds delay
      })
      .catch((error) => {
        console.error("Error", error);
        setResult("An error occurred");
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div
      className={`fixed z-[9999] top-0 left-0 px-4 h-full w-full items-center justify-center bg-gray-700 bg-opacity-90 ${
        openRequestQuotePopup === true ? "flex" : "hidden"
      } `}
    >
      <div className="text-white cursor-pointer text-7xl absolute right-4 top-4">
        <RxCross1 color="white" size={30} onClick={closeQuotepopup} />
      </div>
      <div className="bg-white sm:p-8 p-4 rounded-xl gap-8 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-2 py-2 px-5 w-full border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Number"
              className="mt-2 py-2 px-5 w-full border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter Email"
              className="mt-2 py-2 px-5 w-full border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="py-4 bg-[#FD4A4C] mt-5 w-full px-5 text-sm text-white rounded-lg flex justify-center items-center"
          >
            {result}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageOptionQuote;
