/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    screens: {
      'tel': '320px',
      'telL': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4k': '2560px',
    },
    extend: {
      fontFamily: {
        display: 'Montserrat, sans',
      },
    }
  },
  plugins: [require("daisyui")],
}

