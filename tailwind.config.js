/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        custom: '0 15px 15px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        'custom': '500ms',
      }
    },
  },
  plugins: [],
};
