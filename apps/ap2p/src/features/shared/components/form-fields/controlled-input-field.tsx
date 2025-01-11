"use client"

import React from "react"

import type { FieldValues, Path } from "react-hook-form"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "@ap2p/ui"
import { cn } from "@ap2p/utils"
import { useLocale } from "hooks/index"
import { TranslateFn } from "i18n/messages"
import { useFormContext } from "react-hook-form"

type NInputFieldProps = {
  className?: string
  label?: string
  placeholder?: string
  description?: string
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"]
  showError?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

type InputControllerType<T extends FieldValues> = {
  name: Path<T>
  requiredStar?: boolean
}

interface ControlledInputProps<T extends FieldValues>
  extends Omit<NInputFieldProps, "name">,
    InputControllerType<T> {}

const ControlledInputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  type,
  className,
  showError = true,
  requiredStar = false,
  ...props
}: ControlledInputProps<T>) => {
  const { control } = useFormContext()
  const { formatMessage } = useLocale()

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full space-y-1.5", className)}>
          {label && (
            <FormLabel>
              {label}{" "}
              {requiredStar && <span className='text-error-600 -ml-px'>*</span>}
            </FormLabel>
          )}

          <FormControl>
            <Input
              placeholder={placeholder}
              type={type ? type : "text"}
              {...props}
              {...field}
              value={field.value ?? ""}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {showError && <FormMessage t={formatMessage} />}
        </FormItem>
      )}
    />
  )
}

const ControlledNumberInputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  type,
  className,
  showError = true,
  ...props
}: ControlledInputProps<T>) => {
  const { control } = useFormContext()

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
            if (/^\d*$/.test(e.target.value)) {
              field.onChange(e.target.value)
            }
          } else if (e.target.value === "") {
            field.onChange("")
          }
        }

        return (
          <FormItem className={cn("w-full space-y-1.5", className)}>
            {label && <FormLabel>{label}</FormLabel>}

            <FormControl>
              <Input
                className='h-11'
                maxLength={32}
                inputMode='numeric'
                placeholder={placeholder}
                type={type ? type : "text"}
                {...field}
                {...props}
                onChange={handleChange}
                value={field.value ?? ""}
              />
            </FormControl>

            {description && <FormDescription>{description}</FormDescription>}

            {showError && <FormMessage />}
          </FormItem>
        )
      }}
    />
  )
}

const ControlledPostalCodeInputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  type,
  className,
  showError = true,
  ...props
}: ControlledInputProps<T>) => {
  const { control } = useFormContext()

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target

          if (value === "") {
            field.onChange("")
            return
          }

          if (!/^\d{0,2}-?\d{0,3}$/.test(value) || value === "-") return

          const newValue =
            value.length === 3 && !value.includes("-")
              ? `${value.substring(0, 2)}-${value.substring(2)}`
              : value.length === 3 && value.charAt(2) === "-"
                ? value.slice(0, 2)
                : value

          field.onChange(newValue)
        }

        return (
          <FormItem className={cn("w-full space-y-1.5", className)}>
            {label && <FormLabel>{label}</FormLabel>}

            <FormControl>
              <Input
                className='h-11'
                maxLength={8}
                {...props}
                inputMode='numeric'
                placeholder={placeholder}
                type={type ? type : "text"}
                {...field}
                value={field.value ?? ""}
                onChange={handleChange}
              />
            </FormControl>

            {description && <FormDescription>{description}</FormDescription>}

            {showError && <FormMessage />}
          </FormItem>
        )
      }}
    />
  )
}

export {
  ControlledInputField,
  ControlledNumberInputField,
  ControlledPostalCodeInputField
}
