"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    vpa: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Perform further actions like submitting to the server
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.nameOnCard.trim()) {
      errors.nameOnCard = "Name on card is required";
    }
    if (!data.cardNumber.trim()) {
      errors.cardNumber = "Card number is required";
    } else if (data.cardNumber.replace(/\s/g, "").length !== 16) {
      errors.cardNumber = "Card number must be 16 digits";
    }
    if (!data.expirationMonth.trim() || !data.expirationYear.trim()) {
      errors.expiration = "Expiration date is required";
    }
    if (!data.vpa.trim()) {
      errors.vpa = "VPA is required";
    }
    return errors;
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-8">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">
            Secure payment info
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label
                htmlFor="type1"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  defaultChecked
                />
                <Image
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                  alt="Type-1"
                />
              </label>
            </div>
            <div className="px-2">
              <label
                htmlFor="type2"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <Image
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                  alt="Type 2"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#FD4A4C] transition-colors ${
                  errors.nameOnCard ? "border-red-500" : ""
                }`}
                placeholder="Vikas Chaudhary"
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
              />
              {errors.nameOnCard && (
                <span className="text-red-500">{errors.nameOnCard}</span>
              )}
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#FD4A4C] transition-colors ${
                  errors.cardNumber ? "border-red-500" : ""
                }`}
                placeholder="0000 0000 0000 0000"
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && (
                <span className="text-red-500">{errors.cardNumber}</span>
              )}
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                Expiration date
              </label>
              <div>
                <input
                  type="text"
                  className={`form-input w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#FD4A4C] transition-colors ${
                    errors.expiration ? "border-red-500" : ""
                  }`}
                  placeholder="MM - Month"
                  name="expirationMonth"
                  value={formData.expirationMonth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <input
                type="text"
                className={`form-input w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#FD4A4C] transition-colors ${
                  errors.expiration ? "border-red-500" : ""
                }`}
                placeholder="YYYY - Year"
                name="expirationYear"
                value={formData.expirationYear}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">VPA</label>
            <div>
              <input
                className={`w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-[#FD4A4C] transition-colors ${
                  errors.vpa ? "border-red-500" : ""
                }`}
                placeholder="000"
                type="text"
                name="vpa"
                value={formData.vpa}
                onChange={handleChange}
              />
              {errors.vpa && <span className="text-red-500">{errors.vpa}</span>}
            </div>
          </div>
          <div>
            <Link
              href={"/"}
              className="block w-full max-w-xs mx-auto  bg-[#FD4A4C] text-center  text-white rounded-lg px-3 py-3 font-semibold"
              type="submit"
            >
              <i className="mdi mdi-lock-outline mr-1"></i>PAY NOW
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
