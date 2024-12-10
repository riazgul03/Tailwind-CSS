/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      md: '800px',
      lg: '1100px'
    },
    extend: {
      spacing: {
        '21': '5rem',
        '27': '6.5rem',
        '13': '13px',
        'px-8': '13px',
        'px-100': '100px'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

