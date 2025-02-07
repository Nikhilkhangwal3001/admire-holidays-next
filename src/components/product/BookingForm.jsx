import React, { useState, useEffect } from "react";

const BookingForm = ({
  homePickupAdultPrice,
  homePickupChildPrice,
  homePickupBabyPrice,
  discount,
  price,
}) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = formatDate(currentDate);

    // Generate Choose Time options dynamically
    const generatedOptions = [];
    for (let i = 0; i < 3; i++) {
      const startDate = new Date(currentDate);
      const endDate = new Date(currentDate);
      endDate.setDate(endDate.getDate() + 6); // Assuming 7 days duration

      const optionString = `From ${formatDate(startDate)} - ${formatDate(
        endDate
      )}`;
      generatedOptions.push({
        value: `option${i + 1}`,
        label: optionString,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });

      currentDate.setDate(currentDate.getDate() + 7); // Move to next week
    }

    setOptions(generatedOptions);
    setSelectedTime(generatedOptions[0].value);

    // Set default Check-in and Check-out dates
    setCheckinDate(generatedOptions[0].startDate);
    setCheckoutDate(generatedOptions[0].endDate);
  }, []);

  const handleTimeChange = (event) => {
    const selectedOption = options.find(
      (opt) => opt.value === event.target.value
    );

    setSelectedTime(event.target.value);
    setCheckinDate(selectedOption.startDate);
    setCheckoutDate(selectedOption.endDate);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const numericPrice = parseFloat(price);
  const numericDiscount = parseFloat(discount);

  const finalPrice = numericPrice - numericDiscount;
  return (
    <div>
      <form action="" className="mt-8">
        <div>
          <label className="flex mt-4 text-gray-700 mb-2" htmlFor="mySelect">
            Choose Time
          </label>
          <select
            id="mySelect"
            name="mySelect"
            className="flex w-full gap-5 border border-gray-300 px-4 py-2 rounded-md"
            onChange={handleTimeChange}
            value={selectedTime}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="py-2">
                {opt.label}
              </option>
            ))}
          </select>
          <label className="flex mt-6 text-gray-700 mb-2" htmlFor="checkinDate">
            Check in
          </label>
          <div className="w-full px-5 py-3 text-gray-600 rounded-md bg-gray-300">
            {/* Display Check-in date */}
            {checkinDate}
          </div>
          <label className="flex mt-6 text-gray-700 mb-2" htmlFor="checkinDate">
            Check out
          </label>
          <div className="w-full px-5 py-3 text-gray-600 rounded-md bg-gray-300">
            {/* Display Check-out date */}
            {checkoutDate}
          </div>
          <label className="flex mt-6 text-gray-700 mb-2" htmlFor="guests">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            className="w-full px-5 py-3 border-[1px] border-gray-400 text-gray-600 rounded-md"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>
        <div className="py-6 flex flex-col gap-3 ">
          <p>Extra Service</p>
          <div className="flex gap-3 flex-col ">
            <div className="flex items-center gap-5">
              <div className="bg-gray-400 hover:bg-[#00BB98] rounded-full w-10 h-10"></div>
              <p>Home Pickup</p>
            </div>

            <div className="flex  justify-between items-center">
              <p className="text-gray-400">Adult : </p>
              <p>
                {homePickupAdultPrice}
                <span className="text-gray-400">/per person</span>
              </p>
            </div>
            <div className="flex  justify-between items-center">
              <p className="text-gray-400">Child : </p>
              <p>
                {homePickupChildPrice}
                <span className="text-gray-400">/per person</span>
              </p>
            </div>
            <div className="flex  justify-between items-center">
              <p className="text-gray-400">Baby : </p>
              <p>
                {homePickupBabyPrice}
                <span className="text-gray-400">/per person</span>
              </p>
            </div>
          </div>
        </div>
        <label className="flex mt-4 text-gray-700   mb-2" htmlFor="mySelect">
          Services
        </label>
        <select
          id="mySelect"
          name="mySelect"
          className="flex w-full gap-3 border border-gray-300 px-4 py-2 rounded-md"
        >
          <option value="option1" className="py-2 ">
            Select Healthcare
          </option>
          <option value="option2" className="py-2">
            Massage (Adult : ₹10/per person - Children : ₹5/per - person - Baby:
            ₹0/per - person )
          </option>
          <option value="option3" className="py-2">
            Night Food (Adult : ₹5/per person - Children : ₹2/per - person -
            Baby: ₹0/per - person )
          </option>
        </select>
        <div className="flex py-6 flex-col gap-3">
          <p>Deposit Option {discount}% Per item</p>
          <div className="flex">
            <div className="w-1/2 sm:text-base text-sm py-3 flex justify-center items-center bg-[#00BB98] text-white">
              Full Payment
            </div>
            <div className="w-1/2 py-3 sm:text-base text-sm bg-gray-200 flex justify-center items-center text-black">
              Pay Deposit
            </div>
          </div>
          <div className="flex  justify-between items-center">
            <p className="sm:text-lg text-sm ">Available : </p>
            <p className="sm:text-2xl text-xl ">₹{finalPrice}</p>
          </div>
          <div className="flex  justify-between items-center">
            <p className="sm:text-lg text-sm ">Total : </p>
            <p className="sm:text-2xl text-xl">₹{price}</p>
          </div>
          <button className="py-5 bg-[#FD4A4C] mt-4 text-sm text-white rounded-lg  flex justify-center items-center">
            Booking Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
