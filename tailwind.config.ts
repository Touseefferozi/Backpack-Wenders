import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#060808',
        surface: '#0f1413',
        surfaceAlt: '#0b1612',
        offwhite: '#E6E8E6',
        line: 'rgba(255,255,255,0.06)',
        accent: {
          DEFAULT: '#21b56f',
          dark: '#16804d',
          soft: '#68d39a'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
