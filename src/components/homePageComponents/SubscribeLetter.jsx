"use client";
import Image from "next/image";
import React, { useState } from "react";

const SubscribeLetter = () => {
  const [result, setResult] = useState("Subscribe");
  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Subscribing....");
    const formData = new FormData(event.target);
    if (formData.name && formData.phone && formData.email) {
      setFormValid(true);
    }

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <section className="md:px-10 px-5">
      <div className="max-w-7xl  flex justify-around items-center mx-auto rounded-xl bg-gray-100 my-20 h-72 px-2  md:px-8 py-5">
        <img
          src="deliveryBoy.png"
          alt="News Letter"
          className="lg:w-[300px] lg:h-[200px] w-[0px] h-[0px]"
        />

        <div className="flex flex-col px-2 gap-5">
          <p className="md:text-xl text-md w-[99%] text-center font-medium">
            Subscribe To Be The First To Receive New Offers, Discounts And More.
          </p>
          <div className="flex md:px-5 px-0 py-3">
            <form
              action=""
              onSubmit={submitForm}
              className="flex md:px-5 px-0 py-3"
            >
              <input
                type="email"
                name="mail"
                className="md:w-96 w-[99%] text-center rounded-s-xl md:text-lg text-md h-16 flex justify-center items-center"
                placeholder="Enter your email"
              />
              <button className="text-white rounded-e-xl md:text-xl text-md font-medium h-16 md:w-56 w-[150px] bg-red-500">
                {result}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeLetter;
