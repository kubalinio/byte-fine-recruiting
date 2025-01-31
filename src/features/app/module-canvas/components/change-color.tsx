/* eslint-disable jsx-a11y/label-has-associated-control */

import { RadioGroup, RadioGroupItem } from "ui"
import { cn } from "utils/cn"

type ChangeColorProps = {
  onChange: (value: string) => void
}

const ChangeColor = ({ onChange }: ChangeColorProps) => {
  const colors = [
    { value: "text-black-100", label: "Black", color: "bg-black-100" },
    { value: "text-white", label: "White", color: "bg-white" },
    { value: "text-[#CF0000]", label: "Red", color: "bg-[#CF0000]" },
    { value: "text-[#0055FF]", label: "Blue", color: "bg-[#0055FF]" },
    { value: "text-[#00DA16]", label: "Green", color: "bg-[#00DA16]" }
  ]

  const handleChangeColor = (value: string) => {
    onChange(value)
  }

  return (
    <fieldset key='change-color' className='absolute left-0 top-full py-2'>
      <RadioGroup
        className='flex gap-2 bg-transparent'
        defaultValue='text-white'
        onValueChange={handleChangeColor}
      >
        {colors.map((item) => (
          <label
            key={`change-color-${item.value}`}
            className={cn(
              "relative flex size-4 cursor-pointer flex-col items-center justify-center rounded-full text-center text-xl transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50 has-[[data-state=checked]]:outline has-[[data-state=checked]]:outline-2 has-[[data-state=checked]]:outline-offset-2 has-[[data-state=checked]]:outline-white",
              {
                [item.color]: item.color
              }
            )}
          >
            <RadioGroupItem
              id={`change-color-${item.value}`}
              value={item.value}
              className='sr-only after:absolute after:inset-0'
            />
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}

export { ChangeColor }
