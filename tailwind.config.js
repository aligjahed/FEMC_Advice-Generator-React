module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Primary Colors
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neon-Green": "hsl(150, 100%, 66%)",

        // Neutral Colors
        "Grayish-Blue": "#313A49",
        "Dark-Grayish-Blue": "#202632",
      },
      boxShadow: {
        "3xl": "0px 3px 40px 5px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
