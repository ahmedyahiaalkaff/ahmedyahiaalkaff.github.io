import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@ahmedalkaff/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#327897',
        'secondary': '#5C913B',
        'lightPrimary': '#6FB7D6'
      },
      keyframes: {
        pulseBorder: {
          '0%, 100%': { '--tw-border-opacity': '1' },
          '50%': { '--tw-border-opacity': '0.5' },
        }
      },
      animation: {
        pulseBorder: 'pulseBorder 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
  // important: true
  darkMode: 'class',
}
export default config
