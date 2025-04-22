import Link from "next/link"
import { Mail, Twitter, Instagram, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 md:py-6 px-4">
        <div className="text-sm text-muted-foreground mb-4 sm:mb-0">Finturo Inc. © {new Date().getFullYear()}</div>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 sm:mb-0">
          <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacidade
          </Link>
          <Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Termos de Uso
          </Link>
          <Link href="/aprenda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Aprenda
          </Link>
          <Link href="/carreiras" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Carreiras
          </Link>
          <Link href="/imprensa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Imprensa
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="mailto:contato@finturo.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
