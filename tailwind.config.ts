import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "wm-main-background": "#FAFAFA",
        "wm-p-color": "rgba(0, 0, 0, 0.6)",
        "wm-border-color": "#F1F1F1",
        "tertiary-blue": "#071B43",
        // "tertiary-blue": "#5EA4F9"
      },
    },
  },
  plugins: [],
};
export default config;
