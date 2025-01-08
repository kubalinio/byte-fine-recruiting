"use client";

import * as React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@ap2p/utils";

import { AddPhoto } from "../icons/add-photo";
import { Typography } from "./typography";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("size-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex size-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarPlaceholder = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-y-1 overflow-hidden rounded-full bg-gray-200">
      <AddPhoto className="text-gray-600" />

      <Typography variant="caption" as="span" className="text-gray-600">
        {children ? children : "Add Photo"}
      </Typography>
    </div>
  );
};

export { Avatar, AvatarFallback, AvatarImage, AvatarPlaceholder };
