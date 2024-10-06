import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["var(--font-custom)"],
      },
      width: {
        lineA: "104.5%",
        lineB: "83.5%",
        lineC: "63.5%",
      },
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
        mainBlue: "#1865F2",
        "wm-border-color": "#F1F1F1",
        "tertiary-blue": "#071B43",
        "linear-dark-blue": "#050D24",
        "linear-black": "#09090B",
        "main-purple": "#8651FF",
        "sub-purple": "rgba(134, 81, 255, 0.4)",
        "dark-gray": "#121316",
        "light-gray": "#1C1D22",
        "white-border": "rgba(255 ,255 ,255, 0.2)",
        "p-white": "rgba(255, 255, 255, 1)",
        "p-gray": "#A0A0A0",
        "p-black": "#000000",
      },
      accentColor: {
        purple: "#8651FF",
      },
      keyframes: {
        spin10: {
          from: { transform: "rotate(10deg)" },
          to: { transform: "rotate(370deg)" },
        },
        spinR10: {
          from: { transform: "rotate(-10deg)" },
          to: { transform: "rotate(-370deg)" },
        },
        spin20: {
          from: { transform: "rotate(20deg)" },
          to: { transform: "rotate(380deg)" },
        },
        spinR20: {
          from: { transform: "rotate(-20deg)" },
          to: { transform: "rotate(-380deg)" },
        },
        spin35: {
          from: { transform: "rotate(35deg)" },
          to: { transform: "rotate(395deg)" },
        },
        spinR35: {
          from: { transform: "rotate(-35deg)" },
          to: { transform: "rotate(-395deg)" },
        },
        spin60: {
          from: { transform: "rotate(60deg)" },
          to: { transform: "rotate(420deg)" },
        },
        spinR60: {
          from: { transform: "rotate(-60deg)" },
          to: { transform: "rotate(-420deg)" },
        },
        spin70: {
          from: { transform: "rotate(70deg)" },
          to: { transform: "rotate(430deg)" },
        },
        spinR70: {
          from: { transform: "rotate(-70deg)" },
          to: { transform: "rotate(-430deg)" },
        },
        spin90: {
          from: { transform: "rotate(90deg)" },
          to: { transform: "rotate(450deg)" },
        },
        spinR90: {
          from: { transform: "rotate(-90deg)" },
          to: { transform: "rotate(-450deg)" },
        },
        spin105: {
          from: { transform: "rotate(105deg)" },
          to: { transform: "rotate(465deg)" },
        },
        spinR105: {
          from: { transform: "rotate(-105deg)" },
          to: { transform: "rotate(-465deg)" },
        },
        spin130: {
          from: { transform: "rotate(130deg)" },
          to: { transform: "rotate(490deg)" },
        },
        spinR130: {
          from: { transform: "rotate(-130deg)" },
          to: { transform: "rotate(-490deg)" },
        },
        spin145: {
          from: { transform: "rotate(145deg)" },
          to: { transform: "rotate(505deg)" },
        },
        spinR145: {
          from: { transform: "rotate(-145deg)" },
          to: { transform: "rotate(-505deg)" },
        },
        spin155: {
          from: { transform: "rotate(155deg)" },
          to: { transform: "rotate(515deg)" },
        },
        spinR155: {
          from: { transform: "rotate(-155deg)" },
          to: { transform: "rotate(-515deg)" },
        },
      },
      animation: {
        "spin-slow-10": "spin10 200s linear infinite",
        "spin-slow-10-reverse": "spinR10 200s linear infinite",
        "spin-slow-20": "spin20 200s linear infinite",
        "spin-slow-20-reverse": "spinR20 200s linear infinite",
        "spin-slow-35": "spin35 200s linear infinite",
        "spin-slow-35-reverse": "spinR35 200s linear infinite",
        "spin-slow-60": "spin60 200s linear infinite",
        "spin-slow-60-reverse": "spinR60 200s linear infinite",
        "spin-slow-70": "spin70 200s linear infinite",
        "spin-slow-70-reverse": "spinR70 200s linear infinite",
        "spin-slow-90": "spin90 200s linear infinite",
        "spin-slow-90-reverse": "spinR90 200s linear infinite",
        "spin-slow-105": "spin105 200s linear infinite",
        "spin-slow-105-reverse": "spinR105 200s linear infinite",
        "spin-slow-130": "spin130 200s linear infinite",
        "spin-slow-130-reverse": "spinR130 200s linear infinite",
        "spin-slow-145": "spin145 200s linear infinite",
        "spin-slow-145-reverse": "spinR145 200s linear infinite",
        "spin-slow-155": "spin155 200s linear infinite",
        "spin-slow-155-reverse": "spinR155 200s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
