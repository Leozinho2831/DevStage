/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/*.js', '*.html'],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px'
      },

      colors: {
        blue: '#6F9DE2',

        red: '#F05D6C',

        gray: {
          100: '#DAE4F2',
          200: '#C8D0DA',
          300: '#95A1B1',
          400: '#6F7D90',
          500: '#2A313C',
          600: '#21252C',
          700: '#191D24',
          800: '#13161B',
          900: '#0F1216',
        }
      },

      fontFamily: {
        oxanium: ['Oxanium', 'serif'],
        montserrat: ['Montserrat', 'serif'],
      },

      fontSize: {
        'oxa-md': ['40px', { lineHeight: '1', fontWeight: '600'}],
        'oxa-sm': ['24px', { lineHeight: '1', fontWeight: '600',}],
        'oxa-lg': ['20px', { lineHeight: '1', fontWeight: '600'}],
        'mont-md': ['16px', { lineHeight: '1.6', fontWeight: '400'}],
        'mont-sm': ['14px', { lineHeight: '1.6', fontWeight: '400'}],
        'mont-xs': ['12px', { lineHeight: '1.6', fontWeight: '600'}],
        'mont-button': ['16px', { lineHeight: '1.6', fontWeight: '600'}],
      },
    },
  },
  plugins: [],
}

