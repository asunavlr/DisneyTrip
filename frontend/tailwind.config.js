/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        disneyBlue: "#1E90FF",
        gold: "#FFD700",
        darkBlue: "#001F54",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};