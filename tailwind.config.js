/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1a1d1e",
        main: "#abbbc9",
      },
      fontFamily: {
        body: ["arcade"],
        display: ["'kosmos'"],
      },
    },
  },
  plugins: [],
};
