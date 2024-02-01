import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4F6F8",
        secondary: "#2AA8DA",
        dark: "#1E1E1E",
        border: "#DEE2E6",
      }
    },
    keyframes: {
      header:{
        '0%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0)',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
