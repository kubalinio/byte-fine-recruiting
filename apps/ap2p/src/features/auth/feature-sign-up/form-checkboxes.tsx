import { useId } from "react"

import type {
  FieldPathValues,
  FieldValues,
  Path,
  PathValue
} from "react-hook-form"

import { useFormContext } from "react-hook-form"

import {
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@ap2p/ui"
import { cn } from "@ap2p/utils"

type NCheckboxFieldProps = {
  className?: string
  label?: string | React.ReactNode
  description?: string
  showError?: boolean
}

type CheckboxControllerType<T extends FieldValues> = {
  name: Path<T>
}

type ControlledCheckboxProps<T extends FieldValues> = NCheckboxFieldProps &
  CheckboxControllerType<T>

const items = [
  { name: "robotcash_1", label: "Robotcash", defaultChecked: true },
  { name: "robotcash_2", label: "Robotcash", defaultChecked: false },
  { name: "robotcash_3", label: "Robotcash", defaultChecked: false },
  { name: "robotcash_4", label: "Robotcash", defaultChecked: false }
]

const defaultValue = JSON.stringify({
  robotcash_1: true,
  robotcash_2: false,
  robotcash_3: false,
  robotcash_4: false
})

const FormCheckboxes = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  showError = true,
  ...props
}: ControlledCheckboxProps<T>) => {
  const id = useId()
  const { control } = useFormContext()

  const handleOnChangedCheckbox = (
    field: FieldValues,
    checked: string | boolean,
    name: string
  ) => {
    const value = JSON.parse(field.value)
    value[name] = checked

    field.onChange(JSON.stringify(value))
  }

  return (
    <div className=''>
      <FormField
        name={name}
        control={control}
        defaultValue={defaultValue as Path<T>}
        render={({ field, fieldState }) => (
          <>
            <FormItem className={cn("flex flex-col gap-4", className)}>
              {label && <FormLabel className=''>{label}</FormLabel>}

              <div
                className={cn(
                  "flex flex-wrap items-center justify-between gap-6",
                  {
                    "[&_div]:border-red-500": fieldState.error
                  }
                )}
              >
                {items.map((item) => (
                  <div
                    key={`${id}-${item.name}`}
                    className='relative flex w-full cursor-pointer flex-col gap-4 rounded-md border border-input bg-white p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-primary sm:w-fit'
                  >
                    <div className='absolute inset-0 flex justify-between gap-2 opacity-0'>
                      <Checkbox
                        id={`${id}-${item.name}`}
                        value={item.defaultChecked.toString()}
                        className='text-centers order-1 after:absolute after:inset-0'
                        defaultChecked={item.defaultChecked}
                        onCheckedChange={(checked) =>
                          handleOnChangedCheckbox(field, checked, item.name)
                        }
                      />
                    </div>

                    <FormLabel
                      htmlFor={`${id}-${item.name}`}
                      className='text-center'
                    >
                      {item.label}
                    </FormLabel>
                  </div>
                ))}
              </div>

              {description && <FormDescription>{description}</FormDescription>}
            </FormItem>

            {showError && <FormMessage className='mt-2' />}
          </>
        )}
      />
    </div>
  )
}

export { FormCheckboxes }
