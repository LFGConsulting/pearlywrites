import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export const mainNavigation: NavigationLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
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