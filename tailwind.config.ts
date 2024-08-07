import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merri': ['var(--font-merri)'],
        'mont': ['var(--font-mont)'],
        'anton': ['var(--font-anton)'],
      },
      colors: {
        "white": "#f7f5f2",
        "black": "#1a1918",

        "gray": {
          500: "#8c847d"
        },

        "primary": {
          500: "#fd7e14"
        }
      }
    }
  },
  plugins: [],
};
export default config;
