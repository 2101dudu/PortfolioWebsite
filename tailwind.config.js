/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'templightgreen': '#00D40E',
      'tempgreen': '#00BA2D',
      'tempdarkgreen': '#009657',
      'tempcyan': '#007084',
      'templightblue': '#046CD8',
      'tempblue': '#0153A9',
      'tempdarkblue': '#013193',
      'tempwhite': '#FFFDFA',
      'tempblack': '#1E1E1E',
    },
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '6xl': '0 20px 30px 10px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [        
    require('flowbite/plugin')
  ],
}

