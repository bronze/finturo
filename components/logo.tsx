"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  size?: "small" | "medium" | "large"
}

export function Logo({ size = "medium" }: LogoProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const dimensions = {
    small: { height: 6, width: 16 },
    medium: { height: 8, width: 24 },
    large: { height: 10, width: 30 },
  }

  const { height, width } = dimensions[size]

  // Enquanto não estiver montado, renderizar um placeholder
  if (!mounted) {
    return <div className={`h-${height} w-${width}`} />
  }

  const isDark = theme === "dark" || resolvedTheme === "dark"

  return (
    <Link href="/" className="flex items-center">
      <div
        className={`relative h-${height} w-${width}`}
        style={{ height: `${height * 0.25}rem`, width: `${width * 0.25}rem` }}
      >
        <Image
          src={isDark ? "/logo-dark.png" : "/logo.png"}
          alt="Finturo"
          fill
          className="object-contain"
          style={{ filter: isDark ? "none" : "invert(1) brightness(2)" }}
          priority
        />
      </div>
    </Link>
  )
}
