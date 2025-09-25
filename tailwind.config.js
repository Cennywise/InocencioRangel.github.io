export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dunerise: ['DuneRise', 'sans-serif'],
        body: ['Arial', 'sans-serif'], // fallback for other sections
      },
      keyframes: {
        slide: {
          "0%": { backgroundPosition: "0% 30%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
    },
  },
  plugins: [],
}
