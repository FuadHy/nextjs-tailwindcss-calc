/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    themeVariants: ['t1', 't2', 't3']
  },
  plugins: [require('tailwindcss-multi-theme')],
}
