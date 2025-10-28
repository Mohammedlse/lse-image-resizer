/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core colors
        'lse-red': '#E0112b',
        'lse-black': '#000000',
        'lse-white': '#FFFFFF',
        'lse-grey-2': '#F4F4F4',
        'lse-grey-3': '#ECECEC',
        'lse-grey-7': '#393d3e',
        
        // Secondary colors
        'lse-yellow': '#FFCD00',
        'lse-lime-green': '#C4D600',
        'lse-mint-green': '#7ce6d8',
        'lse-light-blue': '#95d7e5',
        'lse-sky-blue': '#7DB3E1',
        'lse-cerulean-blue': '#009BC0',
        'lse-jade-green': '#159382',
        'lse-dark-purple': '#5F315C',
        'lse-light-purple': '#8431a6',
        'lse-light-grey': '#D9DFDF',
        'lse-mid-grey': '#A7B4BB',
        'lse-dark-grey': '#3C3C3B',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
