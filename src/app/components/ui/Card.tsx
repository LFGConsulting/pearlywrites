import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  href?: string
  footer?: ReactNode
  className?: string
}

export function Card({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = '', 
  href, 
  footer,
  className = '' 
}: CardProps) {
  const content = (
    <>
      {imageSrc && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        )}
        {footer && (
          <div className="mt-4 border-t border-gray-100 pt-4">
            {footer}
          </div>
        )}
      </div>
    </>
  )

  const baseStyles = 'bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden'
  const styles = `${baseStyles} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    )
  }

  return (
    <div className={styles}>
      {content}
    </div>
  )
} 