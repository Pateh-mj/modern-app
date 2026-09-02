import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        raleway: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        poppins: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        bahnschrift: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffc451",
      },
    },
  },
  plugins: [],
};
export default config;
