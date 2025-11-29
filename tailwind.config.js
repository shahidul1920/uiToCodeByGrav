/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sticky-yellow': '#FDE047', // yellow-300
        'sticky-blue': '#93C5FD',   // blue-300
        'sticky-pink': '#F9A8D4',   // pink-300
        'accent-purple': '#A855F7', // purple-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        handwriting: ['Kalam', 'cursive'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(#e5e7eb 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
      }
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      float: {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-10px)",
        },
      },
    },
    animation: {
      blob: "blob 7s infinite",
      "float-slow": "float 6s ease-in-out infinite",
      "float-medium": "float 4s ease-in-out infinite",
    },
  },
  plugins: [],
}
