import type { FieldValues, Path } from "react-hook-form";

import { useFormContext } from "react-hook-form";

import {
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ap2p/ui";
import { cn } from "@ap2p/utils";

type NCheckboxFieldProps = {
  className?: string;
  label?: string | React.ReactNode;
  description?: string;
  showError?: boolean;
};

type CheckboxControllerType<T extends FieldValues> = {
  name: Path<T>;
};

type ControlledCheckboxProps<T extends FieldValues> = NCheckboxFieldProps &
  CheckboxControllerType<T>;

const ControlledCheckboxField = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  showError = true,
  ...props
}: ControlledCheckboxProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          <div className="relative flex items-center">
            <FormControl>
              <Checkbox
                {...props}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>

            {label && (
              <FormLabel className="mb-0 ml-3 text-sm">{label}</FormLabel>
            )}
          </div>

          {description && <FormDescription>{description}</FormDescription>}

          {showError && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export { ControlledCheckboxField };
