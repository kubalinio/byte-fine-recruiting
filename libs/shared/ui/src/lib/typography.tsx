import React from "react";

import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-[4rem] font-bold leading-[5rem]",
      h2: "text-[3rem] font-bold leading-[4rem]",
      h3: "text-[2rem] font-bold leading-[3rem]",
      h4: "text-[1.5rem] font-bold leading-9",
      h5: "text-[1.25rem] font-bold leading-[1.875rem]",
      h6: "text-[1.125rem] font-bold leading-7",
      ["subtitle-1"]: "text-base font-semibold leading-6",
      ["subtitle-2"]: "text-sm font-semibold leading-[1.375rem]",
      ["body-1"]: "text-base font-normal leading-6",
      ["body-2"]: "text-sm font-normal leading-[1.375rem]",
      ["caption"]: "text-xs font-normal leading-[1.125rem]",
      ["overline"]: "text-xs font-bold leading-[1.125rem]",
    },
  },
  defaultVariants: {
    variant: "body-1",
  },
});

const getDefaultComponent = (
  variant: string | undefined | null
): keyof React.JSX.IntrinsicElements => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "subtitle-1":
      return "p";
    case "subtitle-2":
      return "p";
    case "body-1":
      return "p";
    case "body-2":
      return "p";
    case "caption":
      return "p";
    case "overline":
      return "p";

    default:
      return "p";
  }
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<
  React.HTMLAttributes<HTMLElement>,
  TypographyProps
>(({ variant, children, as, className, ...props }, ref) => {
  const Component = as ?? getDefaultComponent(variant);

  return (
    <Component
      ref={ref}
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";

export { Typography, typographyVariants };
