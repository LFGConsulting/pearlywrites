import Image from 'next/image'
import { mainNavigation, socialLinks } from '../config/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Image
              className="h-12 w-12"
              src="/logo-just-P.png"
              alt="PearlyWrites"
              width={48}
              height={48}
              priority
            />
            <p className="text-sm leading-6 text-gray-600">
              Making the world better through strategic content and clear communication.
            </p>
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a 
                  key={name}
                  href={href}
                  className="text-brand hover:text-brand-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <nav aria-label="Footer Navigation">
                <h3 className="text-sm font-semibold leading-6 text-brand">Navigation</h3>
                <ul role="list" className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {mainNavigation.map(({ name, href }) => (
                    <li key={name}>
                      <a 
                        href={href}
                        className="text-sm leading-6 text-gray-600 hover:text-brand transition-colors"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {currentYear} PearlyWrites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 