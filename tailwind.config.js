/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
        fontFamily: {
          alga: ["alga"]
        }
    },
    
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Webkit browsers */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none'  /* Firefox */
        }
      })
    }
  ],
}

