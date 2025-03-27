import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'brand'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    brand: 'bg-brand-100 text-brand-800'
  }

  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'
  const styles = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <span className={styles}>
      {children}
    </span>
  )
} 