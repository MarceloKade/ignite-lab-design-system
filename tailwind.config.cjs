/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    color: {
      transparent: "transparent",

      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121214",
        800: "#202024",
        900: "#7c7c8a",
        900: "#c4c4cc",
        900: "#e1e1e6",
      },

      cyan: {
        500: "#81d8f7",
        300: "#9BE1FB",
      },
    },
    extend: {
      fontFamily: {
        sans: "inter, sans-serif",
      },
    },
  },
  plugins: [],
};
