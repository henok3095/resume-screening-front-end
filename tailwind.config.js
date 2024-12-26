/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB6B2E",
        backgroundColor: "FDE9CC",
      },
      fontFamily: {
        lilita: ['"Lilita One"', "cursive"],
        pacifico: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
};
