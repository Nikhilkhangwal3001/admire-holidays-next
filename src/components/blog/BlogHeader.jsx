"use client";

import React from "react";
import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <div className="h-fit px-4 pt-40 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  );
};

export default BlogHeader;

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg ", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 bg-[#3b2d5a] p-5">
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Welcome to Admire Holidays
    </h1>
    <p className="text-zinc-400">
      Explore the world with us and discover unforgettable destinations.
    </p>
    <Link
      href="/"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Plan your journey <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3"
    >
      <a href="#" className="grid h-full">
        <Image
          src="https://images.unsplash.com/photo-1623996243194-fd281057d568?w=600&auto=format&fit=crop&q=60"
          alt="Travel Destination"
          width={600}
          height={400}
          layout="responsive"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white md:col-span-3"
    >
      <a href="#" className="grid h-full">
        <Image
          src="https://images.unsplash.com/photo-1625505826977-66d796089d73?w=600&auto=format&fit=crop&q=60"
          alt="Travel Adventure"
          width={600}
          height={400}
          layout="responsive"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a href="#" className="grid h-full">
        <Image
          src="https://images.unsplash.com/photo-1600242466690-c1c04f081762?w=600&auto=format&fit=crop&q=60"
          alt="Luxury Destination"
          width={600}
          height={400}
          layout="responsive"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-white md:col-span-3"
    >
      <a href="#" className="grid h-full">
        <Image
          src="https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60"
          alt="Explore the World"
          width={600}
          height={400}
          layout="responsive"
        />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 p-5 bg-[#f2901c] leading-snug">
    <p>
      Discover your next adventure with Admire Holidays.{" "}
      <span className="text-black text-base">
        At Admire Holidays, we understand that travel is more than just a
        vacation, it is an opportunity to create lifelong memories. Our team of
        travel experts is dedicated to crafting personalized experiences that
        exceed your expectations. Whether you dream of exploring ancient
        civilizations, indulging in culinary delights, or basking in the beauty
        of pristine beaches, we have the perfect package for you.
      </span>
    </p>
    <p className="text-black text-base mt-4">
      With our extensive network of trusted partners and in-depth knowledge of
      destinations worldwide, we curate itineraries that seamlessly blend
      culture, adventure, and relaxation. Our commitment to exceptional service
      ensures that every aspect of your journey is meticulously planned, leaving
      you free to immerse yourself in the wonders of your chosen destination.
      Experience the world with Admire Holidays and let us turn your travel
      dreams into cherished memories.
    </p>
  </Block>
);
