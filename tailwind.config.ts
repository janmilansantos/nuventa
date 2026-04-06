import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F1',
        surface: {
          DEFAULT: '#FFF8F1',
          'container-lowest': '#FFFFFF',
          'container-low': '#F9F3EB',
          'container': '#F4EDE5',
          'container-high': '#EEE7DF',
          'container-highest': '#E8E1DA',
          bright: '#FFF8F1',
          dim: '#DFD9D1',
          variant: '#E8E1DA',
        },
        primary: {
          DEFAULT: '#321900',
          container: '#502B00',
        },
        'on-primary': {
          DEFAULT: '#FFFFFF',
          container: '#D88B3D',
        },
        secondary: {
          DEFAULT: '#795553',
          container: '#FFCFCB',
        },
        'on-secondary': {
          DEFAULT: '#FFFFFF',
          container: '#7A5653',
        },
        tertiary: {
          DEFAULT: '#2C1C06',
          container: '#433118',
          fixed: '#FCDEBA',
          'fixed-dim': '#DFC29F',
        },
        'on-tertiary': {
          DEFAULT: '#FFFFFF',
          container: '#B39878',
          'fixed-variant': '#574329',
        },
        'on-surface': {
          DEFAULT: '#1E1B17',
          variant: '#504443',
        },
        outline: {
          DEFAULT: '#827472',
          variant: '#D4C3C1',
        },
        error: {
          DEFAULT: '#BA1A1A',
          container: '#FFDAD6',
        },
        'cta-hover': '#C27A32',
        inverse: {
          surface: '#33302B',
          'on-surface': '#F7F0E8',
          primary: '#FFB875',
        },
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      maxWidth: {
        site: '80rem', // 1280px = max-w-7xl
      },
      borderRadius: {
        btn: '0.5rem',
        card: '0.75rem',
        'card-lg': '1rem',
        'card-xl': '1.5rem',
      },
      boxShadow: {
        rest: '0 1px 3px rgba(0,0,0,0.08)',
        hover: '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
