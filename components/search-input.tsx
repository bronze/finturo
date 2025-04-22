"use client"

import { useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearchShortcut } from "@/hooks/use-search-shortcut"

interface SearchInputProps {
  placeholder?: string
  className?: string
}

export function SearchInput({ placeholder = "Buscar mercados", className = "" }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  // Usar o hook personalizado para o atalho de teclado
  useSearchShortcut(inputRef)

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input ref={inputRef} placeholder={placeholder} className="pl-9 pr-4 rounded-full" />
      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        /
      </kbd>
    </div>
  )
}
