import Link from 'next/link'
import { Container } from './components/ui'

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-base font-semibold text-brand-500 dark:text-brand-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-500 dark:text-brand-400 hover:text-brand-400 dark:hover:text-brand-300"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </Container>
  )
} 