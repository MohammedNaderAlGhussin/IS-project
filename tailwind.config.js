/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        contentColor: "#1E1E1E",
        mainColor: "#7981E6",
      },
      boxShadow: {
        box: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
