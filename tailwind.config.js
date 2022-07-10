/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "976px",
    },
    fontFamily: {
      Poppins_Medium: "Poppins_Medium",
      Poppins_Regular: "Poppins_Regular",
      Poppins_SemiBold: "Poppins_SemiBold",
      Poppins_Light: "Poppins_Light",
      Jarkata_Medium: "Jarkata_Medium",
      Jarkata_SemiBold: "Jarkata_SemiBold",
      Jarkata_Regular: "Jarkata_Regular",
    },
    extend: {},
  },
  plugins: [],
};
