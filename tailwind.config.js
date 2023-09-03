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
      'transparentwhite': 'rgba(255,255,230,0.3)',
      'tempblack': '#1E1E1E',
      'tempgray': '#808080',
    },
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '6xl': '0 20px 30px 20px rgba(0, 0, 0, 0.2)',
        '4xl': '0 0px 40px 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [        
    require('flowbite/plugin')
  ],
}

