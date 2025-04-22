import Link from "next/link"
import { Search, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

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
          <span className="font-bold text-xl">Finturo</span>
        </div>

        <div className="relative hidden md:flex items-center flex-1 max-w-md">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar mercados" className="pl-9 pr-4 rounded-full" />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center">
            Mais <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Cadastrar</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
