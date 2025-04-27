import path from 'path';
import fs from 'fs';

// Function to safely import the generated patterns
const loadRemotePatterns = async () => {
  const patternsPath = path.join(process.cwd(), 'remote-patterns.generated.js');
  try {
    if (fs.existsSync(patternsPath)) {
      // Use dynamic import() for ES Modules
      // Remove the cache-busting query string
      const patternsModule = await import(patternsPath);
      // Assuming the module exports the array directly (module.exports = [...])
      // Access the default export if needed: patternsModule.default
      return patternsModule.default || patternsModule; 
    } 
  } catch (error) {
    console.warn(`Warning: Could not load remote patterns from ${patternsPath}`, error);
  }
  return []; // Return empty array if file doesn't exist or fails to load
};

/** @type {import('next').NextConfig} */
// Make the config function async to allow awaiting loadRemotePatterns
const nextConfig = async () => { 
  const generatedPatterns = await loadRemotePatterns();

  return {
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
        ...generatedPatterns,
      ],
    },
  };
}

export default nextConfig 