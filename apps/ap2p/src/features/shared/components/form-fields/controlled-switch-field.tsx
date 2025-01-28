import type { FieldValues, Path } from "react-hook-form"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SwitchThin
} from "@ap2p/ui"
import { cn } from "@ap2p/utils"

type NSwitchFieldProps = {
  className?: string
  label?: string
  description?: string
  showError?: boolean
  disabled?: boolean
}

type SwitchControllerType<T extends FieldValues> = {
  name: Path<T>
}

type ControlledSwitchFieldProps<T extends FieldValues> = NSwitchFieldProps &
  SwitchControllerType<T>

const ControlledSwitchField = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  showError = true,
  disabled,
  ...props
}: ControlledSwitchFieldProps<T>) => {
  const { control } = useFormContext()

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          <div className='relative flex items-center'>
            <FormControl>
              <SwitchThin
                {...props}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled ?? false}
              />
            </FormControl>

            {label && (
              <FormLabel className='mb-0 ml-3 text-base font-semibold text-gray-900'>
                {label}
              </FormLabel>
            )}
          </div>

          {description && <FormDescription>{description}</FormDescription>}

          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

export { ControlledSwitchField }
