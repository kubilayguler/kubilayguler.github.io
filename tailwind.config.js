/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
=======
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
>>>>>>> db9acf51d742b56cd1acc9d9fd0543d6b213cb82
  theme: {
    extend: {
      colors: {
        kdark: '#1a1a1a',
        kgold: '#FFC500',
        kwhite: '#fafafa',
      },
<<<<<<< HEAD
      blur: {
        xs: '1px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
=======
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

>>>>>>> db9acf51d742b56cd1acc9d9fd0543d6b213cb82
