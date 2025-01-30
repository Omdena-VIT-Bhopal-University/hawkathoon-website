import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brutal-yellow': '#FFFF00',
        'brutal-red': '#FF0000',
        'brutal-blue': '#0000FF',
        'brutal-green': '#00FF00',
      },
      fontFamily: {
        'brutal': ['Courier New', 'monospace'],
      },
      boxShadow: {
        'brutal': '5px 5px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}

export default config