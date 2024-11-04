/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ec722e', // Orange
        'secondary': '#FEFEFE', // White
        'tertiary': '#245DDB', // Dark Blue
        'quaternary': '#D3E5FA', // Blue
        'quinary': '#1A901A', // Green
      },
    },
  },
  plugins: [
    'daisyui',

  ],
}
