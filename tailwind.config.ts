import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(--border))",
        input: "oklch(--input))",
        ring: "oklch(--ring))",
        background: "oklch(--background))",
        foreground: "oklch(--foreground))",
        primary: {
          DEFAULT: "oklch(--primary))",
          foreground: "oklch(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(--secondary))",
          foreground: "oklch(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(--destructive))",
          foreground: "oklch(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(--muted))",
          foreground: "oklch(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(--accent))",
          foreground: "oklch(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(--popover))",
          foreground: "oklch(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(--card))",
          foreground: "oklch(--card-foreground))",
        },
      },
      backgroundColor: {
        container: "oklch(--container))",
        "gray-primary": "oklch(--gray-primary))",
        "gray-secondary": "oklch(--gray-secondary))",
        "gray-tertiary": "oklch(--gray-tertiary))",
        "left-panel": "oklch(--left-panel))",
        "chat-hover": "oklch(--chat-hover))",
        "green-primary": "oklch(--green-primary))",
        "green-secondary": "oklch(--green-secondary))",
        "green-chat": "oklch(--green-chat))",
      },
      backgroundImage: {
        "chat-tile-light": "url('/bg-light.png')",
        "chat-tile-dark": "url('/bg-dark.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
