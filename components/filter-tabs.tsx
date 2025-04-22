"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const filters = [
  { id: "all", label: "Todos" },
  { id: "new-pope", label: "Novo Papa" },
  { id: "breaking-news", label: "Últimas Notícias" },
  { id: "trump-presidency", label: "Presidência Trump" },
  { id: "trade-war", label: "Guerra Comercial" },
  { id: "china", label: "China" },
  { id: "canada", label: "Canadá" },
  { id: "ai", label: "IA" },
  { id: "geopolitics", label: "Geopolítica" },
  { id: "middle-east", label: "Oriente Médio" },
  { id: "economy", label: "Economia" },
]

export function FilterTabs() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="flex items-center border rounded-md mb-6">
      <div className="relative md:hidden flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Buscar" className="pl-9 border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>

      <div className="overflow-x-auto flex-1 md:flex-none">
        <div className="flex min-w-max">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-3 py-2 text-sm transition-colors whitespace-nowrap",
                activeFilter === filter.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center border-l">
        <button className="p-2 hover:bg-muted">
          <SlidersHorizontal className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-muted">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
