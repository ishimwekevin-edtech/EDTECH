"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  title: string
  description?: string
  onClose: () => void
  className?: string
}

export function Toast({ title, description, onClose, className }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 w-full max-w-sm rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-top-2 duration-300",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="font-semibold text-foreground">{title}</div>
          {description && <div className="mt-1 text-sm text-muted-foreground">{description}</div>}
        </div>
        <button onClick={onClose} className="rounded-sm opacity-70 hover:opacity-100 transition-opacity">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
