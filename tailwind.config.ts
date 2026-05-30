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
        cream: '#F4F4F4',
        ink: '#0a1f44',
        orange: '#FD7016',
        warm: '#E0E0E0',
        mid: '#8a8278',
        nearblack: '#111111',
      },
    },
  },
  plugins: [],
}

export default config
