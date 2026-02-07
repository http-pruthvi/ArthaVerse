/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ArthaVerse Earthy Palette (Placeholder)
        earth: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a18072',
          600: '#846358',
          700: '#43302b',
        },
        growth: {
          500: '#4ade80', // Green
        },
        risk: {
            500: '#ef4444', // Red
        }
      }
    },
  },
  plugins: [],
}
