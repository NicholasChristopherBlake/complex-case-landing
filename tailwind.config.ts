import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        p1: "24px",
        p2: "20px",
        p3: "18px",
        p4: "16px",
        p5: "14px",
        p6: "12px",
      },
      mixBlendMode: {
        luminosity: "luminosity",
      },
      backgroundImage: {
        "blue-gradient-svg": "url('/backgrounds/home-page-blue.svg')",
        "green-svg": "url('/backgrounds/home-page-green.svg')",
        "carousel-bottom-svg": "url('/backgrounds/carousel-card-bottom.svg')",
        "carousel-top-svg": "url('/backgrounds/carousel-card-top.svg')",
      },
      colors: {
        "primary-black": "#0C0E00",
        "primary-white": "#FBFBFB",
        "primary-gray": "#717171",
        "primary-light-gray": "#999EAA",
        "footer-gray": "#EFF3FF",
        "bg-gray": "#404137",
        "bg-disabled": "#9E9E9E",
        accent1: "#CAFE00",
        accent2: "#605FE0",
        accent3: "#64CDFF",
        "accent-red": "#BD0600",
        "warning-red": "#7A1502",
        "warning-light": "#FDE7E3",
      },
    },
  },
  plugins: [],
};
export default config;

