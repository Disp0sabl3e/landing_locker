/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PPMori'],
        'pp-mori': ['PPMori'],
      },
      borderImage: {
        gradient: "linear-gradient(90deg, #E53D2B 0%, #F98738 20%, #F9D549 40%, #FFFFFF 60%, #2BCCF2 80%, #2847D6 100%) 1",
      },
      backgroundImage: {
        'gradient-card': "linear-gradient(132.98deg, #000000 0%, #181818 100%)"
      },
      colors: {
        gray: '#151515'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          borderImage: "linear-gradient(90deg, #E53D2B 0%, #F98738 20%, #F9D549 40%, #FFFFFF 60%, #2BCCF2 80%, #2847D6 100%) 1",
        },
      });
    },
  ],
};
