/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rebeccapurple ": "#663399",
      },
      backgroundImage: {
        'mountain': "url('/src/assets/mountains.png')",
        'planet': "url('/src/assets/planets.png')",
        'stars': "url('/src/assets/stars.png')",
      }
    },
  },
  plugins: [],
};
