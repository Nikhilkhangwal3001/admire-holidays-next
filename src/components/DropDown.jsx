"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown = () => {
  const [isDomesticHovered, setIsDomesticHovered] = useState(false);
  const [isInternationalHovered, setIsInternationalHovered] = useState(false);
  const [travelData, setTravelData] = useState(null);
  const [internationalData, setInternationalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, storageKey, setData) => {
    try {
      const cachedData = sessionStorage.getItem(storageKey);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        sessionStorage.setItem(storageKey, JSON.stringify(data));
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      "https://server-deploy-gamma.vercel.app/allStatesData",
      "travelData",
      setTravelData
    );
    fetchData(
      "https://server-deploy-gamma.vercel.app/internationalData",
      "internationalData",
      setInternationalData
    );
  }, []);

  const handleDomesticHover = () => {
    setIsDomesticHovered(true);
    setIsInternationalHovered(false);
  };

  const handleInternationalHover = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDomesticHovered(false);
    setIsInternationalHovered(false);
  };

  const renderDropdown = (data) => {
    if (loading) return <p></p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return (
      <div className="dropdown-content sm:w-[350px] w-[280px] items-center justify-center left-0 font-light text-base absolute z-50 bg-white rounded-md shadow-lg p-3 sm:p-8 top-12">
        <ul className="grid sm:grid-cols-3 grid-cols-2 gap-2">
          {Object.entries(data).map(([category, destinations]) => (
            <li
              key={category}
              className="hover:bg-gray-100 text-black rounded-md transition-colors duration-300"
            >
              <Link href={`/packages/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div
        className="font-medium cursor-pointer text-black items-center md:text-lg flex rounded-md transition-colors duration-300 p-2 relative"
        onMouseEnter={handleDomesticHover}
        onMouseLeave={handleMouseLeave}
      >
        Domestic
        <RiArrowDropDownLine size={30} />
        {isDomesticHovered && renderDropdown(travelData)}
      </div>
      <div
        className="font-medium cursor-pointer text-black items-center md:text-lg flex rounded-md transition-colors duration-300 p-2 relative"
        onMouseEnter={handleInternationalHover}
        onMouseLeave={handleMouseLeave}
      >
        International
        <RiArrowDropDownLine size={30} />
        {isInternationalHovered && renderDropdown(internationalData)}
      </div>
    </>
  );
};

export default DropDown;
