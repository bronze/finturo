"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem("finturo_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Função de login
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulação de uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verificar credenciais (simulado)
      if (email === "usuario@exemplo.com" && password === "senha123") {
        const newUser = { id: "1", name: "Usuário Teste", email }
        setUser(newUser)
        localStorage.setItem("finturo_user", JSON.stringify(newUser))
        router.push("/")
      } else {
        throw new Error("Credenciais inválidas")
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Função de cadastro
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulação de uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Criar novo usuário (simulado)
      const newUser = { id: Date.now().toString(), name, email }
      setUser(newUser)
      localStorage.setItem("finturo_user", JSON.stringify(newUser))
      router.push("/")
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Função de logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem("finturo_user")
    router.push("/entrar")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}
