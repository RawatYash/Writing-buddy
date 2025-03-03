/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#1F2937',    // Slate Gray for Sidebar Background
          text: '#E5E7EB',  // Light Gray for Sidebar Text
          hover: '#374151', // Medium Gray for Hover State
          active: '#3B82F6' // Modern Blue for Active State
        },
        primary: '#2563EB',      // Vivid Blue for Buttons
        background: '#F9FAFB',   // Off-White for App Background
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
