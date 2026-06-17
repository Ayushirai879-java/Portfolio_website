/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          light: '#f8fafc',
          dark: '#0f172a',
          accent: '#4f46e5', // indigo
          accentLight: '#6366f1',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          neon: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-left': 'fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.03)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(25px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-25px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(25px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 20px 50px -12px rgba(79, 70, 229, 0.08)',
        'neon-indigo': '0 0 20px rgba(79, 70, 229, 0.1)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.1)',
        'neon-rose': '0 0 20px rgba(244, 63, 94, 0.1)',
      }
    },
  },
  plugins: [],
}
