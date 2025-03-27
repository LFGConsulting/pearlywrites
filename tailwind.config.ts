import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#663399',
          light: '#8652c7',
          dark: '#4B2570',
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#663399', // Main brand color
          600: '#4B2570',
          700: '#3B1D59',
          800: '#2C1644',
          900: '#1D0F2E',
        },
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#663399',
              '&:hover': {
                color: '#8652c7',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#f3f4f6',
            a: {
              color: '#8652c7',
              '&:hover': {
                color: '#a855f7',
              },
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            h4: {
              color: '#f3f4f6',
            },
            strong: {
              color: '#f3f4f6',
            },
            code: {
              color: '#f3f4f6',
            },
            blockquote: {
              color: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config 