/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px'
      },

      colors: {
        blue: '##6F9DE2',

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
        oxa: {
          md: {fontSize: '40px', lineHeight: '1', fontWeight: '600'},
          sm: {fontSize: '24px', lineHeight: '1', fontWeight: '600'},
          lg: {fontSize: '20px', lineHeight: '1', fontWeight: '600'},
        },

        mont: {
          md: {fontSize: '16px', lineHeight: '1.6', fontWeight: '400'},
          sm: {fontSize: '14px', lineHeight: '1.6', fontWeight: '400'},
          xs: {fontSize: '12px', lineHeight: '1.6', fontWeight: '600'},
          button: {fontSize: '16px', lineHeight: '1.6', fontWeight: '600'},
        }
      }
    },
  },
  plugins: [],
}

