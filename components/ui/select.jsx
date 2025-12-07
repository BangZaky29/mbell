"use client"
import * as React from "react"

export function Select({ value, onValueChange, children }) {
  return (
    <select
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {children}
    </select>
  )
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>
}

// Dummy components untuk trigger/value agar kode ContactSection tetap kompatibel
export function SelectTrigger({ children }) {
  return <>{children}</>
}
export function SelectValue({ placeholder }) {
  return <>{placeholder}</>
}
export function SelectContent({ children }) {
  return <>{children}</>
}
