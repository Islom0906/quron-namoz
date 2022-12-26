/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        primary:'#199F87',
        icon:'#B9C6CC',
        bg:'#F5F6F8',
        spanBg:"#DFF4EF",
        spanColor:'#1CBF87'
      },
     
    },
  },
  plugins: [],
}