import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1a',
        surface: '#111827',
        surfaceAlt: '#1a202c',
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#4ade80',
          soft: '#86efac',
          dark: '#22c55e'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'radial-industrial': 'radial-gradient(circle at top, rgba(214,185,141,0.16), transparent 52%)'
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
