/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "rgba-36-36-36-255": "rgba(36, 36, 36, 1)",
      },
    },
  },
  plugins: [],
};
