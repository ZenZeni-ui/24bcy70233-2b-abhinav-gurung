"use client"

import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select"
import { SelectOption } from "@/types"

interface SelectControlProps {
  selectLabel: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  groupLabel?: string
  placeholder?: string
}

export const SelectControl: React.FC<SelectControlProps> = ({
  selectLabel,
  value,
  onValueChange,
  options,
  groupLabel,
  placeholder = "Select an option",
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-bold text-yellow-300 whitespace-nowrap">
        {selectLabel}
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-blue-900 text-cyan-300 text-lg h-12 border-2 border-pink-500 font-bold">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {groupLabel && (
              <div className="px-2 py-1.5 text-sm font-medium text-gray-500">
                {groupLabel}
              </div>
            )}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
