import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'baloo': ['Baloo 2', 'cursive'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      colors: {
        'll-purple': {
          DEFAULT: '#6F45D3',
          dark: '#4B2F7F',
          light: '#9B87F5', 
          bg: '#1A1F2C',
          ultralight: '#D6BCFA',
        },
        'll-yellow': {
          DEFAULT: '#FFD700',
          dark: '#E6C200',
        },
        'll-blue': {
          DEFAULT: '#0EA5E9', 
          dark: '#0284C7',
          light: '#38BDF8',
        },
        'll-red': {
          DEFAULT: '#ea384c',
          dark: '#D01031',
        },
        'll-green': {
          DEFAULT: '#22C55E',
          light: '#F2FCE2',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 15s linear infinite'
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [
    plugin(function({ addBase, addComponents }) {
      addComponents({
        '.hero-gradient': {
          '@apply bg-gradient-to-b from-ll-purple to-ll-purple-dark': {}
        },
        '.button-primary': {
          '@apply bg-ll-yellow text-ll-purple-dark font-bold py-3 px-8 rounded-full hover:bg-ll-yellow-dark transition-colors': {}
        },
        '.button-secondary': {
          '@apply bg-ll-purple text-white font-bold py-3 px-8 rounded-full hover:bg-ll-purple-dark transition-colors': {}
        },
      });
    }),
  ],
};

export default config; 