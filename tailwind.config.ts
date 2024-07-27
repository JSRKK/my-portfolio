import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
        secondary: "#666666",
        black: {
          DEFAULT: "#000000",
          1: "#333333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
