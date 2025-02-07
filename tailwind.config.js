/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        LaBelle: ["La Belle Aurore", "cursive"],
        Aboreto: ["Aboreto", "cursive"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#ef4444 white",
        },
        ".scrollbar-webkit": {
          "&::-website-scrollbar": {
            width: "12px",
            marginLeft: "4px",
            marginRigth: "4px",
          },
          "&::-website-scrollbar-track": {
            background: "white",
          },
          "&::-website-scrollbar-thumb": {
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
