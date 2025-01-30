import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'neon-pink': '#FF00FF',
        'punk-purple': '#9B4DCA',
        'electric-blue': '#00FFFF',
        'cool-green': '#39FF14',
        'cyber-yellow': '#FFE600',
        'hot-red': '#FF003C',
        'digital-white': '#FFFFFF',
        'cyber-black': '#0A0A0A',
      },
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'comic': ['Comic Neue', 'cursive'],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px rgba(10,10,10,1)',
        'brutal': '5px 5px 0px 0px rgba(10,10,10,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(10,10,10,1)',
        'brutal-xl': '12px 12px 0px 0px rgba(10,10,10,1)',
        'brutal-2xl': '15px 15px 0px 0px rgba(10,10,10,1)',
        'brutal-inner': 'inset 4px 4px 0px 0px rgba(10,10,10,1)',
        'neon-glow': '0 0 5px rgba(255,0,255,0.5), 0 0 20px rgba(255,0,255,0.3), 0 0 40px rgba(255,0,255,0.1)',
        'electric-glow': '0 0 5px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.3), 0 0 40px rgba(0,255,255,0.1)',
        'green-glow': '0 0 5px rgba(57,255,20,0.5), 0 0 20px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.1)',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, var(--dot-color) 1px, transparent 1.5px)',
        'grid-pattern': 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
        'diagonal-lines': 'repeating-linear-gradient(45deg, var(--line-color) 0px, var(--line-color) 1px, transparent 1px, transparent 10px)',
        'cyber-gradient': 'linear-gradient(45deg, #FF00FF 0%, #00FFFF 50%, #39FF14 100%)',
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'dots-md': '30px 30px',
        'dots-lg': '40px 40px',
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config