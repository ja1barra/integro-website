import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['AllRoundGothic-Bold', 'sans-serif'],
        body: ['AllRoundGothic-Book', 'sans-serif'],
        mono: ['AllRoundGothic-Demi', 'sans-serif'],
      },
      colors: {
        cream: '#f5f2ec',
        ink: '#1a1714',
        orange: '#d4501a',
        warm: '#e8e3da',
        mid: '#8a8278',
      },
    },
  },
  plugins: [],
}

export default config
