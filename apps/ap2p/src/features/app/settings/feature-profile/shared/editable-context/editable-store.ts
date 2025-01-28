import { createContext } from "react"

import { create } from "zustand"

// Define the store state type
interface EditableState {
  isEditing: boolean
  toggleEdit: () => void
  setEditing: (value: boolean) => void
}

// Create store factory
const createEditableStore = (defaultValue = false) =>
  create<EditableState>((set) => ({
    isEditing: defaultValue,
    toggleEdit: () => set((state) => ({ isEditing: !state.isEditing })),
    setEditing: (value: boolean) => set({ isEditing: value })
  }))

// Create the context to hold the store instance
const EditableContext = createContext<
  ReturnType<typeof createEditableStore> | undefined
>(undefined)

export { createEditableStore, EditableContext }
