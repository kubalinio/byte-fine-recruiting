/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { Element } from "types/canvas-types"

import { useImageField } from "../../hooks/use-image-field"

const ImageField = ({ element }: { element: NonNullable<Element> }) => {
  const { handleElementClick } = useImageField()

  return (
    <div
      key={element.id}
      id={element.id}
      onClick={(e) => {
        handleElementClick(e, element)
      }}
      style={{
        ...element.style,
        position: "absolute",
        display: element.visible ? "block" : "none",
        overflow: "hidden",
        width: element.style.width,
        height: element.style.height
      }}
      className='image-element'
    >
      <img
        style={{
          imageResolution: "from-image",
          width: "100%",
          height: "100%"
        }}
        src={element.imgSrc}
        alt='canvas-image'
      />
    </div>
  )
}

export { ImageField }
