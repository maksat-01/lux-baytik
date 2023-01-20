/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs : "320px",
        sm : "384px",
        md: "448px",
        lg: "512px",
        xl: "576px",
        "2xl": "672px",
        "3xl" : "768px",
        "4xl" : "992px",
        "5xl" : "1024px",
        "6xl" : "1200px",
        "7xl" : "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs : "320px",
          sm : "384px",
          md: "448px",
          lg: "512px",
          xl: "576px",
          "2xl": "672px",
          "3xl" : "768px",
          "4xl" : "992px",
          "5xl" : "1024px",
          "6xl" : "1200px",
          "7xl" : "1440px",
        },
      },
      fontSize: {
        sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
      },
      fontFamily: {
        sans: "Patriciana",
        serif: "Jost",
        mono: "Montserrat"
      }
    },
  },
  plugins: [],
}
