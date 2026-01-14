/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#15803d', // green-700
            dark: '#14532d',    // green-900
            light: '#4ade80',   // green-400
            bg: '#f0fdf4',      // green-50
          },
          yellow: {
            DEFAULT: '#fbbf24', // amber-400
            hover: '#f59e0b',   // amber-500
          },
          dark: '#1f2937',
          light: '#f9fafb',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'], // For headings to look playful
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
