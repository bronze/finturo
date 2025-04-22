import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { LoginForm } from "@/components/login-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Entrar | Finturo",
  description: "Entre na sua conta Finturo",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Entrar</h1>
            <p className="text-muted-foreground">Entre com seu e-mail e senha para acessar sua conta</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="/cadastro" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
