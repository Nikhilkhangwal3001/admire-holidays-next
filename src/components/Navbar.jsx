"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import Button from "./Button";
import Link from "next/link";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="fixed z-[100] bg-white top-0 w-screen">
        <div className=" max-w-7xl mx-auto backdrop-blur-lg py-2 bg-white/100 ">
          <div className="flex text-black items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="">
                  <Image src={"/logo.jpg"} width={140} height={50} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <Link href="/" className="font-medium md:text-lg rounded-lg p-2">
                Home
              </Link>
              <DropDown />
              <Link
                href="/about"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium md:text-lg rounded-lg p-2"
              >
                Contact
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                <AnimatedHamburgerButton isClick={isClick} />
              </button>
            </div>
            <Button display={"lg:flex hidden"} />
          </div>
          <div
            className={`lg:hidden text-black ${
              isClick ? "navbarExpanded" : "navbarCollapsed"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="md:text-lg font-medium block rounded-lg p-2"
              >
                Home
              </Link>
              <DropDown />
              <Link
                href="/about"
                className="font-medium md:text-lg block rounded-lg p-2"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="font-medium md:text-lg block rounded-lg p-2"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium md:text-lg block rounded-lg p-2"
              >
                Contact
              </Link>
              <Button display={"flex"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
