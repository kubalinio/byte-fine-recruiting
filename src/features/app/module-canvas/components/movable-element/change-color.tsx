import type { MoveableManagerInterface, Renderer } from "react-moveable"
import type { Element } from "types/canvas-types"

import { RadioGroup, RadioGroupItem } from "ui"
import { cn } from "utils/cn"

const ChangeColor = {
  name: "changeColor",
  props: ["type"],
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, _React: Renderer) {
    const { changeText, selectedElement } = moveable.props as {
      changeText?: (value: string) => void
      selectedElement?: Element
    }
    const { origin } = moveable.state

    const colors = [
      { value: "#353535", label: "Black" },
      { value: "#ffffff", label: "White" },
      { value: "#CF0000", label: "Red" },
      { value: "#0055FF", label: "Blue" },
      { value: "#00DA16", label: "Green" }
    ]

    const handleChangeColor = (value: string) => {
      changeText?.(value)
    }

    if (selectedElement?.type === "image") return null
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
          defaultValue={selectedElement?.style.color}
          value={selectedElement?.style.color}
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
                style={{
                  backgroundColor: item.value
                }}
                className={cn(
                  "size-6 cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                  "data-[state=checked]:outline data-[state=checked]:outline-2 data-[state=checked]:outline-offset-2 data-[state=checked]:outline-white [&>span]:opacity-0"
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
