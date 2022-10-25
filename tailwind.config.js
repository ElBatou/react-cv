/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,js}", "./src/**/*.svg",],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '10%': { transform: 'translate3d(-1px, 0, 0)' },
          '90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%': { transform: 'translate3d(1px, 0, 0)' },
          '80%': { transform: 'translate3d(1px, 0, 0)' },
          '30%': { transform: 'translate3d(-2px, 0, 0)' },
          '50%': { transform: 'translate3d(-2px, 0, 0)' },
          '70%': { transform: 'translate3d(-2px, 0, 0)' },
          '40%': { transform: 'translate3d(2px, 0, 0)' },
          '60%': { transform: 'translate3d(2px, 0, 0)' },
        },
      },
      animation: {
        'shake-icon': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  plugins: [],
}
