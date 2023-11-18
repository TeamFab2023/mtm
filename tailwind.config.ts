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
        customGray: {
          100: "rgb(102, 102, 102)",
        },
        skyBlue: {
          100: "#29d2bf",
        },
        primaryGray: {
          100: "#FAFAFA",
        },
      },
      fontFamily: {
        customFont: [
          '"PingFang SC", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Chinese Quote", -apple-system, BlinkMacSystemFont',
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
