/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1920px'
    },
    colors: {
      'blue-dark': '#043873',
      'blue-light': {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c6fd',
        400: '#4f9cf9', // primary color
        500: '#3b83f6',
        600: '#2664ea',
        700: '#1d4fd8',
        800: '#1e41af',
        900: '#1e3b8a',
        950: '#172554'
      },
      white: '#fff',
      cian: {
        50: '#eff6ff',
        100: '#dceafd',
        200: '#c0dafd',
        300: '#a7cefc', // color secundario
        400: '#62a3f8',
        500: '#3e81f3',
        600: '#2862e8',
        700: '#204dd5',
        800: '#203fad',
        900: '#203a88',
        950: '#182553'
      },
      black: '#212529',
      yellow: {
        50: '#fffaeb',
        100: '#fff1c6',
        200: '#ffe492', // color secundario
        300: '#ffcc4a',
        400: '#ffb620',
        500: '#f99307',
        600: '#dd6d02',
        700: '#b74b06',
        800: '#94390c',
        900: '#7a2f0d',
        950: '#461702'
      }

    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
}
