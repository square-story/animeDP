/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        juggle: 'juggle 0.6s ease-in-out infinite',
      },
      keyframes: {
        juggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(5px)' },
          '75%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

