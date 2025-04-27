/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'seo-and-content-strategy.ghost.io',
      'www.gravatar.com',
      'static.ghost.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seo-and-content-strategy.ghost.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
        pathname: '/v4.0.0/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig 