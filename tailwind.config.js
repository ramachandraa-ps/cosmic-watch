/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0B1A',
          light: '#1A1A2E',
          accent: '#4A4A8A'
        }
      }
    },
  },
  plugins: [],
}