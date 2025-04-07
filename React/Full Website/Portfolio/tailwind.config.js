/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redLight': '#EC5656',
        'white': '#E2E4E9',
        'secondary-white': '#C5C5C5',
        'border': '#16181D'
      },
      backgroundImage : {
        hero: "url('./assets/Background_Intro_dark.png')" 
      }
    },
    screens: {
      // Default min-width breakpoints
      // 'sm': '640px',    // => @media (min-width: 640px)
      // 'md': '768px',    // => @media (min-width: 768px)
      // 'lg': '1024px',   // => @media (min-width: 1024px)
      // 'xl': '1280px',   // => @media (min-width: 1280px)
      // '2xl': '1536px',  // => @media (min-width: 1536px)

      // Max-width breakpoints
      'max-sm': { 'max': '639px' },   // => @media (max-width: 639px)
      'max-md': { 'max': '767px' },   // => @media (max-width: 767px)
      'max-lg': { 'max': '1023px' },  // => @media (max-width: 1023px)
      'max-xl': { 'max': '1279px' },  // => @media (max-width: 1279px)
      'max-2xl': { 'max': '1535px' }, // => @media (max-width: 1535px)
    },
  },
  plugins: [],
}