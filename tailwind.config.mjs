import { fontFamily, screens } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },  
      colors: {
        gigas: {
          DEFAULT: "#503caf",
          50: "#eff2fe",
          100: "#e2e5fd",
          200: "#cbd0fa",
          300: "#acb1f5",
          400: "#8a8aef",
          500: "#776ee6",
          600: "#6752d9",
          700: "#503caf",
          800: "#49399a",
          900: "#3e347b",
          950: "#251f47",
        },
        "west-side": {
          DEFAULT: "#f78f19",
          50: "#fff9ed",
          100: "#fff2d5",
          200: "#fde1ab",
          300: "#fcca75",
          400: "#f9a93e",
          500: "#f78f19",
          600: "#e8740e",
          700: "#c0580e",
          800: "#994513",
          900: "#7b3a13",
          950: "#421b08",
        },
        "aquamarine-blue": {
          DEFAULT: "#81e0e1",
          50: "#effcfc",
          100: "#d7f6f6",
          200: "#b4eded",
          300: "#81e0e1",
          400: "#44c8cc",
          500: "#28adb2",
          600: "#248c96",
          700: "#24717a",
          800: "#255d65",
          900: "#234d56",
          950: "#12333a",
        },
      },
      screens: {
        'xs': '375px',
        ...screens,
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "Rubik Variable", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

console.log(screens)