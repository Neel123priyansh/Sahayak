/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        ios: '0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)',
        iosDark: '0 12px 40px rgba(0,0,0,0.35)',
      },
      transitionProperty: {
        colors: 'color, background-color, box-shadow, transform',
      },
    },
  },
  plugins: [],
}
