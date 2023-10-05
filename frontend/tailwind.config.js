/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "@primary": "#58bf97",
      },
      screens: {
        "@mobile": {max: "1px", max: "1023px"},
        "@laptop": "1024px"
      }
    },
  },
  plugins: [],
};
