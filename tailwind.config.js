/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '320px', // Para celulares pequeños
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }, 
    extend: { 
      backgroundImage: {
        'hero-gradient': "url('/images/Gradient.svg')",
        'gradientabout': "url('/images/GradientAbout.svg')",
        'gradientprojects': "url('/images/GradientProjects.svg')",
         'gradientcontact': "url('/images/GradientContact.svg')",
      },
      fontFamily: {
        gopher: ['Gopher', 'sans-serif'],
        roc: ['RocGrotesk', 'sans-serif'],
        satoshi: [
          'Satoshi', 
          'Satoshi-Regular', 
          'Satoshi-Bold', 
          'Satoshi-Black', 
          'Satoshi-BoldItalic',
        ],
      },
      animation: {
        tilt: 'tilt 3s linear infinite',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1.5deg)' },
          '75%': { transform: 'rotate(-1.5deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;