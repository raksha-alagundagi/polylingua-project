/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6E48AA',
        secondary: '#49A9EE',
      },
    },
  },
  plugins: [],
}

