import { join } from "path"

// import animatePlugin from 'tailwindcss-animate';
import { createGlobPatternsForDependencies } from "@nx/react/tailwind"
import defaultTheme from "tailwindcss/defaultTheme"

import { Config } from "tailwindcss"

// /** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    join(__dirname, "libs/shared/ui/src/**/!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname)
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
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        info: "hsl(var(--info))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        "error-foreground": "hsl(var(--error-foreground))",
        rounded: "hsl(var(--radius))",
        ring: "hsl(var(--ring))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))"
      },
      boxShadow: {
        z1: "0px 1px 2px 0px #919EAB29",
        z2: "0px 2px 6px 0px #919EAB29",
        z8: "0px 8px 16px 0px #919EAB29",
        z12: "0px 12px 24px -4px #919EAB29",
        z16: "0px 16px 32px -4px #919EAB29",
        z20: "0px 20px 40px -4px #919EAB29",
        z24: "0px 24px 48px 0px #919EAB29",
        zButton: "0px 8px 16px 0px #00AB553D",
        zCard: "0px 12px 24px -4px #919EAB1F, 0px 0px 2px 0px #919EAB33",
        dialog: "-40px 40px 80px -8px #919EAB3D",
        dropdown: "-20px 20px 40px -4px #919EAB3D, 0px 0px 2px 0px #919EAB3D"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #5BE584 0%, #007B55 100%)"
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
