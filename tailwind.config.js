/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Landing Page (Blue)
        primary: "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "card-dark": "#1a2632",
        
        // User Dashboard (Gold)
        "primary-gold": "#fac638",
        "dashboard-surface": "#181611",
        "dashboard-bg": "#231e0f",
        "dashboard-card": "#27241b",
        "dashboard-text": "#bbb29b",

        // Owner Dashboard (Green)
        "owner-primary": "#13ec5b",
        "owner-bg-light": "#f6f8f6",
        "owner-bg-dark": "#102216",
        "owner-card": "#16261d",
        "owner-text-sec": "#9db9a6",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
        "space": ["Space Grotesk", "sans-serif"],
        "noto": ["Noto Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"], // Added for Owner Dashboard
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}