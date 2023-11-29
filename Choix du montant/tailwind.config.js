/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    screens: {
      'tel': '425px',
      'telL': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1280px',
      '2xl': '1536px',
      '4k': '2560px',
    },
    extend: {},
  },
  plugins: [],
}