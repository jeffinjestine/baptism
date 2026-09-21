/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0B0B0B",
          secondary: "#151515",
          card: "rgba(255, 255, 255, 0.08)",
          cardHover: "rgba(255, 255, 255, 0.12)",
          border: "rgba(212, 175, 55, 0.25)",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          shimmer: "#FFF3B0",
          dark: "#9A7B1C",
          glow: "rgba(212, 175, 55, 0.4)",
        },
        grayText: "#BDBDBD",
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-metallic': 'linear-gradient(45deg, #AA771C, #FBF5B7, #BF953F, #AA771C)',
        'dark-radial': 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.15) 0%, rgba(11, 11, 11, 0.95) 70%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.55)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
