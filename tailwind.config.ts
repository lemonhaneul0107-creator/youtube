import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
} satisfies Config
