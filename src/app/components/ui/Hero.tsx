import { Container } from './Container'
import { Button } from './Button'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function Hero({
  title = "Crafting Content That Connects",
  subtitle = "Expert content strategy, SEO optimization, and educational publishing services to help your brand stand out and engage your audience.",
  ctaText = "Get Started",
  ctaHref = "/contact",
  className = '',
}: HeroProps) {
  return (
    <div className="relative min-h-[600px] bg-gray-900">
      {/* Background image - increase visibility by reducing opacity */}
      <img 
        src="/pearlywriteshero.jpeg"
        alt="Creative workspace with colorful umbrellas and hanging lights"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      
      {/* Gradient overlay - lighter gradient for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/70" />
      
      {/* Content */}
      <Container className={`relative py-24 sm:py-32 ${className}`}>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-sm">
            {title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-100 drop-shadow-sm">
            {subtitle}
          </p>
          <div className="mt-10 flex gap-x-6">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}