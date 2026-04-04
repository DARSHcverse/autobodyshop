/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#ffdf9f',
          200: '#ffe1a7',
          300: '#f9bd22',
          400: '#fbbf24', // primary
          500: '#d97706',
          600: '#6c4f00',
        },
        crown: {
          deep: '#050505',
          lowest: '#0e0e0e',
          base: '#131313',
          low: '#1c1b1b',
          high: '#2a2a2a',
          highest: '#353534',
          border: '#4f4633', // outline_variant
        }
      },
      fontFamily: {
        display: ['"Noto Serif"', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['"Space Grotesk"', 'Manrope', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'spotlight': 'spotlight 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          '0%': { opacity: '0.03', transform: 'scale(1)' },
          '100%': { opacity: '0.07', transform: 'scale(1.1)' },
        }
      },
    },
  },
  plugins: [],
}
