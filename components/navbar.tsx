import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"
import { ClientOnly } from "@/components/client-only"
import { SearchInput } from "@/components/search-input"
import { Logo } from "@/components/logo"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center h-16">
        <div className="flex items-center mr-4">
          <Logo size="medium" />
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
