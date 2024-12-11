const { nextui } = require('@nextui-org/react');
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'],
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mainBlack: '#353A46',
        mainGray: '#A1A9A3',
        mainBlue: '#42A8FD',
        secondGray: '#868F9A',
        bgGray: '#F3F4F6',
        grayBorder: '#D2D5D6',
        grayLightBorder: '#CFD4DA',
        grayText: '#A2ABAF',
        activeLink: '#424242',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
