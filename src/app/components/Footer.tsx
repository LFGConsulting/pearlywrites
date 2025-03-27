import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FooterLink {
  name: string;
  href: string;
}

const navigation: FooterLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const social: SocialLink[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/pearlywrites',
    icon: FaTwitter
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pearlywrites/',
    icon: FaLinkedin
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pearlywrites/',
    icon: FaInstagram
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@pearlywrites',
    icon: FaTiktok
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/user/PearlyWrites',
    icon: FaYoutube
  }
];

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-12 w-12"
              src="/pearlywrites-logo.jpeg"
              alt="PearlyWrites"
              width={48}
              height={48}
              priority
            />
            <p className="text-sm leading-6 text-gray-600">
              Making the world better through strategic content and clear communication.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a key={item.name} href={item.href} className="text-[#663399] hover:text-[#8652c7]">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[#663399]">Navigation</h3>
                <ul role="list" className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-[#663399]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} PearlyWrites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 