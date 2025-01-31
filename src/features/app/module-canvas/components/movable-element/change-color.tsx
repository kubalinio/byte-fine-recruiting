import type { MoveableManagerInterface, Renderer } from "react-moveable"

import { RadioGroup, RadioGroupItem } from "ui"
import { cn } from "utils/cn"

const ChangeColor = {
  name: "changeColor",
  props: ["type"],
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const props = moveable.props as {
      changeText?: (value: string) => void
      type?: string
    }
    const { origin } = moveable.state

    const colors = [
      { value: "text-black-100", label: "Black", color: "bg-black-100" },
      { value: "text-white", label: "White", color: "bg-white" },
      { value: "text-[#CF0000]", label: "Red", color: "bg-[#CF0000]" },
      { value: "text-[#0055FF]", label: "Blue", color: "bg-[#0055FF]" },
      { value: "text-[#00DA16]", label: "Green", color: "bg-[#00DA16]" }
    ]

    const handleChangeColor = (value: string) => {
      props.changeText?.(value)
    }

    if (props.type === "image") return null
    return (
      <fieldset
        key='change-color'
        className='absolute py-2'
        style={{
          transform: `translate(0px, ${origin[1] * 2 + 8}px)`
        }}
      >
        <RadioGroup
          className='flex gap-2 bg-transparent'
          defaultValue='text-black-100'
          onValueChange={handleChangeColor}
        >
          {colors.map((item) => (
            <div
              key={`change-color-${item.value}`}
              className='relative flex items-center justify-center'
            >
              <RadioGroupItem
                value={item.value}
                id={`change-color-${item.value}`}
                className={cn(
                  "size-6 cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "data-[state=checked]:outline data-[state=checked]:outline-2 data-[state=checked]:outline-offset-2 data-[state=checked]:outline-white [&>span]:opacity-0",
                  {
                    [item.color]: item.color
                  }
                )}
              />
            </div>
          ))}
        </RadioGroup>
      </fieldset>
    )
  }
}

export { ChangeColor }
