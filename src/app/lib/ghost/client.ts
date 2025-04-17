import GhostContentAPI from '@tryghost/content-api';

// Validate environment variables
const ghostUrl = process.env.NEXT_PUBLIC_GHOST_URL;
const ghostKey = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

if (!ghostUrl || !ghostKey) {
  throw new Error('Ghost URL and Content API Key must be provided');
}

// Debug logging for Ghost configuration
console.log('Ghost URL:', process.env.NEXT_PUBLIC_GHOST_URL);

// Initialize Ghost Content API client
export const ghostClient = new GhostContentAPI({
  url: ghostUrl,
  key: ghostKey,
  version: 'v5.0'
});

// Utility function to ensure we always have an image URL
export function getImageUrl(imageUrl: string | null): string {
  console.log('Processing image URL:', { input: imageUrl });
  if (!imageUrl) {
    console.log('No image URL provided, using placeholder');
    return '/images/placeholder-post.svg';
  }
  console.log('Returning processed image URL:', imageUrl);
  return imageUrl;
}

// Add debug wrapper for post fetching
const originalGetPost = ghostClient.posts.read.bind(ghostClient.posts);
ghostClient.posts.read = async function(...args: Parameters<typeof originalGetPost>) {
  const post = await originalGetPost(...args);
  const postWithPlaceholder = {
    ...post,
    feature_image: getImageUrl(post.feature_image),
    og_image: getImageUrl(post.og_image),
    twitter_image: getImageUrl(post.twitter_image)
  };
  console.log('Raw Ghost Post Data:', {
    title: postWithPlaceholder.title,
    feature_image: postWithPlaceholder.feature_image,
    feature_image_alt: postWithPlaceholder.feature_image_alt,
    url: postWithPlaceholder.url
  });
  return postWithPlaceholder;
}

// Type definitions for Ghost content
export interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  feature_image: string | null;
  visibility: string;
  meta_title: string | null;
  meta_description: string | null;
}

export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  featured: boolean;
  published_at: string;
  updated_at: string;
  custom_excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  reading_time: number;
  primary_tag: GhostTag | null;
  tags: GhostTag[];
  primary_author: GhostAuthor | null;
  authors: GhostAuthor[];
}

export interface GhostPage {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  featured: boolean;
  published_at: string;
  custom_excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
}

export interface GhostAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  facebook: string | null;
  twitter: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

export default ghostClient; 