import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { ClientOnly } from "@/components/client-only"
import { SearchInput } from "@/components/search-input"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center h-16">
        <div className="flex items-center gap-2 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <Link href="/" className="font-bold text-xl">
            Finturo
          </Link>
        </div>

        <div className="hidden md:block flex-1 max-w-md">
          <SearchInput />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center">
            Mais <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <ModeToggle />

          <ClientOnly>
            <UserNav />
          </ClientOnly>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
