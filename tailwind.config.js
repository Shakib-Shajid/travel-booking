/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['var(--font-open_sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'custom-1280': '1280px', // Custom breakpoint for 1080px
        'custom-1440': '1440px', // Custom breakpoint for 1080px
        'custom-1600': '1600px', // Custom breakpoint for 1080px
      },
    },
  },
  plugins: [require('daisyui'),],
};
