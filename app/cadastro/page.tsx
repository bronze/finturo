import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SignUpForm } from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Cadastro | Finturo",
  description: "Crie sua conta na Finturo",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Criar Conta</h1>
            <p className="text-muted-foreground">Preencha os campos abaixo para criar sua conta</p>
          </div>
          <SignUpForm />
          <div className="text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/entrar" className="text-primary hover:underline">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
