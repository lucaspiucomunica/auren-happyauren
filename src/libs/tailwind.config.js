/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../src/js/*.js",
    "../../*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#170054',
        'rosa': '#E52397',
        'cinza-50': '#F6F6F6',
        'cinza-100': '#E7E7E7',
        'cinza-200': '#D1D1D1',
        'cinza-600': '#5D5D5D',
        'cinza-800': '#454545',
        'cinza-900': '#3D3D3D',
        'rosa-happy-auren': '#8C0053',
      },

      fontFamily: {
        'sans': ['Verdana', 'Arial', 'sans-serif'],
      },

      container: {
        center: true,
        padding: '16px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '1328px',
        }
      },

      backgroundImage: {
        'hero': "url('https://image.marketing.aurenenergia.com.br/lib/fe3915707564047f7d1778/m/1/506f6e04-dd00-42a0-9230-9f4221193d27.png')",
      },
    },
  },
  plugins: [],
}