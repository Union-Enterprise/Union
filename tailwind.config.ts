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
        "card-dark": "#121316",
        "back-card": "#C6DAF7",
        "wm-main-background": "#FAFAFA",
        "wm-p-color": "rgba(0, 0, 0, 0.6)",
        "wm-border-color": "#F1F1F1",
        "tertiary-blue": "#071B43",
        // "tertiary-blue": "#5EA4F9",
        "linear-dark-blue": "#050D24",
        "linear-black": "#09090B",
        // "main-purple": "#60a5fa",
        // "main-purple": "#3b82f6",
        // "main-purple": "#7000d1",
        // "main-purple": "#7d00eb",
        // "main-purple": "#39006b",
        "main-purple": "#8651FF",
        "dark-gray": "#121316",
        "light-gray": "#1C1D22",
        "white-border": "rgba(255 ,255 ,255, 0.2)",
        "p-white": "rgba(255, 255, 255, 0.6)",
      },
      accentColor: {
        'purple': '#8651FF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

};
export default config;
