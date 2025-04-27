import path from 'path';
import fs from 'fs';

// Function to safely import the generated patterns
const loadRemotePatterns = () => {
  const patternsPath = path.join(process.cwd(), 'remote-patterns.generated.js');
  try {
    if (fs.existsSync(patternsPath)) {
      // Use dynamic import for .js file within an .mjs file
      // Note: This requires Node.js 13.2.0+ and might need experimental flags
      // depending on your exact setup, although Vercel often handles this.
      // A more robust way in older setups might involve require() if possible,
      // or ensuring the generated file is also .mjs
      // For now, let's assume dynamic import works in the build environment.
      // We remove the module cache to ensure we get the latest version during build
      delete require.cache[require.resolve(patternsPath)];
      return require(patternsPath); // Use require for .js files
    } 
  } catch (error) {
    console.warn(`Warning: Could not load remote patterns from ${patternsPath}`, error);
  }
  return []; // Return empty array if file doesn't exist or fails to load
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // You might not need the 'domains' array anymore if all are covered by patterns
    // domains: [
    //   'seo-and-content-strategy.ghost.io',
    //   'www.gravatar.com',
    //   'static.ghost.org'
    // ],
    remotePatterns: [
      // Keep any non-Ghost patterns you need
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Add other static patterns here if needed
      // ...
      // Dynamically load patterns generated from Ghost
      ...loadRemotePatterns(),
    ],
  },
}

export default nextConfig 