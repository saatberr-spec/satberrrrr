import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e40af',
        'secondary': '#1e3a8a',
        'accent': '#3b82f6',
      },
    },
  },
  plugins: [],
}
export default config
