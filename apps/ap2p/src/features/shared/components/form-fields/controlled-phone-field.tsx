"use client";

import React from "react";

import type { FieldValues, Path } from "react-hook-form";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PhoneInput,
} from "@ap2p/ui";
import { cn } from "@ap2p/utils";

type NPhoneInputProps = {
  className?: string;
  label?: string;
  description?: string;
  showError?: boolean;
  icon?: boolean;
  notTranslate?: boolean;
  placeholder?: string;
};

type PhoneControllerType<T extends FieldValues> = {
  name: Path<T>;
};

interface ControlledPhoneProps<T extends FieldValues>
  extends Omit<NPhoneInputProps, "name">,
    PhoneControllerType<T> {}

const ControlledPhoneField = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  placeholder,
  showError = true,
  icon = false,
  notTranslate = false,
}: ControlledPhoneProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full space-y-1.5", className)}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <PhoneInput
              {...field}
              value={field.value}
              icon={icon}
              placeholder={placeholder}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {showError && <FormMessage notTranslate={notTranslate} />}
        </FormItem>
      )}
    />
  );
};

export { ControlledPhoneField };
