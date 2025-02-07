import React from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="grid   md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:gap-0 gap-16 lg:grid-cols-4 mt-36 mb-20 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5  sm:items-start items-center  justify-center">
          <Image src={"/logo.jpg"} width={300} height={100} alt="Logo" />
          <p className="text-wrap">
            Admire Holidays helps you explore the world with seamless travel.
            We’ve been in business for 7 years. Contact us for a stress-free
            vacation.
          </p>
        </div>
        <div className="flex flex-col gap-5    items-center  ">
          <h5 className="font-semibold sm:ml-[-55px] ml-0 ">About</h5>
          <ul className="font-light sm:items-start items-center flex   flex-col gap-4">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>

            <Link href="/privacy-policy" className="">
              Privacy Policy
            </Link>
            <Link href="/credit">Credit</Link>
          </ul>
        </div>
        <div className="flex flex-col    gap-5 items-center ">
          <h5 className="font-semibold">Trending</h5>
          <ul className=" font-light sm:items-start items-center flex flex-col gap-4">
            <li>
              <Link href={"/packages/dubai"}>Dubai</Link>
            </li>
            <li>
              <Link href={"/packages/bali"}>Bali</Link>
            </li>
            <li>
              <Link href={"/packages/kerala"}>Kerala</Link>
            </li>
            <li>
              <Link href={"/packages/ladakh"}>Ladakh</Link>
            </li>
            <li>
              <Link href={"/packages/thailand"}>Thailand</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5  sm:items-start items-center  ">
          <h5 className="font-semibold sm:text-start text-center w-full">
            Contact us
          </h5>
          <ul className="font-light flex sm:items-start  flex-col gap-4">
            <li className="flex   gap-4">
              <IoCallOutline color="#FD4A4C" size={30} /> 1800-121-4252
            </li>
            <li className="flex  gap-4">
              <MdOutlineMessage color="#FD4A4C" size={30} />
              info@admireholidays.com
            </li>
            <li className="flex   gap-4">
              <FaLocationDot size={50} color="#FD4A4C" /> 34,Sewak park(1st
              floor), Dwarka more metro,Near metro piller no-772 New
              Delhi-110059.
            </li>

            <li className="flex items-center mt-10  gap-4">
              <a
                href="https://m.facebook.com/p/Admire-Holidays-100090809996697/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  color="	#1877F2"
                  size={40}
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://twitter.com/HolidaysAd53932"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter
                  size={40}
                  color="#14171A"
                  className="cursor-pointer"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/admire-holidays-272a06272/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={40}
                  color=" #0077b5 "
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/admireholidays_official?igsh=MTBhNnU4MWI5Njdjeg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram
                  size={40}
                  color="#4c68d7"
                  className="cursor-pointer"
                />
              </a>

              <a
                href="https://www.youtube.com/@AdmireHolidays_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  size={40}
                  color="#FF0000"
                  className="cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-center py-10">
        © 2024 Admire Holidays, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
