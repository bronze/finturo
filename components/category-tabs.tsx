"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "trending", label: "Em Alta", active: true },
  { id: "new", label: "Novo" },
  { id: "canadian-election", label: "Eleição Canadense", badge: true },
  { id: "politics", label: "Política" },
  { id: "sports", label: "Esportes" },
  { id: "crypto", label: "Cripto" },
  { id: "tech", label: "Tecnologia" },
  { id: "culture", label: "Cultura" },
  { id: "world", label: "Mundo" },
  { id: "economy", label: "Economia" },
  { id: "trump", label: "Trump" },
  { id: "elections", label: "Eleições" },
  { id: "mentions", label: "Menções" },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("trending")

  return (
    <div className="overflow-x-auto py-4 -mx-4 px-4">
      <div className="flex space-x-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
              activeCategory === category.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
            )}
          >
            {category.label}
            {category.badge && <Badge variant="destructive" className="absolute -top-1 -right-1 h-2 w-2 p-0" />}
          </button>
        ))}
      </div>
    </div>
  )
}
