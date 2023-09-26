/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#EF7B25",
      },
    },
  },
  plugins: [require("./src")],
};
