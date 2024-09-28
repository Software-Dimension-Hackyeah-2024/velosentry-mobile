const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./common/components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc[900],
        secondary: colors.neutral[700],
        highlight: colors.orange[300],
        danger: colors.red[600],
        button: {
          default: colors.blue[500],
          primary: colors.orange[300],
          secondary: colors.zinc[800],
          danger: colors.neutral[700],
        },
      },
    },
  },
  plugins: [],
};
