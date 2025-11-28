/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {

        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        snowFall: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(20px)', opacity: 0 },
        },

        rainFall: {
          '0%': { transform: 'translateY(-50px)', opacity:0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateY(10px)', opacity: 0 },
        },

        cloudFloat: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-40px)' },
        },

      },

      animation: {

        slowSpin: 'slowSpin 5s linear infinite',  

        snowFall: 'snowFall 2.5s linear infinite',

        rainFall: 'rainFall 3s linear infinite',

        cloudFloat: 'cloudFloat 4s ease-in-out infinite',

      },

    },

  },

  plugins: [],

};
