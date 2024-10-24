/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Ensure Tailwind scans your template and component files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
