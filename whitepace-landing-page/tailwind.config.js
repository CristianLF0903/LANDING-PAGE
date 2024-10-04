/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js, jsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1920px'
    },
    colors: {
      'blue-dark': '#043873',
      'blue-light': '#7e5bef',
      cian: '#A7CEFC',
      black: '#212529',
      yellow: '#FFE492'
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
}
