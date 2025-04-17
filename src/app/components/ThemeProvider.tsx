'use client'

import { ReactNode, useEffect } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return children
} 