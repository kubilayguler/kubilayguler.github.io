/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kdark: '#1a1a1a',
        kgold: '#FFC500',
        kwhite: '#fafafa',
      },
      blur: {
        xs: '1px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
