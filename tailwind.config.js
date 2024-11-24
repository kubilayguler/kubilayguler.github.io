/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kdark: '#1a1a1a',
        kgold: '#FFC500',
        kwhite: '#fafafa',
      },
      backgroundImage: {
        'project1': "url('/img/project-1.png')",
      },
      blur: {
        xs: '1px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

