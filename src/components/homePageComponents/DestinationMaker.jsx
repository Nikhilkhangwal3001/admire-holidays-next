import React, { useState } from "react";
import { CiCalendarDate, CiLocationOn, CiPhone, CiUser } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiGroupLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";

const DestinationMaker = () => {
  const [result, setResult] = useState(" Enquire");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState(null);
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const requestQuote = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");
      formData.append("destination", destination);
      formData.append("dates", dates ? dates.toISOString().split("T")[0] : "");
      formData.append("guests", guests);
      formData.append("name", name);
      formData.append("mobile", mobile);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Submitted ");
        event.target.reset();
        setDestination("");
        setDates(null);
        setGuests("");
        setName("");
        setMobile("");
        setErrors({});
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!destination.trim()) {
      errors.destination = "Destination is required";
    }

    if (!dates) {
      errors.dates = "Dates is required";
    }

    if (!guests.trim()) {
      errors.guests = "Guests is required";
    } else if (isNaN(guests)) {
      errors.guests = "Guests must be a number";
    }

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (isNaN(mobile)) {
      errors.mobile = "Mobile number must be a number";
    }

    return errors;
  };

  return (
    <form action=" " onSubmit={requestQuote}>
      <div className="p-4 bg-white md:gap-6 gap-10 md:w-[80%] w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 rounded-2xl grid lg:grid-cols-4 xl:grid-cols-6 items-center justify-center">
        {/* New Name Field */}
        <div className="flex-col  justiy-center w-full  flex gap-4">
          <div className="flex items-center lg:gap-2 gap-4">
            <CiUser color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="name">
              Name
            </label>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`text-gray-500 text-sm w-full border-b ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-red-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* New Mobile Field */}
        <div className="flex-col  justify-center w-full  flex gap-4">
          <div className="flex items-center lg:gap-2 gap-4">
            <CiPhone color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="mobile">
              Mobile
            </label>
          </div>
          <input
            type="text"
            id="mobile"
            placeholder="Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className={`text-gray-500 text-sm w-full border-b ${
              errors.mobile
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-red-500"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>
        {/* ... (existing fields remain the same) */}
        <div className="flex-col  justify-center w-full flex gap-4">
          <div className="flex items-center lg:gap-2 gap-4">
            <CiLocationOn color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="destination">
              Destination
            </label>
          </div>
          <input
            type="text"
            id="destination"
            placeholder="Where you going"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={`text-gray-500 text-sm w-full border-b ${
              errors.destination
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-red-500"
            }`}
          />
          {errors.destination && (
            <p className="text-red-500 text-sm">{errors.destination}</p>
          )}
        </div>
        <div className="flex-col  justify-center flex gap-5">
          <div className="flex items-center mt-1 lg:gap-2 gap-4">
            <CiCalendarDate color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="dates">
              Date
            </label>
          </div>
          <DatePicker
            id="dates"
            placeholderText="DD-MM-YYYY"
            selected={dates}
            onChange={(date) => setDates(date)}
            dateFormat="dd-MM-yyyy"
            className={`text-gray-500 text-sm w-full border-b ${
              errors.dates
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-red-500"
            }`}
          />
          {errors.dates && (
            <p className="text-red-500 text-sm">{errors.dates}</p>
          )}
        </div>
        <div className="flex-col  justify-center flex gap-5">
          <div className="flex items-center lg:gap-2 mt-1 gap-4">
            <CiUser color="#FD4A4C" size={30} />
            <label className="text-sm" htmlFor="guests">
              Guests
            </label>
          </div>
          <input
            type="text"
            id="guests"
            placeholder="2 Persons"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={`text-gray-500 text-sm w-full border-b ${
              errors.guests
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-red-500"
            }`}
          />
          {errors.guests && (
            <p className="text-red-500 text-sm">{errors.guests}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex-col  justify-center flex gap-5">
          <button
            type="submit"
            className=" flex items-center text-sm rounded-lg justify-center p-4 h-16 bg-red-500 text-white"
          >
            {result}
          </button>
        </div>
      </div>
    </form>
  );
};

export default DestinationMaker;
