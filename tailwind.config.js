/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['OpenSans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}
