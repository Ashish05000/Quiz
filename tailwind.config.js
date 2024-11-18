/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem", // 10px / 16px = 0.625rem
        xxxs: "0.6875rem", // 11px / 16px = 0.6875rem
        xs: "0.75rem", // 12px / 16px = 0.75rem
        sm: "0.875rem", // 14px / 16px = 0.875rem
        base: "1rem", // 16px / 16px = 1rem
        lg: "1.125rem", // 18px / 16px = 1.125rem
        xl: "1.25rem", // 20px / 16px = 1.25rem
        "2xl": "1.5rem", // 24px / 16px = 1.5rem
        "3xl": "2rem", // 32px / 16px = 2rem
        "4xl": "2.25rem", // 36px / 16px = 2.25rem
        "5xl": "2.5rem", // 40px / 16px = 2.5rem
        "6xl": "4.5rem", // 72px / 16px = 4.5rem
        // Add more sizes as needed...
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
