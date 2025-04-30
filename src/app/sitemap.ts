import { MetadataRoute } from 'next'
import { getAllPosts, getAllTags } from '@/lib/ghost/utils'
import { GhostPost, GhostTag } from '@/lib/ghost/client'

// Determine base URL based on Vercel environment variables
const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    // Use the canonical production URL from Vercel settings
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    // Use the deployment-specific URL for previews/development
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback for local development or if Vercel vars aren't set
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; 
};

const BASE_URL = getBaseUrl();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Pages
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(), // Use current date as placeholder
    changeFrequency: 'monthly' as const, // Adjust frequency as needed
    priority: route === '/' ? 1.0 : 0.8, // Home page higher priority
  }));

  // 2. Dynamic Blog Posts
  const posts = await getAllPosts();
  const postRoutes = posts.map((post: GhostPost) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at || post.published_at || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Dynamic Tag Pages
  const tags = await getAllTags();
  // Filter out internal tags (like those starting with #)
  const publicTags = tags.filter((tag: GhostTag) => !tag.name.startsWith('#'));
  const tagRoutes = publicTags.map((tag: GhostTag) => ({
    url: `${BASE_URL}/blog/tag/${tag.slug}`,
    lastModified: new Date().toISOString(), // Tags don't have a modified date in Ghost API
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 4. Combine all routes
  return [
    ...staticRoutes,
    ...postRoutes,
    ...tagRoutes,
  ];
} 