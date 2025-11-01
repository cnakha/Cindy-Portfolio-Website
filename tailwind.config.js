/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-haze': 'var(--blue-haze)',
      },
      fontFamily: {
        nhgDisplay: ['var(--font-nhg-display)'],
        nhgText: ['var(--font-nhg-text)'],
        nhgMono: ['var(--font-nhg-mono)'],
        nhgLight: ['var(--font-nhg-light)'],
      },
    },
  },
  plugins: [],
}