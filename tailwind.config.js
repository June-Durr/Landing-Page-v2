// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{html.js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        "sls-blue": "#3F9CF0", // Your custom color
      },
    },
  },
  plugins: [],
};
