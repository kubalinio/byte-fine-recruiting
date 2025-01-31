import type { MoveableManagerInterface, Renderer } from "react-moveable"

const CustomOrigin = {
  name: "customOrigin",
  props: [],
  events: [],
  render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
    const { contentWidth, contentHeight } = moveable.state

    return (
      <div
        key='custom-origin'
        className='moveable-custom-origin absolute z-50 size-6 rounded-full border-4 border-white bg-primary'
        style={{
          transform:
            `translate(-50%, -50%)` +
            `translate(${contentWidth / 1}px, ${contentHeight / 1}px)`
        }}
      />
    )
  }
}

export { CustomOrigin }
