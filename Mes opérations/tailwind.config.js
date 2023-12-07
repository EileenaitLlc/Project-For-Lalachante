/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    screens: {
      'tel': '320px',
      'telL': '375px',
      'telxl': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1280px',
      '1xl': '1339px',
      '2xl': '1536px',
      '4k': '2560px',
    },
    extend: {},
  },
  plugins: [],
}
