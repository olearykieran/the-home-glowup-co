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
        primary: '#fac1b4',
        secondary: '#FFFFFF',
        tertiary: '#381e00',
        quart: '#f9f1f1',
        cinco: '#e0d6cb'
      },
    },
  },
  plugins: [],
};
export default config;
