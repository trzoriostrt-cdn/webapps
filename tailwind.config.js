/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'trezor-green': {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3bf',
          300: '#8ecd96',
          400: '#5fb06a',
          500: '#3c9147',
          600: '#2a7535',
          700: '#235e2c',
          800: '#1e4a25',
          900: '#1a3d21',
          950: '#0c2111',
        },
        'trezor-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};