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
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(#e5e7eb 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
      }
    },
  },
  plugins: [],
}
