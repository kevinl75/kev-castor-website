/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#f8f6f4",
          100: "#efebe5",
          200: "#d5cabc", // main
          300: "#c9baa8",
          400: "#b29a85",
          500: "#a2846d",
          600: "#957461",
          700: "#7c5f52",
          800: "#664f46",
          900: "#53423b",
          950: "#2c211e",
        },
        third: "#E8D5CC",
        background: "#f5efe6",
        cactus: {
          50: "#f6f8f5",
          100: "#ebefe9",
          200: "#d8dfd3",
          300: "#b7c5b0",
          400: "#90a385",
          500: "#6f8463",
          600: "#5d7052", // main
          700: "#475540",
          800: "#3b4635",
          900: "#323a2d",
          950: "#181e15",
        },
        dust: {
          50: "#f9f6f3",
          100: "#f0ebe4",
          200: "#e0d5c8",
          300: "#ccb9a5", // main
          400: "#bda18a",
          500: "#a88267",
          600: "#9b715b",
          700: "#815c4d",
          800: "#6a4c42",
          900: "#563f38",
          950: "#2e201c",
        },
      },
    },
  },
  plugins: [],
};
