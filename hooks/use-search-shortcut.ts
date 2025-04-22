"use client"

import { useEffect, type RefObject } from "react"

export function useSearchShortcut(inputRef: RefObject<HTMLInputElement>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verificar se a tecla pressionada é "/"
      if (event.key === "/" || event.key === "Slash") {
        // Verificar se o foco não está em um campo de entrada ou área de texto
        const activeElement = document.activeElement
        const isInputActive =
          activeElement instanceof HTMLInputElement ||
          activeElement instanceof HTMLTextAreaElement ||
          activeElement?.hasAttribute("contenteditable")

        if (!isInputActive) {
          // Prevenir o comportamento padrão (digitar "/" no campo atual)
          event.preventDefault()

          // Focar no campo de busca
          inputRef.current?.focus()
        }
      }
    }

    // Adicionar o event listener
    document.addEventListener("keydown", handleKeyDown)

    // Remover o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [inputRef])
}
