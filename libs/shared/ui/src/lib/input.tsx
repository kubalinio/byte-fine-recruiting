import * as React from "react";

import { cn } from "@ap2p/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "border-input focus-visible:ring-ring aria-[invalid=true]:border-error flex h-14 w-full rounded-lg border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:border-opacity-25",
          className
        )}
        ref={ref}
        type={type}
        autoComplete="on"
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
