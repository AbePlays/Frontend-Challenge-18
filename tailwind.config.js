const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      "dark-violet": "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      "grayish-violet": "hsl(257, 7%, 63%)",
      "very-dark-blue": "hsl(255, 11%, 22%)",
      "very-dark-violet": "hsl(260, 8%, 14%)",
      white: "hsl(0, 100%, 100%)",
      "light-gray": colors.gray[100],
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "desktop-pattern": "url('/img/bg-boost-desktop.svg')",
        "shorten-box-pattern": "url('/img/bg-shorten-desktop.svg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
