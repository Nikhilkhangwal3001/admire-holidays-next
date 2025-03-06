"use client"
import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const AnimatedHamburgerButton = ({ isClick }) => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isClick ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-12 w-12" // Reduced button size
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-0.5 w-6 bg-black" // Adjusted line height and width
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }} // Adjusted positioning
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-0.5 w-6 bg-black" // Adjusted line height and width
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }} // Adjusted positioning
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-0.5 w-3 bg-black" // Adjusted line height and width
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 6px)",
          }} // Adjusted positioning
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;

const VARIANTS = {
  top: {
    open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
    closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
  },
  middle: {
    open: { rotate: ["0deg", "0deg", "-45deg"] },
    closed: { rotate: ["-45deg", "0deg", "0deg"] },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
