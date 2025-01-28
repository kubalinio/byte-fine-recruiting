"use client"

import * as React from "react"

import { Command as CommandPrimitive } from "cmdk"
import { X } from "lucide-react"

import { Badge } from "./badge"
import { Command, CommandGroup, CommandItem } from "./command"

type Option =
  | {
      value: string
      label: string
    }
  | string

interface MultiSelectProps {
  options: Option[]
  selectedValues: Option[]
  onChange: (newSelectedValues: Option[]) => void
  freeSolo?: boolean
}

export function MultiSelect(props: MultiSelectProps) {
  const { options, selectedValues, onChange } = props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const handleUnselect = React.useCallback(
    (option: Option) => {
      onChange(
        selectedValues.filter((elem) => {
          if (typeof elem === "object" && typeof option === "object") {
            return elem.value !== option.value
          }
        })
      )
    },
    [onChange, selectedValues]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            const newSelected = [...selectedValues]
            newSelected.pop()
            onChange(newSelected)
            return
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur()
        }
      }
    },
    [onChange, selectedValues]
  )

  const selectables = options.filter(
    (option) => !selectedValues.includes(option)
  )

  return (
    <Command
      onKeyDown={handleKeyDown}
      className='overflow-visible bg-transparent'
    >
      <div className='group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
        <div className='flex flex-wrap gap-1'>
          {selectedValues.map((option) => {
            return (
              <Badge key={typeof option === "object" ? option.value : option}>
                {typeof option === "object" ? option.label : option}
                <button
                  className='ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2'
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => {
                    handleUnselect(option)
                  }}
                >
                  <X className='size-3 text-muted-foreground hover:text-foreground' />
                </button>
              </Badge>
            )
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => {
              setOpen(false)
            }}
            onFocus={() => {
              setOpen(true)
            }}
            placeholder='Select frameworks...'
            className='ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground'
          />
        </div>
      </div>
      <div className='relative mt-2'>
        {open && selectables.length > 0 ? (
          <div className='animate-in absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none'>
            <CommandGroup className='h-full overflow-auto'>
              {selectables.map((option) => {
                return (
                  <CommandItem
                    key={typeof option === "object" ? option.value : option}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue("")
                      onChange([...selectedValues, option])
                    }}
                    className={"cursor-pointer"}
                  >
                    {typeof option === "object" ? option.label : option}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
