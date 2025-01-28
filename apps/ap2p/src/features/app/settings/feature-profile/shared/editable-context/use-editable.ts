// Custom hook to use the editable store from context

import { useContext } from "react"

import { EditableContext } from "./editable-store"

export const useEditable = () => {
  const store = useContext(EditableContext)

  if (!store) {
    throw new Error(
      "useEditable must be used within an EditableContextProvider"
    )
  }

  return {
    isEditing: store((state) => state.isEditing),
    toggleEdit: store((state) => state.toggleEdit),
    setEditing: store((state) => state.setEditing)
  }
}
