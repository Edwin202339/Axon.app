/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#3490dc",
        'secondary': "#ffed4a",
        'dark': "#2d3748",
        'light': "#f7fafc",
      },
      backgroundColor: {
        'primary': "#3490dc",
        'secondary': "#ffed4a",
        'dark': "#2d3748",
        'light': "#f7fafc",
      },
      textColor: {
        'primary': "#3490dc",
        'secondary': "#ffed4a",
        'dark': "#2d3748",
        'light': "#f7fafc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-light',
    'bg-dark',
    'text-light',
    'text-dark',
    'text-primary',
    'bg-primary',
    'text-secondary',
    'bg-secondary',
    'dark:bg-dark',
    'dark:bg-light',
    'dark:text-dark',
    'dark:text-light'
  ]
}
