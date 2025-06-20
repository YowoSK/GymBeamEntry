/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gymbeam: {
          orange: "#ff6600",
          dark: "#222",
          light: "#fff8f2",
        },
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
