/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'post': '#ff6d2c',
        'heroColor': '#E0F8F2',
        'heroDeep': '#78aea0',
      }, 
      boxShadow: {
         'post_shadow': '2px 2px 0px 2px black',
      },
    },
  },
  plugins: [],
}