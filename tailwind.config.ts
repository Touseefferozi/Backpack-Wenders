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
          DEFAULT: '#d7a44a',
          soft: '#f0c97a',
          dark: '#9b6f1d'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'radial-industrial': 'radial-gradient(circle at top, rgba(215,164,74,0.12), transparent 52%)'
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
