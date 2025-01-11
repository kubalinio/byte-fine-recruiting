import * as React from "react"

import { cn } from "@ap2p/utils"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { createTV } from "tailwind-variants"

const tv = createTV({
  twMerge: true
})

const buttonVariants = tv({
  slots: {
    button:
      "relative inline-flex items-center justify-center rounded-md font-bold ring-offset-background whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    loading:
      "w-5 h-5 animate-spin rounded-full bg-transparent border-2 border-white/90 border-l-transparent"
  },
  variants: {
    variant: {
      default: {
        button:
          "bg-primary text-white hover:bg-primary/90 focus:bg-primary/80 active:bg-primary/90 shadow-zButton",
        loading: "bg-primary/90 text-primary-foreground"
      },
      destructive: {
        button:
          "bg-error text-error-foreground hover:bg-error/90 focus:bg-error/80 shadow-zButton",
        loading: "bg-error/90 text-error-foreground"
      },
      outline: {
        button:
          "text-foreground border border-input bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background active:bg-white",
        loading: "!border-primary !border-l-transparent"
      },
      secondary: {
        button:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:bg-secondary/80 active:bg-secondary/90 shadow-zButton",
        loading: "bg-secondary/90 text-secondary-foreground"
      },
      ghost: {
        button: "hover:bg-accent hover:text-accent-foreground",
        loading: "bg-accent text-accent-foreground"
      },
      link: {
        button: "text-primary underline-offset-4 hover:underline",
        loading: "text-primary-foreground"
      }
    },
    size: {
      default: {
        button: "px-4 py-3 text-sm h-12",
        loading: "w-6 h-6 px-4"
      },
      sm: {
        button: "h-9 rounded-md px-3 text-[0.8125rem]",
        loading: "w-5 h-5"
      },
      md: {
        button: "h-10 rounded-md px-6 text-sm",
        loading: "w-5 h-5 px-4"
      },
      lg: {
        button: "h-11 rounded-md px-8 text-[0.875rem]",
        loading: "w-7 h-7"
      },
      icon: {
        button: "size-10",
        loading: "w-5 h-5"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      loading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    const styles = React.useMemo(
      () => buttonVariants({ variant, size }),
      [variant, size]
    )

    return (
      <Comp
        disabled={loading}
        className={styles.button({ class: className })}
        ref={ref}
        {...props}
      >
        <span
          className={cn("opacity-100", {
            "opacity-0": loading
          })}
        >
          {children}
        </span>

        {loading && (
          <span className='absolute inset-0 flex items-center justify-center'>
            <span className={styles.loading()} />
          </span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
