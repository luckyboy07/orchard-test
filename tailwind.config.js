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
        xlight: 100,
        light: 300,
        normal: 400,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}
