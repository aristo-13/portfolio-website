/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(7px)' },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

