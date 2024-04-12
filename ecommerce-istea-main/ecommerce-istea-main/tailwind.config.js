/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        pr1: "repeat(1, minmax(0, 288px))",
        pr2: "repeat(2, minmax(0, 288px))",
      },
    },
  },
  plugins: [],
};
