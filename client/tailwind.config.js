import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        gold: "#d39918",
        green: "#47cf73",
        black: "#111",
        blue: "#3a80e9",
        grey: "#888",
        darkgrey: "#1b1b1b",
        red: "#f94141",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
