import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "bg-light-gray": "#9E9E9E",
        "accent-green": "#CAFE00",
        "accent-purple": "#605FE0",
        "accent-red": "#BD0600",
        "accent-blue": "#64CDFF",
        "warning-red": "#7A1502",
        "warning-light": "#FDE7E3",
      },
    },
  },
  plugins: [],
};
export default config;

