/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Correcting the fontFamily syntax
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
      },
      backgroundBlendMode: [
        "multiply",
        "overlay",
        "lighten",
        "darken",
        "luminosity",
        "color-dodge",
      ],

      colors: {
        primaryb: "rgba(226, 241, 255, 0.5)",
        primary: "#1D437F",
        secondary: "#42C7F0", // Using RGBA for 50% transparency
      },
    },
  },
};
