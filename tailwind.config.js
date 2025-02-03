/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all Angular template and TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),],
};
