// import { join } from "path"

// import animatePlugin from 'tailwindcss-animate';
import defaultTheme from "tailwindcss/defaultTheme"

import type { Config } from "tailwindcss"

// /** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,html}"
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px"
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "1.5rem",
        "2xl": "1.5rem"
      },
      screens: {
        sm: "540px",
        md: "768px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",

        "primary-foreground": "hsl(var(--primary-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          100: "#DDDDF7",
          200: "#BBBBEF",
          300: "#9A99E7",
          400: "#7877DF",
          500: "#5655D7",
          600: "#4D4CC1",
          700: "#4948B7",
          800: "#4544AC",
          900: "#4040A1"
        },
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          100: "#DADDE0",
          200: "#B5BCC0",
          300: "#909AA1",
          400: "#6B7981",
          500: "#465762",
          600: "#3F4E58",
          700: "#3B4A53",
          800: "#38464E",
          900: "#344149"
        },
        gray: {
          100: "#F4F4F4",
          200: "#D3D3D4",
          300: "#BCBEBF",
          400: "#A6A8A9",
          500: "#909294",
          600: "#7A7C7F",
          700: "#646669",
          800: "#4D5154",
          900: "#212529"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          hover: "hsl(var(--success-hover))",
          100: "#CCEBE5",
          900: "#00735F"
        },
        "error-foreground": "hsl(var(--primary-foreground))",
        error: {
          DEFAULT: "hsl(var(--error))",
          hover: "hsl(var(--error-hover))",
          100: "#FFD9DB",
          900: "#BF3138"
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          hover: "hsl(var(--warning-hover))",
          100: "#FFEFD9",
          900: "#BF8231"
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          hover: "hsl(var(--info-hover))",
          100: "#DBF2FA",
          900: "#388EAE"
        },

        rounded: "hsl(var(--radius))",
        ring: "hsl(var(--ring))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))"
      },
      boxShadow: {
        sm: "0px 1px 2px 3px #8f919473",
        DEFAULT: "0px 4px 16px 0px #8f919473",
        lg: "0px 10px 20px 0px #8f919473",
        // Additional shadows
        z1: "0px 1px 2px 0px #8f919473",
        z2: "0px 2px 6px 0px #8f919473",
        z8: "0px 8px 16px 0px #8f919473",
        z12: "0px 12px 24px -4px #8f919473",
        z16: "0px 16px 32px -4px #8f919473",
        z20: "0px 20px 40px -4px #8f919473",
        z24: "0px 24px 48px 0px #8f919473",
        zButton: "0px 8px 16px 0px #00AB553D",
        zCard: "0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33",
        dialog: "-40px 40px 80px -8px #919EAB3D",
        dropdown: "-20px 20px 40px -4px #919EAB3D, 0px 0px 2px 0px #919EAB3D"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #5655D7 0%, #7F7EFF 100%)",
        "gradient-primary-hover":
          "linear-gradient(45deg, #5655D7e6 0%, #7F7EFFe6 100%)",
        "gradient-secondary":
          "linear-gradient(45deg, #586D7A 0%, #798A95 100%)",
        "gradient-secondary-hover":
          "linear-gradient(45deg, #586D7Ae6 0%, #798A95e6 100%)",
        "gradient-success": "linear-gradient(45deg, #00997E 0%, #00C9A5 100%)",
        "gradient-success-hover":
          "linear-gradient(45deg, #00997Ee6 0%, #00C9A5e6 100%)",
        "gradient-error": "linear-gradient(45deg, #FF414B 0%, #FF7A81 100%)",
        "gradient-error-hover":
          "linear-gradient(45deg, #FF414Be6 0%, #FF7A81e6 100%)",
        "gradient-warning": "linear-gradient(45deg, #FFAE41 0%, #FFC06A 100%)",
        "gradient-info": "linear-gradient(45deg, #4ABDE8 0%, #77DAFF 100%)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" }
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out"
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  darkMode: "class",
  plugins: []
}

export default config
