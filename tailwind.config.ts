import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#428DFF',
        'primary-light': '#0252CD',
        'secondary-dark': '#FFBE62',
        'white-900': '#FFFFFF',
        'white-800': '#F3F8FF',
        'white-500': '#6F74A7',
        'black-400': '#778295',
        'black-300': '#192333',
        'black-200': '#151E2C',
      },
      screens: {
        vs: '350px',
      },
      fontSize: {
        '4xlplus': '3.25rem',
        baseplus: '1.125rem',
      },
      lineHeight: {
        leading4rem: '4rem',
        leading1_8rem: '1.813rem',
        leadingRelaxed: '1.625rem',
      },
      letterSpacing: {
        tracking_64: '-0.64px',
        tracking6: '6px',
      },
    },
  },
  darkMode: ['class'],
  plugins: [nextui()],
};

export default config;
