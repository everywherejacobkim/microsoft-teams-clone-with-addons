/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6264a7",
        "primary-light": "#d9dbf1",
      },
    },
    plugins: [],
  }
}