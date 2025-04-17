/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['seo-and-content-strategy.ghost.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seo-and-content-strategy.ghost.io',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig 