import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        surface: '#1A1A1A',
        surfaceAlt: '#111111',
        offwhite: '#F5F5F3',
        line: '#2A2A2A',
        accent: {
          DEFAULT: '#6B2335',
          dark: '#7E3043',
          soft: '#244238'
        }
      },
      boxShadow: {
        industrial: '0 24px 80px rgba(0,0,0,0.45)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
