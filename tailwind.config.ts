import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5', // A lighter shade of primary color
          DEFAULT: '#3730a3', // Primary color
          dark: '#312e81', // A darker shade of primary color
        },
        secondary: {
          light: '#ec4899', // A lighter shade of secondary color
          DEFAULT: '#db2777', // Secondary color
          dark: '#be185d', // A darker shade of secondary color
        },
        accent: {
          light: '#22d3ee', // A lighter shade of accent color
          DEFAULT: '#06b6d4', // Accent color
          dark: '#0e7490', // A darker shade of accent color
        },
        neutral: {
          light: '#f3f4f6', // A light neutral color for backgrounds
          DEFAULT: '#e5e7eb', // Default neutral color
          dark: '#374151', // A dark neutral color for text
        },
        success: {
          light: '#6ee7b7', // Light green for success states
          DEFAULT: '#10b981', // Default green for success states
          dark: '#047857', // Dark green for success states
        },
        warning: {
          light: '#fde68a', // Light yellow for warning states
          DEFAULT: '#f59e0b', // Default yellow for warning states
          dark: '#b45309', // Dark yellow for warning states
        },
        error: {
          light: '#fca5a5', // Light red for error states
          DEFAULT: '#ef4444', // Default red for error states
          dark: '#b91c1c', // Dark red for error states
        },
      },
    },
  },
  plugins: [],
};
export default config;
