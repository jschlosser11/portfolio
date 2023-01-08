/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mainBlack': '#131212',
        'accentGreen': '#52FFEC',
      },
      fontFamily: {
        bebas: [ 'Bebas Neue' ]
      }
    }
  },
  plugins: []
};