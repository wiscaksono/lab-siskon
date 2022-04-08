module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        50: "#E1E1E1",
        100: "#D7D7D7",
        200: "#C2C2C2",
        300: "#AEAEAE",
        400: "#999999",
        500: "#858585",
        600: "#696969",
        700: "#4D4D4D",
        800: "#313131",
        900: "#000000",
      },
      red: "#ED2227",
    },
    extend: {
      backgroundImage: {
        footer: 'url("/footer-bg.svg")',
        "ski-btn": 'url("/ski-btn.png")',
        "siskon-btn": 'url("/siskon-btn.png")',
      },
    },
  },
  plugins: [],
};
