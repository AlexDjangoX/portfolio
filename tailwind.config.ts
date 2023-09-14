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
        'morent-background': '#416CEA',
        'morent-button': '#5a89ff',
        'jobit-background': '#0BAB7C',
        'jobit-button': '#42bf9a',
        'filmpire-background': '#DB202C',
        'filmpire-button': '#e24d56',
        'white-900': '#FFFFFF',
        'white-800': '#F3F8FF',
        'white-500': '#6F74A7',
        'black-400': '#778295',
        'black-300': '#192333',
        'black-200': '#151E2C',
      },
      screens: {
        l: '1400px',
        vs: '350px',
        s: '450px',
      },
      fontSize: {
        '4xlplus': '3.25rem',
        baseplus: '1.125rem',
      },
      lineHeight: {
        leading4rem: '4rem',
        leading1_8rem: '1.813rem',
        leadingRelaxed: '1.625rem',
        leading2_3rem: '2.3rem',
        leading3_4rem: '3.4rem',
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
