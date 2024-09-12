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
      backgroundImage: {
        "blue-gradient":
          "radial-gradient(circle, rgba(6,5,52,1) 0%, rgba(1,1,10,1) 100%);",
      },
      colors: {
        "primary-black": "#0C0E00",
        "primary-white": "#FBFBFB",
        "primary-gray": "#717171",
        "primary-light-gray": "#999EAA",
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

