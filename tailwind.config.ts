import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090d12',
        surface: '#11161d',
        surfaceAlt: '#18202a',
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#57c48a',
          soft: '#8fd9ad',
          dark: '#2f8f63'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'radial-industrial': 'radial-gradient(circle at top, rgba(87,196,138,0.12), transparent 52%)'
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
