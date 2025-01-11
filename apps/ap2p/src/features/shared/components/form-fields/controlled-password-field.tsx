"use client"

import React, { useState } from "react"

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
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"

type NPasswordFieldProps = {
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

interface ControlledPasswordProps<T extends FieldValues>
  extends Omit<NPasswordFieldProps, "name">,
    InputControllerType<T> {}

const ControlledPasswordField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  className,
  showError = true,
  autoComplete,
  requiredStar = false,
  ...props
}: ControlledPasswordProps<T>) => {
  const { control } = useFormContext()
  const { formatMessage } = useLocale()

  const [passwordVisibility, setPasswordVisibility] = useState(false)

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

          <div className='relative w-full'>
            <FormControl>
              <Input
                type={passwordVisibility ? "text" : "password"}
                placeholder={placeholder}
                className='pr-12'
                autoComplete={autoComplete ?? "current-password"}
                {...props}
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>

            <button
              type='button'
              onClick={() => {
                setPasswordVisibility((prev) => !prev)
              }}
              className='absolute inset-y-0 right-0 cursor-pointer px-3 text-gray-500'
            >
              {passwordVisibility && <EyeIcon className='h-5 w-5' />}
              {!passwordVisibility && <EyeOffIcon className='h-5 w-5' />}
            </button>
          </div>

          {description && <FormDescription>{description}</FormDescription>}

          {showError && <FormMessage t={formatMessage} />}
        </FormItem>
      )}
    />
  )
}

export { ControlledPasswordField }
