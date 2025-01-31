export type Element = {
  id: string
  parameter?: { name?: string; value?: string }
  isParametrized: boolean
  imgSrc?: string
  type: ElementType
  text: string
  style: React.CSSProperties
  visible: boolean
  locked: boolean
  contentEditable: boolean
} | null

export type ElementType = "image" | "text" | "background" | "frame"
