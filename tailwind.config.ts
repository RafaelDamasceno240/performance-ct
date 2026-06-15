import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#ff0000',
          dark: '#cc0000',
          hover: '#e60000',
        },
        dark: '#0d0d0d',
        card: 'rgba(10,10,10,0.82)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 40px rgba(255,0,0,0.35)',
        'red-glow-lg': '0 0 80px rgba(255,0,0,0.15)',
        'btn': '0 4px 30px rgba(255,0,0,0.45)',
        'btn-hover': '0 8px 50px rgba(255,0,0,0.65)',
      },
    },
  },
  plugins: [],
}

export default config
