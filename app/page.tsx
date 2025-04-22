import { Navbar } from "@/components/navbar"
import { CategoryTabs } from "@/components/category-tabs"
import { FilterTabs } from "@/components/filter-tabs"
import { MarketGrid } from "@/components/market-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 flex-1">
        <CategoryTabs />
        <FilterTabs />
        <MarketGrid />
      </div>
      <Footer />
    </main>
  )
}
