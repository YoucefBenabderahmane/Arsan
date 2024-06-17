// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    safelist:['animate-[drop-in_0.5s]', 'animate-[drop-out_0.5s]'],
    extend: {
      fontFamily: {
        alga: ["alga"],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
    require("tw-elements/plugin.cjs")
  ],
};
