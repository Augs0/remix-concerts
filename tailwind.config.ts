import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      agbalumo: ["Agbalumo", ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: [],
} satisfies Config