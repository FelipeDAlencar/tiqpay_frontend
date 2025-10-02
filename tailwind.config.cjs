/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        atkinson: ["'Atkinson Hyperlegible'", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        black: "#212121",
        blacksub: "#212121",
        bluelink: "#4067e6",
        bluebutton: "#4772FF",
        stroke: "#fcfcfc",
        greymenu: "#777777",
        blackfeedback: "#3D3D3D",
      },
    },
  },
  plugins: [],
};
