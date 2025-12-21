/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ===========================================
        // 1. ORIGINAL KEYS (RESTORED TO PREVENT ERRORS)
        // ===========================================
        primary: "#137fec", // Landing Page Blue
        "background-light": "#f6f7f8",
        
        // These were used in your original Explore/Dashboard code
        "background-dark": "#231e0f", 
        "surface-dark": "#181611",    
        "card-dark": "#27241b",
        
        // These were used in your Admin/Owner code
        "owner-primary": "#13ec5b",
        "owner-bg-light": "#f6f8f6",
        "owner-bg-dark": "#102216",
        "owner-card": "#16261d",
        "owner-text-sec": "#9db9a6",

        // Utilities you had defined
        "border-dark": "#2b3d41",
        "primary-gold": "#fac638",

        // ===========================================
        // 2. NEW "UNIFORM BLACK" THEME (For the New Design)
        // ===========================================
        // These are the new keys for the sleek Zinc look we just built
        "user-bg": "#09090b",       // Zinc 950 (Main Background)
        "user-surface": "#18181b",  // Zinc 900 (Sidebar/Header)
        "user-card": "#18181b",     // Zinc 900 (Cards)
        "user-border": "#27272a",   // Zinc 800 (Borders)
        
        "user-text-main": "#f4f4f5", // Zinc 100 (Headings)
        "user-text": "#a1a1aa",      // Zinc 400 (Body/Icons)
        
        "user-accent": "#ffffff",    // White (Action Buttons)
        "user-accent-hover": "#e4e4e7", 
      },
      
      // ===========================================
      // FONTS (MERGED)
      // ===========================================
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
        "space": ["Space Grotesk", "sans-serif"],
        "noto": ["Noto Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      
      // ===========================================
      // ANIMATIONS (KEPT)
      // ===========================================
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