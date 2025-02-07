"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage, MdChat } from "react-icons/md";

const ContactUsForm = () => {
  const [result, setResult] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="px-4">
      <section className="max-w-7xl  border-[1px] border-gray-200 py-10 rounded-2xl my-20 mx-auto flex-col  flex gap-10 px-4 md:px-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center md:text-5xl  text-3xl  font-bold">
            Get in touch
          </h1>
        </div>
        <div className="flex gap-10 md:flex-row flex-col  justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4] items-center sm:p-4 p-2  rounded-xl">
                <IoLocationOutline color="#00BB98" size={50} />
              </div>
              <p className="text-base text-gray-500">
                34,Sewak park(1st floor), Dwarka more metro,Near metro <br />{" "}
                piller no-772 New Delhi-110059.
              </p>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4]  sm:p-4 p-2  items-center rounded-xl">
                <MdOutlineAddIcCall color="#00BB98" size={50} />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-base">Phone Number</p>
                <p className="text-base text-gray-500">1800-121-4252</p>
              </div>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="flex justify-center bg-[#c2fff4] sm:p-4 p-2  items-center  rounded-xl">
                <MdOutlineMessage color="#00BB98" size={50} />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-base">Email Us</p>
                <p className="text-base text-gray-500">
                  info@admireholidays.com
                </p>
              </div>
            </div>

            {/* <div className="p-10 border-[1px] gap-8 flex flex-col border-gray-300 rounded-xl">
              <div className="flex gap-5 items-center ">
                <div className="flex justify-center items-center  rounded-xl">
                  <img
                    className="mx-auto h-16 w-16 rounded-full"
                    src="userLady.avif"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <p className="text-base">Need help?</p>
                  <p className="text-base text-gray-500">1800-121-4252</p>
                </div>
              </div>
              <div className="w-[100%] mx-auto h-[1px] bg-gray-300"></div>
              <button className="border-red-500 flex gap-2 mx-auto items-center justify-center rounded-lg text-red-500 border-[1px] w-[100%] h-14">
                <MdChat /> Chat with us
              </button>
            </div> */}
          </div>
          <div className="flex flex-col gap-5 items-center justify-start">
            <h1 className="text-xl font-medium text-center">Leave a reply</h1>
            <form
              action=""
              onSubmit={contactSubmit}
              className=" flex flex-col gap-5  "
            >
              <div className="flex gap-5 justify-between">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  className="border-[1px] w-[50%] border-gray-300 rounded-lg py-3 px-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  className="border-[1px] w-[50%] border-gray-300 rounded-lg py-3 px-4"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                name="subject"
                className="border-[1px]  border-gray-300 rounded-lg py-3 px-4"
                required
              />
              <textarea
                name="text"
                placeholder="Textarea *"
                cols="30"
                rows="10"
                className="border-[1px]  border-gray-300 rounded-lg py-3 px-4"
                required
              ></textarea>
              <button className=" text-white bg-red-500 rounded-lg w-1/2 px-5 h-10 flex justify-center items-center md:p-7 ">
                {isSubmitting ? "Sending..." : result}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsForm;
