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
      keyframes: {
        'float-blobs': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '25%': { transform: 'translate3d(10px,-10px,0) scale(1.05)' },
          '50%': { transform: 'translate3d(0,-20px,0) scale(1.02)' },
          '75%': { transform: 'translate3d(-10px,-10px,0) scale(1.05)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        'float-blobs-slow': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '25%': { transform: 'translate3d(-12px,8px,0) scale(1.08)' },
          '50%': { transform: 'translate3d(0,16px,0) scale(1.03)' },
          '75%': { transform: 'translate3d(12px,8px,0) scale(1.06)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        'fade-in-soft': {
          '0%': { opacity: '0', transform: 'translate3d(0,8px,0)' },
          '100%': { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
      },
      animation: {
        'float-blobs': 'float-blobs 14s ease-in-out infinite',
        'float-blobs-slow': 'float-blobs-slow 20s ease-in-out infinite',
        'float-blobs-fast': 'float-blobs 9s ease-in-out infinite',
        'float-blobs-calmer': 'float-blobs 18s ease-in-out infinite',
        'fade-in-soft': 'fade-in-soft 600ms ease-out both',
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
