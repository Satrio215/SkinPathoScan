/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
