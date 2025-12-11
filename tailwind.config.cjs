module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B61FF",   // main blue used across UI
        muted: "#6B7280",     // secondary text
        quizBg: "#E8F8FF",    // page background for quiz
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        // optional extra spacing tokens, adjust if needed
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
