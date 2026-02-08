/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc3545',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc3545',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6f1a1a',
        },
        secondary: '#6c757d',
        dark: '#212529',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}
