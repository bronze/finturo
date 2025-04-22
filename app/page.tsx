import { Navbar } from "@/components/navbar"
import { CategoryTabs } from "@/components/category-tabs"
import { FilterTabs } from "@/components/filter-tabs"
import { MarketGrid } from "@/components/market-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4">
        <CategoryTabs />
        <FilterTabs />
        <MarketGrid />
      </div>
    </main>
  )
}
