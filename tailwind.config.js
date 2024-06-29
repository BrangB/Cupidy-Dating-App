/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorbg:{
          primary: 'var(--primary-bg-color)',
          secondary: 'var(--secondary-bg-color)',
          third: 'var(--third-bg-color)'
        },
        btnbg: {
          primary: 'var(--btn-primary-color)',
          hover: 'var(--btn-primary-color-hover)'
        },
        colortext: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          third: 'var(--text-third)'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        third: {
          DEFAULT: 'var(--color-third)',
          hover: 'var(--color-third-hover)',
        },
        text: {
          primary: 'var(--primary-text-color)',
          secondary: 'var(--secondary-text-color)',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with a 'dark' class
  plugins: [],
}




        // primary: {
        //   50: 'var(--color-50)',
        //   100: 'var(--color-100)',
        //   200: 'var(--color-200)',
        //   300: 'var(--color-300)',
        //   400: 'var(--color-400)',
        //   500: 'var(--color-500)',
        //   600: 'var(--color-600)',
        //   700: 'var(--color-700)',
        //   800: 'var(--color-800)',
        //   900: 'var(--color-900)',
        //   950: 'var(--color-950)',
        // },