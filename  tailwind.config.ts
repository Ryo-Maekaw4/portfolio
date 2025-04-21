import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dela: ['"Dela Gothic One"', "sans-serif"], // ← クラス名は好きにしてOK
      },
    }
  },
  plugins: [],
};

export default config;
