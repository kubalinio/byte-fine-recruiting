import { createContext, ReactNode, useContext, useRef } from "react"

import { Button } from "@ap2p/ui"
import { cn } from "@ap2p/utils"
import { PencilLine } from "lucide-react"
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

// Props interface for the provider
interface EditableContextProviderProps {
  children: ReactNode
  defaultValue?: boolean
}

// Provider component that creates a new store instance for each provider
export const EditableContextProvider = ({
  children,
  defaultValue = false
}: EditableContextProviderProps) => {
  // Use useRef to maintain the same store instance across re-renders
  const storeRef = useRef(createEditableStore(defaultValue))

  return (
    <EditableContext.Provider value={storeRef.current}>
      {children}
    </EditableContext.Provider>
  )
}

// Custom hook to use the editable store from context
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

// EditButton component with toggle functionality
export const EditButton = ({
  children,
  className
}: {
  children?: ReactNode
  className?: string
}) => {
  const { isEditing, toggleEdit } = useEditable()

  if (isEditing) return null
  return (
    <Button
      variant='outline'
      size='sm'
      onClick={toggleEdit}
      className={cn("flex items-center gap-2", className)}
      aria-label={isEditing ? "Cancel editing" : "Edit information"}
    >
      {!isEditing && !children && (
        <>
          <PencilLine className='h-4 w-4' />
          <span>Edit</span>
        </>
      )}

      {!isEditing && children && children}
    </Button>
  )
}
