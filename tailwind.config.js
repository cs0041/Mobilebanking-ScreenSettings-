/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screen/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'green-main': '#76978E',
      'light-green': '#C7D5B1',
      cherry: '#D3AD9F',
      base: '#F1EEE6',
      egg: '#F6D8A9',
      'green-regis': '#387766',
      white: '#FFFFFF',
      'red-button': '#FD6565',
      'green-button': '#8DD0BD',
      'pin-button': '#FBFFF5',
      'dark-base': '#E1D8D8',
      black: '#000000',
      'gray-pin': '#BEBEBE',
    },
  },
  plugins: [],
};
