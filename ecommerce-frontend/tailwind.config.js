/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { min: "770px" },
      // => @media (max-width: 1023px) { ... }

      sm: { max: "770px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      blue: "#23A6F0",
      prim: "#252B42",
      sec: "#737373",
    },
    extend: {
      backgroundImage: {
        "contact-bg": "url('/images/carousel.png')",
      },
    },
  },
  plugins: [],
};
/*screens: {
  tablet: { max: "767px" },
  // => @media (min-width: 640px) { ... }

  laptop: "1024px",
  // => @media (min-width: 1024px) { ... }

  desktop: "1280px",
  // => @media (min-width: 1280px) { ... }
},*/
