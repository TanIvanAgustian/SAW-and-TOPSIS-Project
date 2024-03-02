/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    backgroundImage: {
      'backgroundlogin': "url('/src/assets/padus.jpg')",
      'kaken':"url('/src/assets/kaken.jpeg')",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(4deg)' },
          '20%': { transform: 'rotate(-1deg)' },
          '30%': { transform: 'rotate(4deg)' },
          '40%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(4deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        bigger: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.2)" },
        },
        clearly: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        'fast-waving': 'wave 1s linear forwards',
        'bigger': 'bigger 0.1s linear forwards',
        "clearly": 'clearly 0.2s linear forwards',
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
})

