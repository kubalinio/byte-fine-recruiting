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

        "primary-foreground": "hsl(var(--primary-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          50: "#7209b780",

        },
        black: {
          DEFAULT: "#000000",
          25: "#CDCDCD",
          50: "#353535",
          75: "#676767",
          100: "#353535",
        },
        white: {
          DEFAULT: "#FFFFFF",
          25: "#FAFAFA",
          50: "#F7F7F8"
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
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
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  darkMode: "class",
  plugins: []
}

export default config
