/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#000000',
          light: '#333333',
        },
        accent: {
          DEFAULT: '#c9a95c',
          dark: '#b08d3c',
          light: '#d4bc82',
        },
      },
    },
  },
  plugins: [],
};
