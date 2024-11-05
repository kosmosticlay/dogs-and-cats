/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        header: "5rem",
        "screen-minus-header": "calc(100vh - 5rem)",
      },
      fontFamily: {
        gugi: ["Gugi", "sans-serif"],
        jua: ["Jua", "sans-serif"],
      },
      colors: {
        main: "#98D5CD",
        yellow: "#eab308",
      },
    },
  },
  plugins: [],
};
