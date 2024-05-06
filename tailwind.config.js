/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#97D4C7",
          600: "#05AA85",
        },
        accent: {
          200: "#4B648B",
          400: "#1D3D70",
          600: "#162C4E",
        },
        secondary: "#BEBEBE",
        dark: "#222",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
