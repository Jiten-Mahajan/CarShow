/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1E1E2D",
          200: "#151521",
          300: "#0D0D14",
        },
        accent: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
        },
      },
    },
  },
  plugins: [],
};
