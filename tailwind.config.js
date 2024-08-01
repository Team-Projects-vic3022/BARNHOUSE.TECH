/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ltblue: " #5272b2",
        drkblue: "#283b62",
        txtclr: "#a0a09f",
        ltyellow: "#cbb492",
      },
      screens: {
        // Home Screens
        hmXl: { max: "1000px" },
        hmLg: { max: "600px" },
        hmMd: { max: "500px" },
        hmsm: { max: "400px" },
      },
    },
  },
  plugins: [],
};
