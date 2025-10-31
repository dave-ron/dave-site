'use client'
import React, { useState } from 'react'

type Option = { value: string; label: string }
interface DropdownProps {
  options: string[] | Option[]
  onSelect?: (value: string) => void
  label?: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const normalized: Option[] = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  )

  const handleSelect = (opt: Option) => {
    setSelectedOption(opt.value)
    setIsOpen(false)
    onSelect?.(opt.value)
  }

  return (
    <div className="relative inline-block text-left">
      {label && <span className="block text-sm mb-1">{label}</span>}
      <button
        type="button"
        onClick={() => setIsOpen((s) => !s)}
        className="px-3 py-2 border rounded flex items-center justify-between w-48"
      >
        <span>{selectedOption ?? 'Select...'}</span>
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1l-4.25 4.656a.75.75 0 01-1.12 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded shadow z-10">
          {normalized.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown