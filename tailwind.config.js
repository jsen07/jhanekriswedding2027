/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        tangerine: ["tangerine", "cursive"],
        birthstone: ["birthstone", "cursive"],
      },

      colors: {
        sage: "#d8e3de",
      },

      keyframes: {
        scroll: {
          "0%": {
            transform: "translateY(0px)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "80%": {
            transform: "translateY(18px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(24px)",
            opacity: "0",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        scroll: "scroll 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in-up": "fadeInUp 1.5s ease forwards",
      },
    },
  },

  plugins: [],
};
